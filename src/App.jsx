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
      original: "/histology-gallery/images/IMG_2479.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2479.jpeg",
      title: "Íleon",
      description:
        "Tinción H&E. Presencia de vellosidades intestinales elongadas. Criptas de Lieberkühn y posible presencia de tejido linfoide (Placas de Peyer) en la lámina propia y submucosa",
    },
    {
      original: "/histology-gallery/images/IMG_2480.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2480.jpeg",
      title: "Íleon",
      description:
        "Tinción H&E. Presencia de vellosidades intestinales elongadas. Criptas de Lieberkühn y posible presencia de tejido linfoide (Placas de Peyer) en la lámina propia y submucosa",
    },
    {
      original: "/histology-gallery/images/IMG_2485.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2485.jpeg",
      title: "Histology Slide 6",
      description:
        "Tejido conectivo denso regular: Fibras colágenas paralelas y organizadas. Característico de tendones y ligamentos.",
    },
    {
      original: "/histology-gallery/images/IMG_2487.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2487.jpeg",
      title: "Histology Slide 7",
      description:
        "Cartílago hialino: Matriz homogénea con condrocitos en lagunas. Presente en extremos articulares de huesos.",
    },
    {
      original: "/histology-gallery/images/IMG_2497.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2497.jpeg",
      title: "Histology Slide 12",
      description:
        "Tejido nervioso: Neuronas con dendritas y axones, células gliales de soporte. Forma el sistema nervioso.",
    },

    {
      original: "/histology-gallery/images/IMG_2499.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2499.jpeg",
      title: "Histology Slide 14",
      description:
        "Ganglio linfático: Folículos linfoides y senos medulares. Importante en la respuesta inmune.",
    },

    {
      original: "/histology-gallery/images/IMG_2502.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2502.jpeg",
      title: "Histology Slide 17",
      description:
        "Pulmón: Alvéolos y capilares formando la barrera aire-sangre. Sitio de intercambio gaseoso.",
    },
    {
      original: "/histology-gallery/images/IMG_2505.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2505.jpeg",
      title: "Histology Slide 18",
      description:
        "Hígado: Lobulillos hepáticos con vena central y hepatocitos. Centro de detoxificación y metabolismo.",
    },

    {
      original: "/histology-gallery/images/IMG_2509.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2509.jpeg",
      title: "Histology Slide 20",
      description:
        "Páncreas: Acinos serosos y islotes de Langerhans. Glándula mixta endocrina y exocrina.",
    },
    {
      original: "/histology-gallery/images/IMG_2510.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2510.jpeg",
      title: "Histology Slide 21",
      description:
        "Intestino delgado: Vellosidades y criptas de Lieberkühn. Especializado en absorción de nutrientes.",
    },

    {
      original: "/histology-gallery/images/IMG_2514.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2514.jpeg",
      title: "Histology Slide 25",
      description:
        "Cerebro: Sustancia gris y blanca, neuronas y células gliales. Centro de control del sistema nervioso.",
    },
    {
      original: "/histology-gallery/images/IMG_2517.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2517.jpeg",
      title: "Histology Slide 26",
      description:
        "Médula espinal: Sustancia gris en forma de H con neuronas motoras. Centro de reflejos y conducción nerviosa.",
    },
    {
      original: "/histology-gallery/images/IMG_2519.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2519.jpeg",
      title: "Histology Slide 27",
      description:
        "Piel: Epidermis estratificada y dermis con anexos cutáneos. Barrera protectora del organismo.",
    },
    {
      original: "/histology-gallery/images/IMG_2524.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2524.jpeg",
      title: "Histology Slide 28",
      description:
        "Placenta: Vellosidades coriónicas y espacio intervelloso. Órgano de intercambio materno-fetal.",
    },
    {
      original: "/histology-gallery/images/IMG_2528 2.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2528 2.jpeg",
      title: "Histology Slide 29",
      description:
        "Placenta: Vellosidades coriónicas y espacio intervelloso. Órgano de intercambio materno-fetal.",
    },
    {
      original: "/histology-gallery/images/IMG_2535 2.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2535 2.jpeg",
      title: "Histology Slide 29",
      description:
        "Placenta: Vellosidades coriónicas y espacio intervelloso. Órgano de intercambio materno-fetal.",
    },
    {
      original: "/histology-gallery/images/IMG_2538 2.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2538 2.jpeg",
      title: "Histology Slide 29",
      description:
        "Placenta: Vellosidades coriónicas y espacio intervelloso. Órgano de intercambio materno-fetal.",
    },
    {
      original: "/histology-gallery/images/IMG_2541 2.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2541 2.jpeg",
      title: "Histology Slide 29",
      description:
        "Placenta: Vellosidades coriónicas y espacio intervelloso. Órgano de intercambio materno-fetal.",
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
                <img src={item.original} alt={item.description} />
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
