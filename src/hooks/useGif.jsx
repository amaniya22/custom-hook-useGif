import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [getGIF, setGIF] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchGif = useCallback(async (tag = "") => {
    setError("");
    setLoading(true);

    try {
      const {data} = await axios.get(
        tag ? `${url}&tag=${tag}&rating=g` : `${url}&tag=&rating=g`
      );
      const imageURL = data.data.images.downsized_large.url;
      console.log("Fetched GIF URL:", imageURL);
      setGIF(imageURL);
    } catch (err) {
      if (err.response && err.response.status === 429) {
        setError("Rate limit exceeded. Please wait and try again.");
      } else {
        setError("Failed to fetch GIF. Please try again.");
      }
      console.error("Error fetching GIF:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (tag !== undefined) {
      fetchGif(tag);
    }
  }, [tag, fetchGif]);

  return { getGIF, fetchGif, loading, error };
};

export default useGif;
