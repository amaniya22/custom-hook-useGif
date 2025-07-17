import React, { useState } from "react";
import useGif from "../hooks/useGif";
import { useDebounce } from "react-use";

const TaggedGif = () => {
  const [tag, setTag] = useState("");
  const [debounceTag, setDebounceTag] = useState("");
  const { getGIF, fetchGif, loading, error } = useGif(debounceTag);

  useDebounce(
    () => {
      setDebounceTag(tag);
    },
    700,
    [tag]
  );

  return (
    <div className="tagged-gif-container">
      <h1>Random {tag} Gif</h1>
      <div className="gif-img-container">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {getGIF && <img width="500" src={getGIF} alt="Tagged Gif" />}
      </div>
      <input
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        className="gif-tag-input"
      />
      <button
        className="gif-btn-new"
        onClick={() => fetchGif(debounceTag)}
        disabled={loading}
      >
        {loading ? "Fetching..." : "CLICK FOR NEW"}
      </button>
    </div>
  );
};

export default TaggedGif;
