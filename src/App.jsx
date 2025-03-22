import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useTheme } from "./ThemeContext";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [images] = useState([
    {
      original: "/images/IMG_2479.jpeg",
      thumbnail: "/images/IMG_2479.jpeg",
      description: "Histology Slide 1 - Placeholder",
    },
    {
      original: "/images/IMG_2485.jpeg",
      thumbnail: "/images/IMG_2485.jpeg",
      description: "Histology Slide 2 - Placeholder",
    },
    {
      original: "/images/IMG_2487.jpeg",
      thumbnail: "/images/IMG_2487.jpeg",
      description: "Histology Slide 3 - Placeholder",
    },
  ]);

  const renderItem = (item) => {
    return (
      <TransformWrapper
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
        minScale={0.5}
        maxScale={4}
        wheel={{ wheelEnabled: true }}
        pinch={{ pinchEnabled: true }}
        doubleClick={{ doubleClick: true }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className="zoom-controls">
              <button onClick={() => zoomIn()}>+</button>
              <button onClick={() => zoomOut()}>-</button>
              <button onClick={() => resetTransform()}>Reset</button>
            </div>
            <TransformComponent>
              <img src={item.original} alt={item.description} />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    );
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div>
            <h1>Atlas de Histología</h1>
            <p>By Luis Hazael Flores Ramírez</p>
          </div>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </header>
      <main className="gallery-container">
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={true}
          showNav={true}
          showThumbnails={true}
          thumbnailPosition="bottom"
          renderItem={renderItem}
        />
      </main>
    </div>
  );
};

export default App;
