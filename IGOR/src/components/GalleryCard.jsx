import React from "react";

function GalleryCard({ title, image }) {
  return (
    <div className="gallery-card" style={{ backgroundImage: `url(${image})` }}>
      <h2 className="gallery-card-title">{title}</h2>
      <a href="#" className="gallery-card-btn">Mais fotos</a>
    </div>
  );
}

export default GalleryCard;
