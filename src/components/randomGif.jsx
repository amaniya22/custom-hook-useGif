import React from "react";
import useGif from "../hooks/useGif";

const RandomGif = () => {
  const { getGIF, fetchGif } = useGif();

  return (
    <div className="random-gif-container">
      <h1>Random Gif</h1>
      <div className="gif-img-container">
        <img width="500" src={getGIF} alt="Random Gif" />
      </div>
      <button className="gif-btn-new" onClick={fetchGif}>
        CLICK FOR NEW
      </button>
    </div>
  );
};

export default RandomGif;
