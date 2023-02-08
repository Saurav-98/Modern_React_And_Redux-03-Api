import React from "react";
import ImageShow from "./ImageShow";
import "./ImageList.css";

const ImageList = ({ images }) => {
  console.log(images);
  return (
    <div className="image-list">
      {images.map((image) => {
        const { id } = image;
        return <ImageShow key={id} image={image} />;
      })}
    </div>
  );
};

export default ImageList;
