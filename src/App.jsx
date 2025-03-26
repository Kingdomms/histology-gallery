import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useTheme } from "./ThemeContext";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [images] = useState([
    {
      original: "/histology-gallery/images/IMG_2479.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2479.jpeg",
      title: "Histology Slide 1",
      description:
        "Tejido epitelial simple plano: Se observa una única capa de células aplanadas con núcleos ovales. Característico de capilares sanguíneos y alvéolos pulmonares.",
    },
    {
      original: "/histology-gallery/images/IMG_2480.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2480.jpeg",
      title: "Histology Slide 2",
      description:
        "Tejido epitelial simple cúbico: Células con altura similar a su anchura. Presente en túbulos renales y folículos tiroideos.",
    },
    {
      original: "/histology-gallery/images/IMG_2481.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2481.jpeg",
      title: "Histology Slide 3",
      description:
        "Tejido epitelial simple cilíndrico: Células más altas que anchas, con núcleos basales. Común en el revestimiento intestinal.",
    },
    {
      original: "/histology-gallery/images/IMG_2482.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2482.jpeg",
      title: "Histology Slide 4",
      description:
        "Tejido epitelial estratificado plano: Múltiples capas de células que se aplanan hacia la superficie. Típico de la epidermis.",
    },
    {
      original: "/histology-gallery/images/IMG_2483.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2483.jpeg",
      title: "Histology Slide 5",
      description:
        "Tejido conectivo laxo: Fibras colágenas dispersas, fibroblastos y matriz extracelular abundante. Presente en la dermis papilar.",
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
      original: "/histology-gallery/images/IMG_2488.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2488.jpeg",
      title: "Histology Slide 8",
      description:
        "Tejido óseo compacto: Sistema de Havers con conductos centrales y laminillas concéntricas. Forma la diáfisis de huesos largos.",
    },
    {
      original: "/histology-gallery/images/IMG_2494.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2494.jpeg",
      title: "Histology Slide 9",
      description:
        "Tejido muscular liso: Células fusiformes con núcleo central. Presente en órganos viscerales.",
    },
    {
      original: "/histology-gallery/images/IMG_2495.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2495.jpeg",
      title: "Histology Slide 10",
      description:
        "Tejido muscular estriado esquelético: Fibras multinucleadas con estriaciones transversales. Responsable del movimiento voluntario.",
    },
    {
      original: "/histology-gallery/images/IMG_2496.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2496.jpeg",
      title: "Histology Slide 11",
      description:
        "Tejido muscular cardíaco: Fibras ramificadas con discos intercalares. Específico del músculo cardíaco.",
    },
    {
      original: "/histology-gallery/images/IMG_2497.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2497.jpeg",
      title: "Histology Slide 12",
      description:
        "Tejido nervioso: Neuronas con dendritas y axones, células gliales de soporte. Forma el sistema nervioso.",
    },
    {
      original: "/histology-gallery/images/IMG_2498.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2498.jpeg",
      title: "Histology Slide 13",
      description:
        "Médula ósea: Tejido hematopoyético con precursores de células sanguíneas. Sitio de formación de células sanguíneas.",
    },
    {
      original: "/histology-gallery/images/IMG_2499.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2499.jpeg",
      title: "Histology Slide 14",
      description:
        "Ganglio linfático: Folículos linfoides y senos medulares. Importante en la respuesta inmune.",
    },
    {
      original: "/histology-gallery/images/IMG_2500.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2500.jpeg",
      title: "Histology Slide 15",
      description:
        "Arteria elástica: Pared gruesa con láminas elásticas prominentes. Típica de grandes arterias como la aorta.",
    },
    {
      original: "/histology-gallery/images/IMG_2501.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2501.jpeg",
      title: "Histology Slide 16",
      description:
        "Vena: Pared más delgada que arterias, lumen irregular. Responsable del retorno venoso.",
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
      original: "/histology-gallery/images/IMG_2506.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2506.jpeg",
      title: "Histology Slide 19",
      description:
        "Riñón: Glomérulos y túbulos renales. Unidad de filtración y reabsorción.",
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
      original: "/histology-gallery/images/IMG_2511.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2511.jpeg",
      title: "Histology Slide 22",
      description:
        "Ovario: Folículos en diferentes estadios de desarrollo. Producción de óvulos y hormonas.",
    },
    {
      original: "/histology-gallery/images/IMG_2512.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2512.jpeg",
      title: "Histology Slide 23",
      description:
        "Testículo: Túbulos seminíferos con células espermatogénicas. Producción de espermatozoides.",
    },
    {
      original: "/histology-gallery/images/IMG_2513.jpeg",
      thumbnail: "/histology-gallery/images/IMG_2513.jpeg",
      title: "Histology Slide 24",
      description:
        "Glándula tiroides: Folículos tiroideos con coloide. Síntesis y almacenamiento de hormonas tiroideas.",
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

  return (
    <div className={`app ${theme}`}>
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
      <style>
        {`
          .slide-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 100%;
          }
          .slide-description {
            padding: 1rem;
            margin-top: 1rem;
            width: 100%;
            text-align: center;
            background-color: var(--background-color);
            border-radius: 8px;
          }
          .slide-description h3 {
            margin: 0 0 0.5rem 0;
            color: var(--text-color);
            font-size: 1.2rem;
          }
          .slide-description p {
            margin: 0;
            color: var(--text-color);
            font-size: 1rem;
            line-height: 1.5;
          }
        `}
      </style>
    </div>
  );
};

export default App;
