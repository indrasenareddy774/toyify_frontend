import React, { useState } from "react";

export const ImageWithFallback = ({ src, alt, className, style }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc("https://via.placeholder.com/400x300?text=Image+Not+Available"); // fallback image
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
    />
  );
};
