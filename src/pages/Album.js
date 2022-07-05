import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      name: '',
      collection: '',
    };
  }

  componentDidMount() {
    this.musicsApi();
  }

  musicsApi = async () => {
    const { match } = this.props;
    const { id } = match.params;
    const data = await getMusics(id);
    // console.log(data);
    const { artistName, collectionName } = data[0];
    this.setState({ data, name: artistName, collection: collectionName });
  }

  render() {
    const { data, name, collection } = this.state;
    const [firstIndex, ...restOfData] = data;
    // console.log(data);
    console.log(firstIndex);
    return (
      <div data-testid="page-album">
        <Header />
        <div className="div-album-artist">
          <div>
            <h1 data-testid="artist-name">{ name }</h1>
            <h1 data-testid="album-name">{ collection }</h1>
          </div>
          <div>
            { restOfData.map((d, index) => (
              <MusicCard
                key={ index }
                dataTrackName={ d.trackName }
                previewUrl={ d.previewUrl }
              />
            )) }
          </div>
        </div>
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
