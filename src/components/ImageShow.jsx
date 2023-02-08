import React from "react";

const ImageShow = ({ image }) => {
  const { alt_description, urls, description } = image;
  const { regular } = urls;
  return (
    <div>
      <figure>
        <img src={regular} alt={alt_description || description} />
        <figcaption>{alt_description || description}</figcaption>
      </figure>
    </div>
  );
};

export default ImageShow;
