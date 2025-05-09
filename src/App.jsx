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
      original: "./images/IMG_2818.jpeg",
      thumbnail: "./images/thumbnails/IMG_2818.jpeg",
      title: "Pulmón",
      description:
        "H&E. Epitelio plano simple. Presencia de neumocitos de tipo I y II.",
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
      title: "Nervio Óptico",
      description: "Prolongaciones del nervio óptico.",
    },
    {
      original: "./images/IMG_2603.jpeg",
      thumbnail: "./images/thumbnails/IMG_2603.jpeg",
      title: "Ojo",
      description:
        "Cristalino, procesos ciliares, músculo ciliar, fibras zonulares, esclera y córnea.",
    },
    {
      original: "./images/IMG_2624.jpeg",
      thumbnail: "./images/thumbnails/IMG_2624.jpeg",
      title: "Ojo",
      description: "Cristalino.",
    },
    {
      original: "./images/IMG_2625.jpeg",
      thumbnail: "./images/thumbnails/IMG_2625.jpeg",
      title: "Ojo",
      description:
        "Epitelio ciliar con su membrana interna (pigmentada) y barrera externa (no pigmentada), cristalino y procesos ciliares.",
    },
    {
      original: "./images/IMG_2626.jpeg",
      thumbnail: "./images/thumbnails/IMG_2626.jpeg",
      title: "Ojo",
      description: "Cristalino.",
    },
    {
      original: "./images/IMG_2649.jpeg",
      thumbnail: "./images/thumbnails/IMG_2649.jpeg",
      title: "Ojo",
      description: "Cuerpo y músculo ciliar",
    },
    {
      original: "./images/IMG_2668.jpeg",
      thumbnail: "./images/thumbnails/IMG_2668.jpeg",
      title: "Ojo",
      description: "Esclera y cristalino.",
    },
    {
      original: "./images/IMG_2673.jpeg",
      thumbnail: "./images/thumbnails/IMG_2673.jpeg",
      title: "Ojo",
      description: "Cuerpo ciliar, músculo ciliar, esclera y córnea.",
    },
    {
      original: "./images/IMG_2718.jpeg",
      thumbnail: "./images/thumbnails/IMG_2718.jpeg",
      title: "Ojo",
      description: "Cristalino, esclera, córnea, procesos ciliares e iris.",
    },
    {
      original: "./images/IMG_2731.jpeg",
      thumbnail: "./images/thumbnails/IMG_2731.jpeg",
      title: "Encéfalo",
      description:
        "Sustancia gris y cuerpos neuronales. (Se observa un poco de capa meníngea)",
    },
    {
      original: "./images/IMG_2732.jpeg",
      thumbnail: "./images/thumbnails/IMG_2732.jpeg",
      title: "Encéfalo",
      description: "Sustancia gris y cuerpos neuronales.",
    },
    {
      original: "./images/IMG_2733.jpeg",
      thumbnail: "./images/thumbnails/IMG_2733.jpeg",
      title: "Encéfalo",
      description: "Meninges.",
    },
    {
      original: "./images/IMG_2734.jpeg",
      thumbnail: "./images/thumbnails/IMG_2734.jpeg",
      title: "Encéfalo",
      description: "Sustancia gris y cuerpos neuronales.",
    },
    {
      original: "./images/IMG_2738.jpeg",
      thumbnail: "./images/thumbnails/IMG_2738.jpeg",
      title: "Encéfalo",
      description: "Sustancia gris y cuerpos neuronales.",
    },
    {
      original: "./images/IMG_2740.jpeg",
      thumbnail: "./images/thumbnails/IMG_2740.jpeg",
      title: "Encéfalo",
      description: "Hipocampo, sustancia gris, cuerpos neuronales y meninges.",
    },
    {
      original: "./images/IMG_2742.jpeg",
      thumbnail: "./images/thumbnails/IMG_2742.jpeg",
      title: "",
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
    {
      original: "./images/IMG_2830.jpeg",
      thumbnail: "./images/thumbnails/IMG_2830.jpeg",
      title: "Encéfalo",
      description: "Sustancia blanca y sustancia gris.",
    },
    {
      original: "./images/IMG_2827.jpeg",
      thumbnail: "./images/thumbnails/IMG_2827.jpeg",
      title: "Encéfalo",
      description: "Sustancia blanca y sustancia gris.",
    },
    {
      original: "./images/IMG_2828.jpeg",
      thumbnail: "./images/thumbnails/IMG_2828.jpeg",
      title: "Encéfalo",
      description:
        "Sustancia blanca y sustancia gris. Cuerpos neuronales y prolongaciones axónicas.",
    },
    {
      original: "./images/IMG_2835.jpeg",
      thumbnail: "./images/thumbnails/IMG_2835.jpeg",
      title: "Estómago",
      description:
        "Mucosa, submucosa, muscular de la mucosa, muscular propia y serosa.",
    },
    {
      original: "./images/IMG_2836.jpeg",
      thumbnail: "./images/thumbnails/IMG_2836.jpeg",
      title: "Hígado",
      description: "Presencia de hepatocitos.",
    },
    {
      original: "./images/IMG_2845.jpeg",
      thumbnail: "./images/thumbnails/IMG_2845.jpeg",
      title: "Sangre (Frotis Sanguíneo)",
      description: "Tinción de Wright",
    },
    {
      original: "./images/IMG_2847.jpeg",
      thumbnail: "./images/thumbnails/IMG_2847.jpeg",
      title: "Sangre (Frotis Sanguíneo)",
      description: "Presencia de linfocitos y algun que otro neutrófilo.",
    },
    {
      original: "./images/IMG_2855.jpeg",
      thumbnail: "./images/thumbnails/IMG_2855.jpeg",
      title: "Sangre (Frotis Sanguíneo)",
      description: "Presencia de linfocitos y algun que otro neutrófilo.",
    },
    {
      original: "./images/IMG_2858.jpeg",
      thumbnail: "./images/thumbnails/IMG_2858.jpeg",
      title: "Sangre (Frotis Sanguíneo)",
      description: "Presencia de neutrófilos y monocitos.",
    },
    {
      original: "./images/IMG_2859.jpeg",
      thumbnail: "./images/thumbnails/IMG_2859.jpeg",
      title: "Sangre (Frotis Sanguíneo)",
      description: "Presencia de neutrófilos.",
    },
    {
      original: "./images/IMG_2860.jpeg",
      thumbnail: "./images/thumbnails/IMG_2860.jpeg",
      title: "Sangre (Frotis Sanguíneo)",
      description: "Presencia de linfocitos y algun que otro neutrófilo.",
    },
    {
      original: "./images/IMG_2862.jpeg",
      thumbnail: "./images/thumbnails/IMG_2862.jpeg",
      title: "Sangre (Frotis Sanguíneo)",
      description: "Presencia de un basófilo.",
    },
    {
      original: "./images/IMG_2863.jpeg",
      thumbnail: "./images/thumbnails/IMG_2863.jpeg",
      title: "Sangre (Frotis Sanguíneo)",
      description: "Presencia de monocitos.",
    },
    {
      original: "./images/IMG_2864.jpeg",
      thumbnail: "./images/thumbnails/IMG_2864.jpeg",
      title: "Sangre (Frotis Sanguíneo)",
      description: "Presencia de monocito y un eosinófilo.",
    },
    {
      original: "./images/IMG_2865.jpeg",
      thumbnail: "./images/thumbnails/IMG_2865.jpeg",
      title: "Sangre (Frotis Sanguíneo)",
      description:
        "Presencia de linfocito y monocito. (Junto con algunas plaquetas)",
    },
    {
      original: "./images/IMG_2866.jpeg",
      thumbnail: "./images/thumbnails/IMG_2866.jpeg",
      title: "Sangre (Frotis Sanguíneo)",
      description: "Presencia de linfocitos.",
    },
    {
      original: "./images/IMG_2867.jpeg",
      thumbnail: "./images/thumbnails/IMG_2867.jpeg",
      title: "Sangre (Frotis Sanguíneo)",
      description: "Presencia de monocitos.",
    },
    {
      original: "./images/IMG_2868.jpeg",
      thumbnail: "./images/thumbnails/IMG_2868.jpeg",
      title: "Sangre (Frotis Sanguíneo)",
      description: "Presencia de linfocitos y un eosinófilo central.",
    },
    {
      original: "./images/IMG_2914.jpeg",
      thumbnail: "./images/thumbnails/IMG_2914.jpeg",
      title: "48",
      description: "",
    },
    {
      original: "./images/IMG_2915.jpeg",
      thumbnail: "./images/thumbnails/IMG_2915.jpeg",
      title: "49",
      description: "",
    },
    {
      original: "./images/IMG_2916.jpeg",
      thumbnail: "./images/thumbnails/IMG_2916.jpeg",
      title: "50",
      description: "",
    },
    {
      original: "./images/IMG_2965.jpeg",
      thumbnail: "./images/thumbnails/IMG_2965.jpeg",
      title: "Amígdala Palatina",
      description:
        "Revestidas de epitelio plano estratificado. Grandes centros germinales. Presencia de criptas.",
    },
    {
      original: "./images/IMG_2966.jpeg",
      thumbnail: "./images/thumbnails/IMG_2966.jpeg",
      title: "Amígdala Palatina",
      description:
        "Revestidas de epitelio plano estratificado. Grandes centros germinales. Presencia de criptas.",
    },
    {
      original: "./images/IMG_2967.jpeg",
      thumbnail: "./images/thumbnails/IMG_2967.jpeg",
      title: "Esófago",
      description:
        "Epitelio plano estratificado. Muscosa, submucosa, muscular de la mucosa y adventicia.",
    },
    {
      original: "./images/IMG_2968.jpeg",
      thumbnail: "./images/thumbnails/IMG_2968.jpeg",
      title: "Esófago",
      description:
        "Epitelio plano estratificado. Muscosa, submucosa, muscular de la mucosa y adventicia.",
    },
    {
      original: "./images/IMG_2969.jpeg",
      thumbnail: "./images/thumbnails/IMG_2969.jpeg",
      title: "Bronquio Principal",
      description:
        "Cartílago hialino pero se corta abruptamente. Sin una forma de C definida. Presencia de glándulas.",
    },
    {
      original: "./images/IMG_2979.jpeg",
      thumbnail: "./images/thumbnails/IMG_2979.jpeg",
      title: "Bronquio Principal",
      description:
        "Cartílago hialino pero se corta abruptamente. Sin una forma de C definida. Presencia de glándulas.",
    },
    {
      original: "./images/IMG_2985.jpeg",
      thumbnail: "./images/thumbnails/IMG_2985.jpeg",
      title: "Hueso Trabecular",
      description: "Médula roja y amarilla, presencia de adipocitos.",
    },
    {
      original: "./images/IMG_2987.jpeg",
      thumbnail: "./images/thumbnails/IMG_2987.jpeg",
      title: "Hueso Trabecular",
      description: "Médula roja y amarilla, presencia de adipocitos.",
    },
    {
      original: "./images/IMG_2988.jpeg",
      thumbnail: "./images/thumbnails/IMG_2988.jpeg",
      title: "Hueso Trabecular",
      description:
        "Osteocitos (inmersos en las lagunas), osteoblastos (en la trabécula) y osteoclastos (abombados).",
    },
    {
      original: "./images/IMG_2990.jpeg",
      thumbnail: "./images/thumbnails/IMG_2990.jpeg",
      title: "Hueso Trabecular",
      description:
        "Osteocitos (inmersos en las lagunas), osteoblastos (en la trabécula) y osteoclastos (abombados).",
    },
    {
      original: "./images/IMG_2999.jpeg",
      thumbnail: "./images/thumbnails/IMG_2999.jpeg",
      title: "Hueso Compacto",
      description:
        "Osteonas, conductos de Volkman y laminillas intersticiales.",
    },
    {
      original: "./images/IMG_3003.jpeg",
      thumbnail: "./images/thumbnails/IMG_3003.jpeg",
      title: "Glándula Suprarenal",
      description: "",
    },
    {
      original: "./images/IMG_3006.jpeg",
      thumbnail: "./images/thumbnails/IMG_3006.jpeg",
      title: "63",
      description: "",
    },
    {
      original: "./images/IMG_3008.jpeg",
      thumbnail: "./images/thumbnails/IMG_3008.jpeg",
      title: "64",
      description: "",
    },
    {
      original: "./images/IMG_3010.jpeg",
      thumbnail: "./images/thumbnails/IMG_3010.jpeg",
      title: "65",
      description: "",
    },
    {
      original: "./images/IMG_3012.jpeg",
      thumbnail: "./images/thumbnails/IMG_3012.jpeg",
      title: "66",
      description: "",
    },
    {
      original: "./images/IMG_3092.jpeg",
      thumbnail: "./images/thumbnails/IMG_3092.jpeg",
      title: "67",
      description: "",
    },
    {
      original: "./images/IMG_3094.jpeg",
      thumbnail: "./images/thumbnails/IMG_3094.jpeg",
      title: "68",
      description: "",
    },
    {
      original: "./images/IMG_3195.jpeg",
      thumbnail: "./images/thumbnails/IMG_3195.jpeg",
      title: "69",
      description: "",
    },
    {
      original: "./images/IMG_3196.jpeg",
      thumbnail: "./images/thumbnails/IMG_3196.jpeg",
      title: "70",
      description: "",
    },
    {
      original: "./images/IMG_3199.jpeg",
      thumbnail: "./images/thumbnails/IMG_3199.jpeg",
      title: "71",
      description: "",
    },
    {
      original: "./images/IMG_3202.jpeg",
      thumbnail: "./images/thumbnails/IMG_3202.jpeg",
      title: "72",
      description: "",
    },
    {
      original: "./images/IMG_3205.jpeg",
      thumbnail: "./images/thumbnails/IMG_3205.jpeg",
      title: "73",
      description: "",
    },
    {
      original: "./images/IMG_3779.jpeg",
      thumbnail: "./images/thumbnails/IMG_3779.jpeg",
      title: "74",
      description: "",
    },
    {
      original: "./images/IMG_3780.jpeg",
      thumbnail: "./images/thumbnails/IMG_3780.jpeg",
      title: "75",
      description: "",
    },
    {
      original: "./images/IMG_3781.jpeg",
      thumbnail: "./images/thumbnails/IMG_3781.jpeg",
      title: "76",
      description: "",
    },
    {
      original: "./images/IMG_3782.jpeg",
      thumbnail: "./images/thumbnails/IMG_3782.jpeg",
      title: "77",
      description: "",
    },
    {
      original: "./images/IMG_3793.jpeg",
      thumbnail: "./images/thumbnails/IMG_3793.jpeg",
      title: "78",
      description: "",
    },
    {
      original: "./images/IMG_3812.jpeg",
      thumbnail: "./images/thumbnails/IMG_3812.jpeg",
      title: "79",
      description: "",
    },
    {
      original: "./images/IMG_3817.jpeg",
      thumbnail: "./images/thumbnails/IMG_3817.jpeg",
      title: "80",
      description: "",
    },
    {
      original: "./images/IMG_3818.jpeg",
      thumbnail: "./images/thumbnails/IMG_3818.jpeg",
      title: "81",
      description: "",
    },
    {
      original: "./images/IMG_3820.jpeg",
      thumbnail: "./images/thumbnails/IMG_3820.jpeg",
      title: "82",
      description: "",
    },
    {
      original: "./images/IMG_3821.jpeg",
      thumbnail: "./images/thumbnails/IMG_3821.jpeg",
      title: "83",
      description: "",
    },
    {
      original: "./images/IMG_3863.jpeg",
      thumbnail: "./images/thumbnails/IMG_3863.jpeg",
      title: "84",
      description: "",
    },
    {
      original: "./images/IMG_3864.jpeg",
      thumbnail: "./images/thumbnails/IMG_3864.jpeg",
      title: "85",
      description: "",
    },
    {
      original: "./images/IMG_3878.jpeg",
      thumbnail: "./images/thumbnails/IMG_3878.jpeg",
      title: "86",
      description: "",
    },
    {
      original: "./images/IMG_3881.jpeg",
      thumbnail: "./images/thumbnails/IMG_3881.jpeg",
      title: "87",
      description: "",
    },
    {
      original: "./images/IMG_3883.jpeg",
      thumbnail: "./images/thumbnails/IMG_3883.jpeg",
      title: "88",
      description: "",
    },
    {
      original: "./images/IMG_3886.jpeg",
      thumbnail: "./images/thumbnails/IMG_3886.jpeg",
      title: "89",
      description: "",
    },
    {
      original: "./images/IMG_3890.jpeg",
      thumbnail: "./images/thumbnails/IMG_3890.jpeg",
      title: "90",
      description: "",
    },
    {
      original: "./images/IMG_3948.jpeg",
      thumbnail: "./images/thumbnails/IMG_3948.jpeg",
      title: "91",
      description: "",
    },
    {
      original: "./images/IMG_4006.jpeg",
      thumbnail: "./images/thumbnails/IMG_4006.jpeg",
      title: "92",
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
                <p>Por Luis Hazael Flores Ramírez</p>
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
