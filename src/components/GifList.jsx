import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  const { gifIDs, setSelectedGif } = props;

  return (
    <div className="gif-list">
      {gifIDs.map((gifID) => <Gif gifID={gifID} key={gifID} setSelectedGif={setSelectedGif} />)}
    </div>
  );
};

export default GifList;