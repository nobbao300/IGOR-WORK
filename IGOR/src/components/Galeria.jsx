import React from "react";
import GalleryCard from "./GalleryCard";

function Main() {
  return (
    <main className="gallery">
      {galleryData.map((card) => (
        <GalleryCard key={card.id} title={card.title} image={card.image} />
      ))}
    </main>
  );
}

export default Main;
