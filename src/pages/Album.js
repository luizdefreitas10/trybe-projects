import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      name: '',
      collection: '',
      loading: false,
    };
  }

  componentDidMount() {
    this.musicsApi();
  }

  musicsApi = async () => {
    const { match } = this.props;
    const { id } = match.params;
    const data = await getMusics(id);
    const { artistName, collectionName } = data[0];
    this.setState({ data,
      name: artistName,
      collection: collectionName,
    });
  }

  render() {
    const { data, name, collection, loading } = this.state;
    const [firstIndex, ...restOfData] = data;
    console.log(firstIndex);
    return (
      <div data-testid="page-album">
        <Header />
        { loading ? <Loading />
          : (
            <div className="div-album-artist">
              <div>
                {/* <img src={ data.artworkUrl100 } alt={ data.amgArtistId } /> */}
                <h1 data-testid="artist-name">{ name }</h1>
                <h1 data-testid="album-name">{ collection }</h1>
              </div>
              <div>
                { restOfData.map((d, index) => (
                  <MusicCard
                    key={ index }
                    data={ d }
                    previewUrl={ d.previewUrl }
                    trackId={ d.trackId }
                  />
                )) }
              </div>
            </div>)}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    path: PropTypes.string,
    url: PropTypes.string,
  }),
}.isRequired;

export default Album;
