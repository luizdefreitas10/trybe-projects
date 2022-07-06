import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      check: false,
      loading: false,
      // favSongs: [],
    };
  }

  async componentDidMount() {
    const { data } = this.props;
    const favoriteSongs = await getFavoriteSongs();
    // this.setState({ favSongs: favoriteSongs });
    this.setState({
      check: (favoriteSongs.length > 0 ? favoriteSongs
        .some((favorite) => favorite.trackId === data.trackId) : false),
      loading: false,
    });
  }

  handleChange = async (event) => {
    this.setState({ loading: true });
    const { checked } = event.target;
    const { check } = this.state;
    console.log(checked);
    this.setState({
      check: checked,
    });
    if (!check) {
      const { data } = this.props;
      // console.log(data);
      await addSong(data);
      this.setState({ loading: false });
    } else {
      const { data } = this.props;
      await removeSong(data);
      this.setState({ loading: false });
    }
  }

  render() {
    const { data, previewUrl } = this.props;
    const { check, loading } = this.state;
    return (
      <div className="div-music-card">
        <h1>{ `${data.trackName} ` }</h1>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          {' '}
          <code>audio</code>
          .
        </audio>
        <label
          htmlFor="checkbox-input-id"
        >
          Favorita
          <input
            data-testid={ `checkbox-music-${data.trackId}` }
            type="checkbox"
            id="checkbox-input-id"
            onChange={ this.handleChange }
            checked={ check }
          />
        </label>
        { loading && <Loading /> }
      </div>
    );
  }
}

MusicCard.propTypes = {
  data: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
  }),
}.isRequired;

export default MusicCard;
