import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useTheme } from "./ThemeContext";
import Welcome from "./Welcome";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [showWelcome, setShowWelcome] = useState(true);
  const [images] = useState([
    {
      original: "./images/IMG_2479.jpeg",
      thumbnail: "./images/thumbnails/IMG_2479.jpeg",
      title: "Duodeno",
      description:
        "Tinción H&E. Presencia de vellosidades intestinales elongadas. Criptas de Lieberkühn y posible presencia de tejido linfoide (Placas de Peyer) en la lámina propia y submucosa",
    },
    {
      original: "./images/IMG_2480.jpeg",
      thumbnail: "./images/thumbnails/IMG_2480.jpeg",
      title: "Duodeno",
      description:
        "Tinción H&E. Presencia de vellosidades intestinales elongadas. Criptas de Lieberkühn y posible presencia de tejido linfoide (Placas de Peyer) en la lámina propia y submucosa",
    },
    {
      original: "./images/IMG_2485.jpeg",
      thumbnail: "./images/thumbnails/IMG_2485.jpeg",
      title: "Glandulas Gástricas",
      description:
        "Epitelio cúbico simple. Criptas de Lieberkühn y tejido linfoide en la lámina propia y submucosa.",
    },
    {
      original: "./images/IMG_2487.jpeg",
      thumbnail: "./images/thumbnails/IMG_2487.jpeg",
      title: "Lengua",
      description:
        "Epitelio plano estratificado. Tejido muscular estriado. Ausencia de criptas de Lieberkühn.",
    },
    {
      original: "./images/IMG_2497.jpeg",
      thumbnail: "./images/thumbnails/IMG_2497.jpeg",
      title: "Estómago (Glándulas Pilóricas)",
      description:
        "Glándulas pilóricas con células mucosas predominantes. Secreción de mucosidad pilórica del estómago.",
    },

    {
      original: "./images/IMG_2499.jpeg",
      thumbnail: "./images/thumbnails/IMG_2499.jpeg",
      title: "14",
      description: "",
    },

    {
      original: "./images/IMG_2502.jpeg",
      thumbnail: "./images/thumbnails/IMG_2502.jpeg",
      title: "Esófago",
      description:
        "Epitelio plano estratificado. Ausencia de glándulas gástricas. Pliegues de la mucosa. Submucosa con glándulas esofágicas presentes.",
    },
    {
      original: "./images/IMG_2505.jpeg",
      thumbnail: "./images/thumbnails/IMG_2505.jpeg",
      title: "Esófago",
      description:
        "Epitelio plano estratificado. Ausencia de glándulas gástricas. Pliegues de la mucosa. Submucosa con glándulas esofágicas presentes.",
    },

    {
      original: "./images/IMG_2509.jpeg",
      thumbnail: "./images/thumbnails/IMG_2509.jpeg",
      title: "Esófago",
      description:
        "Epitelio plano estratificado. Muscosa, submucosa, muscular de la mucosa y adventicia.",
    },
    {
      original: "./images/IMG_2510.jpeg",
      thumbnail: "./images/thumbnails/IMG_2510.jpeg",
      title: "Esófago",
      description: "Epitelio plano estratificado.",
    },

    {
      original: "./images/IMG_2514.jpeg",
      thumbnail: "./images/thumbnails/IMG_2514.jpeg",
      title: "Cerebelo y Meninges",
      description:
        "H&E. Mostrando corteza cerebelosa con capas molecular, Purkinje y granulosa. En contacto con meninges y se observa vascularización",
    },
    {
      original: "./images/IMG_2517.jpeg",
      thumbnail: "./images/thumbnails/IMG_2517.jpeg",
      title: "Cerebelo",
      description:
        "H&E. Capa molecular, de Purkinje y granulosa. Se pueden observar células de Purkinje.",
    },
    {
      original: "./images/IMG_2519.jpeg",
      thumbnail: "./images/thumbnails/IMG_2519.jpeg",
      title: "Riñon (Corteza Renal)",
      description: "Aún sin poder apreciar bien a los glomérulos renales.",
    },
    {
      original: "./images/IMG_2524.jpeg",
      thumbnail: "./images/thumbnails/IMG_2524.jpeg",
      title: "Riñon (Corteza Renal)",
      description: "Es posible ya ir apreciando los glomérulos renales.",
    },
    {
      original: "./images/IMG_2528 2.jpeg",
      thumbnail: "./images/thumbnails/IMG_2528 2.jpeg",
      title: "Riñon (Glomérulo Renal)",
      description:
        "Epitelio plano simple. Cápsula de Bowman. Podocitos. Células mesangiales. Mácula densa y polo vascular.",
    },
    {
      original: "./images/IMG_2535 2.jpeg",
      thumbnail: "./images/thumbnails/IMG_2535 2.jpeg",
      title: "Tiroides",
      description: "Epitelio cúbico simple.",
    },
    {
      original: "./images/IMG_2538 2.jpeg",
      thumbnail: "./images/thumbnails/IMG_2538 2.jpeg",
      title: "Tiroides",
      description:
        "Presencia de células folículares, parafoliculares y coloide. Las células foliculares secretan, T3 y T4 y las parafoliculares calcitonina.",
    },
    {
      original: "./images/IMG_2541 2.jpeg",
      thumbnail: "./images/thumbnails/IMG_2541 2.jpeg",
      title: "Unión Gastro-Esofágica",
      description:
        "Epitelio plano estratificado (izq) y epitelio cilíndrico simple (der) en la porción del cardial del estómago. Se observa también la lámina propia y la muscular de la mucosa subyacente",
    },
    {
      original: "./images/IMG_8285.jpeg",
      thumbnail: "./images/thumbnails/IMG_8285.jpeg",
      title: "Pulmón",
      description: "Tinción Tricrómico de Masson. Patológico.",
    },
    {
      original: "./images/IMG_8287.jpeg",
      thumbnail: "./images/thumbnails/IMG_8287.jpeg",
      title: "Pulmón",
      description:
        "Epitelio plano simple. Presencia de neumocitos de tipo I y II.",
    },
    {
      original: "./images/IMG_8288.jpeg",
      thumbnail: "./images/thumbnails/IMG_8288.jpeg",
      title: "Esófago",
      description: "Tinción H&E. Muscosa, submucosa y muscular de la mucosa.",
    },
    {
      original: "./images/IMG_8289.jpeg",
      thumbnail: "./images/thumbnails/IMG_8289.jpeg",
      title: "Esófago",
      description:
        "Epitelio plano estratificado. Muscosa, submucosa, muscular de la mucosa y adventicia.",
    },
    {
      original: "./images/IMG_8290.jpeg",
      thumbnail: "./images/thumbnails/IMG_8290.jpeg",
      title: "Esófago",
      description:
        "Epitelio plano estratificado. Muscosa, submucosa, muscular de la mucosa y adventicia.",
    },
    {
      original: "./images/IMG_8292.jpeg",
      thumbnail: "./images/thumbnails/IMG_8292.jpeg",
      title: "Piel Delgada",
      description:
        "Presencia de folículo piloso, glándulas suríparas y ecrinas",
    },
    {
      original: "./images/IMG_8294.jpeg",
      thumbnail: "./images/thumbnails/IMG_8294.jpeg",
      title: "Piel Delgada",
      description:
        "Epidermis, dermis e hipodermis. Presencia de folículo piloso, glándulas suríparas y ecrinas",
    },
    {
      original: "./images/IMG_8296.jpeg",
      thumbnail: "./images/thumbnails/IMG_8296.jpeg",
      title: "Piel Delgada",
      description:
        "Epidermis y dermis. Epitelio plan estratificado queratinizado.",
    },
    {
      original: "./images/IMG_8297.jpeg",
      thumbnail: "./images/thumbnails/IMG_8297.jpeg",
      title: "Piel Delgada",
      description:
        "Epidermis y dermis. Epitelio plan estratificado queratinizado.",
    },
    {
      original: "./images/IMG_8298.jpeg",
      thumbnail: "./images/thumbnails/IMG_8298.jpeg",
      title: "Piel Delgada",
      description:
        "Presencia de folículo piloso, glándulas suríparas y adipocitos",
    },
    {
      original: "./images/IMG_8300.jpeg",
      thumbnail: "./images/thumbnails/IMG_8300.jpeg",
      title: "?",
      description: "",
    },
    {
      original: "./images/IMG_2587.jpeg",
      thumbnail: "./images/thumbnails/IMG_2587.jpeg",
      title: "1",
      description: "",
    },
    {
      original: "./images/IMG_2589.jpeg",
      thumbnail: "./images/thumbnails/IMG_2589.jpeg",
      title: "2",
      description: "",
    },
    {
      original: "./images/IMG_2601.jpeg",
      thumbnail: "./images/thumbnails/IMG_2601.jpeg",
      title: "3",
      description: "",
    },
    {
      original: "./images/IMG_2603.jpeg",
      thumbnail: "./images/thumbnails/IMG_2603.jpeg",
      title: "4",
      description: "",
    },
    {
      original: "./images/IMG_2624.jpeg",
      thumbnail: "./images/thumbnails/IMG_2624.jpeg",
      title: "5",
      description: "",
    },
    {
      original: "./images/IMG_2625.jpeg",
      thumbnail: "./images/thumbnails/IMG_2625.jpeg",
      title: "6",
      description: "",
    },
    {
      original: "./images/IMG_2626.jpeg",
      thumbnail: "./images/thumbnails/IMG_2626.jpeg",
      title: "7",
      description: "",
    },
    {
      original: "./images/IMG_2649.jpeg",
      thumbnail: "./images/thumbnails/IMG_2649.jpeg",
      title: "8",
      description: "",
    },
    {
      original: "./images/IMG_2668.jpeg",
      thumbnail: "./images/thumbnails/IMG_2668.jpeg",
      title: "9",
      description: "",
    },
    {
      original: "./images/IMG_2673.jpeg",
      thumbnail: "./images/thumbnails/IMG_2673.jpeg",
      title: "10",
      description: "",
    },
    {
      original: "./images/IMG_2675.jpeg",
      thumbnail: "./images/thumbnails/IMG_2675.jpeg",
      title: "11",
      description: "",
    },
    {
      original: "./images/IMG_2678.jpeg",
      thumbnail: "./images/thumbnails/IMG_2678.jpeg",
      title: "12",
      description: "",
    },
    {
      original: "./images/IMG_2682.jpeg",
      thumbnail: "./images/thumbnails/IMG_2682.jpeg",
      title: "13",
      description: "",
    },
    {
      original: "./images/IMG_2696.jpeg",
      thumbnail: "./images/thumbnails/IMG_2696.jpeg",
      title: "14",
      description: "",
    },
    {
      original: "./images/IMG_2701.jpeg",
      thumbnail: "./images/thumbnails/IMG_2701.jpeg",
      title: "15",
      description: "",
    },
    {
      original: "./images/IMG_2709.jpeg",
      thumbnail: "./images/thumbnails/IMG_2709.jpeg",
      title: "16",
      description: "",
    },
    {
      original: "./images/IMG_2718.jpeg",
      thumbnail: "./images/thumbnails/IMG_2718.jpeg",
      title: "17",
      description: "",
    },
    {
      original: "./images/IMG_2731.jpeg",
      thumbnail: "./images/thumbnails/IMG_2731.jpeg",
      title: "18",
      description: "",
    },
    {
      original: "./images/IMG_2732.jpeg",
      thumbnail: "./images/thumbnails/IMG_2732.jpeg",
      title: "19",
      description: "",
    },
    {
      original: "./images/IMG_2733.jpeg",
      thumbnail: "./images/thumbnails/IMG_2733.jpeg",
      title: "20",
      description: "",
    },
    {
      original: "./images/IMG_2734.jpeg",
      thumbnail: "./images/thumbnails/IMG_2734.jpeg",
      title: "21",
      description: "",
    },
    {
      original: "./images/IMG_2738.jpeg",
      thumbnail: "./images/thumbnails/IMG_2738.jpeg",
      title: "22",
      description: "",
    },
    {
      original: "./images/IMG_2740.jpeg",
      thumbnail: "./images/thumbnails/IMG_2740.jpeg",
      title: "23",
      description: "",
    },
    {
      original: "./images/IMG_2742.jpeg",
      thumbnail: "./images/thumbnails/IMG_2742.jpeg",
      title: "24",
      description: "",
    },
    {
      original: "./images/IMG_2746.jpeg",
      thumbnail: "./images/thumbnails/IMG_2746.jpeg",
      title: "25",
      description: "",
    },
    {
      original: "./images/IMG_2748.jpeg",
      thumbnail: "./images/thumbnails/IMG_2748.jpeg",
      title: "26",
      description: "",
    },
    {
      original: "./images/IMG_2750.jpeg",
      thumbnail: "./images/thumbnails/IMG_2750.jpeg",
      title: "27",
      description: "",
    },
    {
      original: "./images/IMG_2751.jpeg",
      thumbnail: "./images/thumbnails/IMG_2751.jpeg",
      title: "28",
      description: "",
    },
    {
      original: "./images/IMG_2753.jpeg",
      thumbnail: "./images/thumbnails/IMG_2753.jpeg",
      title: "29",
      description: "",
    },
  ]);

  const renderItem = (item) => {
    return (
      <div className="slide-container">
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
                <img
                  src={item.original}
                  alt={item.description}
                  onError={(e) => {
                    console.error(`Failed to load image: ${item.original}`);
                    e.target.src = "fallback-image.png"; // Optional fallback image
                  }}
                />
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
        <div className="slide-description">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    );
  };

  const handleEnterGallery = () => {
    setShowWelcome(false);
  };

  return (
    <div className={`app ${theme}`}>
      {showWelcome ? (
        <Welcome onEnterGallery={handleEnterGallery} />
      ) : (
        <>
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
              lazyLoad={true}
            />
          </main>
        </>
      )}
      <style>
        {`
          .slide-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 100%;
            position: relative;
            padding-top: 10px; /* Add padding to create space for zoom controls */
          }
          
          /* Add these new styles for thumbnails */
          .image-gallery-thumbnail {
            width: 100px;
            height: 100px;
            overflow: hidden;
            display: inline-block;
            margin: 0 5px;
          }
          
          .image-gallery-thumbnail img {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
          
          /* Existing styles */
          .slide-description {
            padding: 0.75rem;
            margin-top: 0.75rem;
            width: 90%;
            text-align: center;
            background-color: var(--description-bg);
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            position: relative;
            z-index: 5; /* Lower than zoom controls */
          }
          .slide-description h3 {
            margin: 0 0 0.5rem 0;
            color: var(--description-color);
            font-size: 1.2rem;
          }
          .slide-description p {
            margin: 0;
            color: var(--description-color);
            font-size: 1rem;
            line-height: 1.5;
            text-align: center;
            white-space: normal;
            word-wrap: break-word;
            overflow-wrap: break-word;
            hyphens: auto;
            max-width: 100%;
          }
          @media (max-width: 768px) {
            .slide-description {
              padding: 0.5rem;
              margin-top: 0.5rem;
            }
            .slide-description h3 {
              font-size: 1.1rem;
            }
            .slide-description p {
              font-size: 0.9rem;
              line-height: 1.4;
            }
          }
        `}
      </style>
    </div>
  );
};

export default App;
