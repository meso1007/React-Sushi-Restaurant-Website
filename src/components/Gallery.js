import React from "react";

const Gallery = () => {
  return (
    <section id="gallery" className="bg-black text-white py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Gallery images go here */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <img
              src="path/to/image.jpg"
              alt="Gallery item"
              className="rounded-lg"
            />
          </div>
          {/* Add more gallery items as needed */}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
