import React, { useEffect } from "react";
import useGif from "../hooks/useGif";

const RandomGif = () => {
  const { getGIF, fetchGif, loading, error } = useGif();
  console.log("RandomGif component rendered", getGIF);

  useEffect(() => {
    fetchGif();
  }, [])

  return (
    <div className="random-gif-container">
      <h1>Random Gif</h1>
      <div className="gif-img-container">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {getGIF && <img width="500" src={getGIF} alt="Random Gif" />}
      </div>
      <button className="gif-btn-new" onClick={() => fetchGif()}>
        {loading ? "Fetching..." : "CLICK FOR NEW"}
      </button>
    </div>
  );
};

export default RandomGif;
