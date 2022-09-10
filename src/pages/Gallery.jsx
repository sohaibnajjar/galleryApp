import axios from "axios";
import React, { useEffect, useState } from "react";
import "../index.css";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const getImages = async () => {
    const res = await axios({
      method: "get",
      url: `https://picsum.photos/v2/list?page=${page}&limit=9`,
    });
    setData(res.data);
  };

  useEffect(() => {
    getImages();
  }, [page]);

  return (
    <div className="container">
      <div className="gallery">
        {data.map((item) => (
          <img
            key={item.id}
            className="img"
            src={item.download_url}
            alt={item.author}
          />
        ))}
      </div>
      <div>{page}</div>
      <div className="button-container">
        <button
          className="generate-btn"
          onClick={() => {
            setPage((prev) => prev - 1);
          }}
          disabled={page < 2}
        >
          {"<=   prev"}
        </button>
        <button
          className="generate-btn"
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
          disabled={page > 9}
        >
          {"next  =>"}
        </button>
      </div>
    </div>
  );
};

export default Gallery;
