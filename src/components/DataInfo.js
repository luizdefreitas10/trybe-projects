import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class DataInfo extends React.Component {
  render() {
    const { data, value } = this.props;
    return (
      <div>
        { data.length === 0 ? <h1>Nenhum álbum foi encontrado</h1>
          : (
            <>
              <h1>{ `Resultado de álbuns de: ${value} ` }</h1>
              <div className="div2-datainfo">
                <ul>
                  { data.map((d) => (
                    <li key={ d.collectionId }>
                      <img src={ d.artworkUrl100 } alt={ `${d.artistName} ` } />
                      <Link
                        to={ `album/${d.collectionId}` }
                        data-testid={ `link-to-album-${d.collectionId}` }
                      >
                        { d.collectionName }
                      </Link>
                    </li>
                  )) }
                </ul>
              </div>
            </>
          ) }
      </div>
    );
  }
}

DataInfo.propTypes = {
  data: PropTypes.shape({
    artistId: PropTypes.number,
    artistName: PropTypes.string,
    collectionId: PropTypes.number,
    collectionName: PropTypes.string,
    collectionPrice: PropTypes.number,
    artworkUrl100: PropTypes.string,
    releaseDate: PropTypes.string,
    trackCount: PropTypes.number,
  }),
}.isRequired;

export default DataInfo;
