import React, { useState } from 'react';

import Gif from './Gif';
import GifList from './GifList';
import SearchBar from './SearchBar';

const giphy = require('giphy-api')({
  apiKey: 'julNBizeQDMeQafJ9LyV6jI9GURswQKr',
  https: true
});

const App = () => {
  const [selectedGif, setSelectedGif] = useState("gG6OcTSRWaSis");
  const [gifList, setGifList] = useState(["gG6OcTSRWaSis",
    "13HgwGsXF0aiGY",
    "13UZisxBxkjPwI",
    "zOvBKUUEERdNm",
    "PnpkimJ5mrZRe",
    "LmNwrBhejkK9EFP504",
    "5ntdy5Ban1dIY",
    "ZG719ozZxGuThHBckn",
    "TilmLMmWrRYYHjLfub",
    "kHrKpJiCbOmkWD4xT9"]);

  const searchGiphy = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      const gifIdArray = res.data.map((gif) => gif.id);
      setGifList(gifIdArray);
    });
  };
  return (
    <div>
      <div className="left-scene">
        <SearchBar searchGiphy={searchGiphy} />
        <div className="selected-gif">
          <Gif gifID={selectedGif} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIDs={gifList} setSelectedGif={setSelectedGif} />
      </div>
    </div>
  );
};

export default App;