import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useTheme } from "./ThemeContext";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [images] = useState([
    {
      original: "images/IMG_2479.jpeg",
      thumbnail: "images/IMG_2479.jpeg",
      description: "Histology Slide 1",
    },
    {
      original: "images/IMG_2480.jpeg",
      thumbnail: "images/IMG_2480.jpeg",
      description: "Histology Slide 2",
    },
    {
      original: "images/IMG_2481.jpeg",
      thumbnail: "images/IMG_2481.jpeg",
      description: "Histology Slide 3",
    },
    {
      original: "images/IMG_2482.jpeg",
      thumbnail: "images/IMG_2482.jpeg",
      description: "Histology Slide 4",
    },
    {
      original: "images/IMG_2483.jpeg",
      thumbnail: "images/IMG_2483.jpeg",
      description: "Histology Slide 5",
    },
    {
      original: "images/IMG_2485.jpeg",
      thumbnail: "images/IMG_2485.jpeg",
      description: "Histology Slide 6",
    },
    {
      original: "images/IMG_2487.jpeg",
      thumbnail: "images/IMG_2487.jpeg",
      description: "Histology Slide 7",
    },
    {
      original: "images/IMG_2488.jpeg",
      thumbnail: "images/IMG_2488.jpeg",
      description: "Histology Slide 8",
    },
    {
      original: "images/IMG_2494.jpeg",
      thumbnail: "images/IMG_2494.jpeg",
      description: "Histology Slide 9",
    },
    {
      original: "images/IMG_2495.jpeg",
      thumbnail: "images/IMG_2495.jpeg",
      description: "Histology Slide 10",
    },
    {
      original: "images/IMG_2496.jpeg",
      thumbnail: "images/IMG_2496.jpeg",
      description: "Histology Slide 11",
    },
    {
      original: "images/IMG_2497.jpeg",
      thumbnail: "images/IMG_2497.jpeg",
      description: "Histology Slide 12",
    },
    {
      original: "images/IMG_2498.jpeg",
      thumbnail: "images/IMG_2498.jpeg",
      description: "Histology Slide 13",
    },
    {
      original: "images/IMG_2499.jpeg",
      thumbnail: "images/IMG_2499.jpeg",
      description: "Histology Slide 14",
    },
    {
      original: "images/IMG_2500.jpeg",
      thumbnail: "images/IMG_2500.jpeg",
      description: "Histology Slide 15",
    },
    {
      original: "images/IMG_2501.jpeg",
      thumbnail: "images/IMG_2501.jpeg",
      description: "Histology Slide 16",
    },
    {
      original: "images/IMG_2502.jpeg",
      thumbnail: "images/IMG_2502.jpeg",
      description: "Histology Slide 17",
    },
    {
      original: "images/IMG_2505.jpeg",
      thumbnail: "images/IMG_2505.jpeg",
      description: "Histology Slide 18",
    },
    {
      original: "images/IMG_2506.jpeg",
      thumbnail: "images/IMG_2506.jpeg",
      description: "Histology Slide 19",
    },
    {
      original: "images/IMG_2509.jpeg",
      thumbnail: "images/IMG_2509.jpeg",
      description: "Histology Slide 20",
    },
    {
      original: "images/IMG_2510.jpeg",
      thumbnail: "images/IMG_2510.jpeg",
      description: "Histology Slide 21",
    },
    {
      original: "images/IMG_2511.jpeg",
      thumbnail: "images/IMG_2511.jpeg",
      description: "Histology Slide 22",
    },
    {
      original: "images/IMG_2512.jpeg",
      thumbnail: "images/IMG_2512.jpeg",
      description: "Histology Slide 23",
    },
    {
      original: "images/IMG_2513.jpeg",
      thumbnail: "images/IMG_2513.jpeg",
      description: "Histology Slide 24",
    },
    {
      original: "images/IMG_2514.jpeg",
      thumbnail: "images/IMG_2514.jpeg",
      description: "Histology Slide 25",
    },
    {
      original: "images/IMG_2517.jpeg",
      thumbnail: "images/IMG_2517.jpeg",
      description: "Histology Slide 26",
    },
    {
      original: "images/IMG_2519.jpeg",
      thumbnail: "images/IMG_2519.jpeg",
      description: "Histology Slide 27",
    },
    {
      original: "images/IMG_2524.jpeg",
      thumbnail: "images/IMG_2524.jpeg",
      description: "Histology Slide 28",
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
              <button onClick={() => zoomIn()} title="Zoom In">
                +
              </button>
              <button onClick={() => zoomOut()} title="Zoom Out">
                -
              </button>
              <button onClick={() => resetTransform()} title="Reset Zoom">
                ↺
              </button>
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
