import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useTheme } from "./ThemeContext";
import Welcome from "./Welcome";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const [showWelcome, setShowWelcome] = useState(true);

  const getImagePath = (path) => {
    // Elimina el "./" inicial si existe
    const cleanPath = path.startsWith("./") ? path.substring(2) : path;
    // Usa la URL base de Vite
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  };

  const [images] = useState([
    {
      original: getImagePath("./images/IMG_2479.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2479.jpeg"),
      title: "Duodeno",
      description:
        "Tinción H&E. Presencia de vellosidades intestinales elongadas. Criptas de Lieberkühn y posible presencia de tejido linfoide (Placas de Peyer) en la lámina propia y submucosa",
    },
    {
      original: getImagePath("./images/IMG_2480.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2480.jpeg"),
      title: "Duodeno",
      description:
        "Tinción H&E. Presencia de vellosidades intestinales elongadas. Criptas de Lieberkühn y posible presencia de tejido linfoide (Placas de Peyer) en la lámina propia y submucosa",
    },
    {
      original: getImagePath("./images/IMG_2487.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2487.jpeg"),
      title: "Lengua",
      description:
        "Epitelio plano estratificado. Tejido muscular estriado. Ausencia de criptas de Lieberkühn.",
    },
    {
      original: getImagePath("./images/IMG_2499.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2499.jpeg"),
      title: "Duodeno",
      description:
        "Tinción H&E. Presencia de vellosidades intestinales elongadas. Criptas de Lieberkühn y posible presencia de tejido linfoide (Placas de Peyer) en la lámina propia y submucosa",
    },

    {
      original: getImagePath("./images/IMG_2502.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2502.jpeg"),
      title: "Esófago",
      description:
        "Epitelio plano estratificado. Ausencia de glándulas gástricas. Pliegues de la mucosa. Submucosa con glándulas esofágicas presentes.",
    },
    {
      original: getImagePath("./images/IMG_2505.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2505.jpeg"),
      title: "Esófago",
      description:
        "Epitelio plano estratificado. Ausencia de glándulas gástricas. Pliegues de la mucosa. Submucosa con glándulas esofágicas presentes.",
    },

    {
      original: getImagePath("./images/IMG_2509.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2509.jpeg"),
      title: "Esófago",
      description:
        "Epitelio plano estratificado. Muscosa, submucosa, muscular de la mucosa y adventicia.",
    },
    {
      original: getImagePath("./images/IMG_2510.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2510.jpeg"),
      title: "Esófago",
      description: "Epitelio plano estratificado.",
    },

    {
      original: getImagePath("./images/IMG_2514.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2514.jpeg"),
      title: "Cerebelo y Meninges",
      description:
        "H&E. Mostrando corteza cerebelosa con capas molecular, Purkinje y granulosa. En contacto con meninges y se observa vascularización",
    },
    {
      original: getImagePath("./images/IMG_2517.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2517.jpeg"),
      title: "Cerebelo",
      description:
        "H&E. Capa molecular, de Purkinje y granulosa. Se pueden observar células de Purkinje.",
    },
    {
      original: getImagePath("./images/IMG_2519.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2519.jpeg"),
      title: "Riñon (Corteza Renal)",
      description: "Aún sin poder apreciar bien a los glomérulos renales.",
    },
    {
      original: getImagePath("./images/IMG_2524.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2524.jpeg"),
      title: "Riñon (Corteza Renal)",
      description: "Es posible ya ir apreciando los glomérulos renales.",
    },
    {
      original: getImagePath("./images/IMG_2528 2.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2528 2.jpeg"),
      title: "Riñon (Glomérulo Renal)",
      description:
        "Epitelio plano simple. Cápsula de Bowman. Podocitos. Células mesangiales. Mácula densa y polo vascular.",
    },
    {
      original: getImagePath("./images/IMG_2535 2.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2535 2.jpeg"),
      title: "Tiroides",
      description: "Epitelio cúbico simple.",
    },
    {
      original: getImagePath("./images/IMG_2538 2.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2538 2.jpeg"),
      title: "Tiroides",
      description:
        "Presencia de células folículares, parafoliculares y coloide. Las células foliculares secretan, T3 y T4 y las parafoliculares calcitonina.",
    },
    {
      original: getImagePath("./images/IMG_2541 2.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2541 2.jpeg"),
      title: "Unión Gastro-Esofágica",
      description:
        "Epitelio plano estratificado (izq) y epitelio cilíndrico simple (der) en la porción del cardial del estómago. Se observa también la lámina propia y la muscular de la mucosa subyacente",
    },
    {
      original: getImagePath("./images/IMG_2818.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2818.jpeg"),
      title: "Pulmón",
      description:
        "H&E. Epitelio plano simple. Presencia de neumocitos de tipo I y II.",
    },
    {
      original: getImagePath("./images/IMG_8285.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_8285.jpeg"),
      title: "Pulmón",
      description: "Tinción Tricrómico de Masson. Patológico.",
    },
    {
      original: getImagePath("./images/IMG_8287.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_8287.jpeg"),
      title: "Pulmón",
      description:
        "Epitelio plano simple. Presencia de neumocitos de tipo I y II.",
    },
    {
      original: getImagePath("./images/IMG_8288.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_8288.jpeg"),
      title: "Esófago",
      description: "Tinción H&E. Muscosa, submucosa y muscular de la mucosa.",
    },
    {
      original: getImagePath("./images/IMG_8289.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_8289.jpeg"),
      title: "Esófago",
      description:
        "Epitelio plano estratificado. Muscosa, submucosa, muscular de la mucosa y adventicia.",
    },
    {
      original: getImagePath("./images/IMG_8290.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_8290.jpeg"),
      title: "Esófago",
      description:
        "Epitelio plano estratificado. Muscosa, submucosa, muscular de la mucosa y adventicia.",
    },
    {
      original: getImagePath("./images/IMG_8292.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_8292.jpeg"),
      title: "Piel Delgada",
      description:
        "Presencia de folículo piloso, glándulas suríparas y ecrinas",
    },
    {
      original: getImagePath("./images/IMG_8294.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_8294.jpeg"),
      title: "Piel Delgada",
      description:
        "Epidermis, dermis e hipodermis. Presencia de folículo piloso, glándulas suríparas y ecrinas",
    },
    {
      original: getImagePath("./images/IMG_8296.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_8296.jpeg"),
      title: "Piel Delgada",
      description:
        "Epidermis y dermis. Epitelio plan estratificado queratinizado.",
    },
    {
      original: getImagePath("./images/IMG_8297.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_8297.jpeg"),
      title: "Piel Delgada",
      description:
        "Epidermis y dermis. Epitelio plan estratificado queratinizado.",
    },
    {
      original: getImagePath("./images/IMG_8298.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_8298.jpeg"),
      title: "Piel Delgada",
      description:
        "Presencia de folículo piloso, glándulas suríparas y adipocitos",
    },
    {
      original: getImagePath("./images/IMG_2601.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2601.jpeg"),
      title: "Nervio Óptico",
      description: "Prolongaciones del nervio óptico.",
    },
    {
      original: getImagePath("./images/IMG_2603.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2603.jpeg"),
      title: "Ojo",
      description:
        "Cristalino, procesos ciliares, músculo ciliar, fibras zonulares, esclera y córnea.",
    },
    {
      original: getImagePath("./images/IMG_2624.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2624.jpeg"),
      title: "Ojo",
      description: "Cristalino.",
    },
    {
      original: getImagePath("./images/IMG_2625.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2625.jpeg"),
      title: "Ojo",
      description:
        "Epitelio ciliar con su membrana interna (pigmentada) y barrera externa (no pigmentada), cristalino y procesos ciliares.",
    },
    {
      original: getImagePath("./images/IMG_2626.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2626.jpeg"),
      title: "Ojo",
      description: "Cristalino.",
    },
    {
      original: getImagePath("./images/IMG_2649.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2649.jpeg"),
      title: "Ojo",
      description: "Cuerpo y músculo ciliar",
    },
    {
      original: getImagePath("./images/IMG_2668.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2668.jpeg"),
      title: "Ojo",
      description: "Esclera y cristalino.",
    },
    {
      original: getImagePath("./images/IMG_2673.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2673.jpeg"),
      title: "Ojo",
      description: "Cuerpo ciliar, músculo ciliar, esclera y córnea.",
    },
    {
      original: getImagePath("./images/IMG_2718.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2718.jpeg"),
      title: "Ojo",
      description: "Cristalino, esclera, córnea, procesos ciliares e iris.",
    },
    {
      original: getImagePath("./images/IMG_2731.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2731.jpeg"),
      title: "Encéfalo",
      description:
        "Sustancia gris y cuerpos neuronales. (Se observa un poco de capa meníngea)",
    },
    {
      original: getImagePath("./images/IMG_2732.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2732.jpeg"),
      title: "Encéfalo",
      description: "Sustancia gris y cuerpos neuronales.",
    },
    {
      original: getImagePath("./images/IMG_2733.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2733.jpeg"),
      title: "Encéfalo",
      description: "Meninges.",
    },
    {
      original: getImagePath("./images/IMG_2734.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2734.jpeg"),
      title: "Encéfalo",
      description: "Sustancia gris y cuerpos neuronales.",
    },
    {
      original: getImagePath("./images/IMG_2738.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2738.jpeg"),
      title: "Encéfalo",
      description: "Sustancia gris y cuerpos neuronales.",
    },
    {
      original: getImagePath("./images/IMG_2740.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2740.jpeg"),
      title: "Encéfalo",
      description: "Hipocampo, sustancia gris, cuerpos neuronales y meninges.",
    },
    {
      original: getImagePath("./images/IMG_2742.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2742.jpeg"),
      title: "Bazo",
      description: "Centros germinales.",
    },
    {
      original: getImagePath("./images/IMG_2746.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2746.jpeg"),
      title: "Bazo",
      description: "Centros germinales.",
    },
    {
      original: getImagePath("./images/IMG_2748.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2748.jpeg"),
      title: "Epidídimo",
      description:
        "Revestido de un epitelio cilíndrico pseudoestratificado con estereocilios.",
    },
    {
      original: getImagePath("./images/IMG_2750.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2750.jpeg"),
      title: "Testículo",
      description: "Presencia de túnica albugínea y túbulos seminíferos.",
    },
    {
      original: getImagePath("./images/IMG_2751.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2751.jpeg"),
      title: "Testículo",
      description: "Presencia de túbulos seminíferos.",
    },
    {
      original: getImagePath("./images/IMG_2753.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2753.jpeg"),
      title: "Testículo",
      description: "Presencia de túnica albugínea y túbulos seminíferos.",
    },
    {
      original: getImagePath("./images/IMG_2830.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2830.jpeg"),
      title: "Encéfalo",
      description: "Sustancia blanca y sustancia gris.",
    },
    {
      original: getImagePath("./images/IMG_2827.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2827.jpeg"),
      title: "Encéfalo",
      description: "Sustancia blanca y sustancia gris.",
    },
    {
      original: getImagePath("./images/IMG_2828.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2828.jpeg"),
      title: "Encéfalo",
      description:
        "Sustancia blanca y sustancia gris. Cuerpos neuronales y prolongaciones axónicas.",
    },
    {
      original: getImagePath("./images/IMG_2835.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2835.jpeg"),
      title: "Estómago",
      description:
        "Mucosa, submucosa, muscular de la mucosa, muscular propia y serosa.",
    },
    {
      original: getImagePath("./images/IMG_2836.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2836.jpeg"),
      title: "Hígado",
      description: "Presencia de hepatocitos.",
    },
    {
      original: getImagePath("./images/IMG_2845.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2845.jpeg"),
      title: "Sangre (Frotis Sanguíneo)",
      description: "Tinción de Wright",
    },
    {
      original: getImagePath("./images/IMG_2847.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2847.jpeg"),
      title: "Sangre (Frotis Sanguíneo)",
      description: "Presencia de linfocitos y algun que otro neutrófilo.",
    },
    {
      original: getImagePath("./images/IMG_2855.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2855.jpeg"),
      title: "Sangre (Frotis Sanguíneo)",
      description: "Presencia de linfocitos y algun que otro neutrófilo.",
    },
    {
      original: getImagePath("./images/IMG_2858.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2858.jpeg"),
      title: "Sangre (Frotis Sanguíneo)",
      description: "Presencia de neutrófilos y monocitos.",
    },
    {
      original: getImagePath("./images/IMG_2859.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2859.jpeg"),
      title: "Sangre (Frotis Sanguíneo)",
      description: "Presencia de neutrófilos.",
    },
    {
      original: getImagePath("./images/IMG_2860.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2860.jpeg"),
      title: "Sangre (Frotis Sanguíneo)",
      description: "Presencia de linfocitos y algun que otro neutrófilo.",
    },
    {
      original: getImagePath("./images/IMG_2862.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2862.jpeg"),
      title: "Sangre (Frotis Sanguíneo)",
      description: "Presencia de un basófilo.",
    },
    {
      original: getImagePath("./images/IMG_2863.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2863.jpeg"),
      title: "Sangre (Frotis Sanguíneo)",
      description: "Presencia de monocitos.",
    },
    {
      original: getImagePath("./images/IMG_2864.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2864.jpeg"),
      title: "Sangre (Frotis Sanguíneo)",
      description: "Presencia de monocito y un eosinófilo.",
    },
    {
      original: getImagePath("./images/IMG_2865.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2865.jpeg"),
      title: "Sangre (Frotis Sanguíneo)",
      description:
        "Presencia de linfocito y monocito. (Junto con algunas plaquetas)",
    },
    {
      original: getImagePath("./images/IMG_2866.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2866.jpeg"),
      title: "Sangre (Frotis Sanguíneo)",
      description: "Presencia de linfocitos.",
    },
    {
      original: getImagePath("./images/IMG_2867.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2867.jpeg"),
      title: "Sangre (Frotis Sanguíneo)",
      description: "Presencia de monocitos.",
    },
    {
      original: getImagePath("./images/IMG_2868.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2868.jpeg"),
      title: "Sangre (Frotis Sanguíneo)",
      description: "Presencia de linfocitos y un eosinófilo central.",
    },
    {
      original: getImagePath("./images/IMG_2914.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2914.jpeg"),
      title: "Epidídimo",
      description:
        "Revestido de un epitelio cilíndrico pseudoestratificado con estereocilios.",
    },
    {
      original: getImagePath("./images/IMG_2915.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2915.jpeg"),
      title: "Epidídimo",
      description:
        "Revestido de un epitelio cilíndrico pseudoestratificado con estereocilios.",
    },
    {
      original: getImagePath("./images/IMG_2916.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2916.jpeg"),
      title: "Epidídimo",
      description:
        "Revestido de un epitelio cilíndrico pseudoestratificado con estereocilios.",
    },
    {
      original: getImagePath("./images/IMG_2965.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2965.jpeg"),
      title: "Amígdala Palatina",
      description:
        "Revestidas de epitelio plano estratificado. Grandes centros germinales. Presencia de criptas.",
    },
    {
      original: getImagePath("./images/IMG_2966.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2966.jpeg"),
      title: "Amígdala Palatina",
      description:
        "Revestidas de epitelio plano estratificado. Grandes centros germinales. Presencia de criptas.",
    },
    {
      original: getImagePath("./images/IMG_2967.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2967.jpeg"),
      title: "Esófago",
      description:
        "Epitelio plano estratificado. Muscosa, submucosa, muscular de la mucosa y adventicia.",
    },
    {
      original: getImagePath("./images/IMG_2968.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2968.jpeg"),
      title: "Esófago",
      description:
        "Epitelio plano estratificado. Muscosa, submucosa, muscular de la mucosa y adventicia.",
    },
    {
      original: getImagePath("./images/IMG_2969.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2969.jpeg"),
      title: "Bronquio Principal",
      description:
        "Cartílago hialino pero se corta abruptamente. Sin una forma de C definida. Presencia de glándulas.",
    },
    {
      original: getImagePath("./images/IMG_2979.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2979.jpeg"),
      title: "Bronquio Principal",
      description:
        "Cartílago hialino pero se corta abruptamente. Sin una forma de C definida. Presencia de glándulas.",
    },
    {
      original: getImagePath("./images/IMG_2985.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2985.jpeg"),
      title: "Hueso Trabecular",
      description: "Médula roja y amarilla, presencia de adipocitos.",
    },
    {
      original: getImagePath("./images/IMG_2987.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2987.jpeg"),
      title: "Hueso Trabecular",
      description: "Médula roja y amarilla, presencia de adipocitos.",
    },
    {
      original: getImagePath("./images/IMG_2988.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2988.jpeg"),
      title: "Hueso Trabecular",
      description:
        "Osteocitos (inmersos en las lagunas), osteoblastos (en la trabécula) y osteoclastos (abombados).",
    },
    {
      original: getImagePath("./images/IMG_2990.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2990.jpeg"),
      title: "Hueso Trabecular",
      description:
        "Osteocitos (inmersos en las lagunas), osteoblastos (en la trabécula) y osteoclastos (abombados).",
    },
    {
      original: getImagePath("./images/IMG_2999.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_2999.jpeg"),
      title: "Hueso Compacto",
      description:
        "Osteonas, conductos de Volkman y laminillas intersticiales.",
    },
    {
      original: getImagePath("./images/IMG_3003.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3003.jpeg"),
      title: "Glándula Suprarenal",
      description:
        "Cápsula, corteza: glomerular (mineralocorticoides), fascicular (glucocorticoides) y reticular (andrógenos). Médula como capa más interna.",
    },
    {
      original: getImagePath("./images/IMG_3006.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3006.jpeg"),
      title: "Glándula Suprarenal",
      description:
        "Cápsula, corteza: glomerular (mineralocorticoides), fascicular (glucocorticoides) y reticular (andrógenos). Médula como capa más interna.",
    },
    {
      original: getImagePath("./images/IMG_3008.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3008.jpeg"),
      title: "Estómago",
      description:
        "Mucosa, submucosa, muscular de la mucosa, muscular propia y serosa.",
    },
    {
      original: getImagePath("./images/IMG_3010.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3010.jpeg"),
      title: "Estómago",
      description: "Mucosa y submucosa.",
    },
    {
      original: getImagePath("./images/IMG_3012.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3012.jpeg"),
      title: "Glándula Salival (Submandibular)",
      description: "Glándula salival mayor mixta, de predominio SEROSO.",
    },
    {
      original: getImagePath("./images/IMG_3092.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3092.jpeg"),
      title: "Íleon",
      description:
        "Su mucosa se reviste de un epitelio cilíndrico simple con microvellosidades y células caliciformes. Presencia de placas de Peyer.",
    },
    {
      original: getImagePath("./images/IMG_3094.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3094.jpeg"),
      title: "Íleon",
      description:
        "Su mucosa se reviste de un epitelio cilíndrico simple con microvellosidades y células caliciformes. Presencia de placas de Peyer.",
    },
    {
      original: getImagePath("./images/IMG_3195.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3195.jpeg"),
      title: "Páncreas",
      description:
        "Contiene acinos serosos pancreáticos (exocrinos y de secreción de ZIMOGENOS) e Islotes de Langerhans (endocrinos y de celulas alfa (glucagón), beta (insulina) y delta (somatostatina). Además de secretar PP (Polipéptido Pancreático)).",
    },
    {
      original: getImagePath("./images/IMG_3196.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3196.jpeg"),
      title: "Páncreas",
      description:
        "Contiene acinos serosos pancreáticos (exocrinos y de secreción de ZIMOGENOS) e Islotes de Langerhans (endocrinos y de celulas alfa (glucagón), beta (insulina) y delta (somatostatina). Además de secretar PP (Polipéptido Pancreático)).",
    },
    {
      original: getImagePath("./images/IMG_3199.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3199.jpeg"),
      title: "Músculo Cardíaco Estriado",
      description: "",
    },
    {
      original: getImagePath("./images/IMG_3202.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3202.jpeg"),
      title: "Bazo",
      description:
        "Bazo penicilado en el centro. (Estructura vascular alrededor de un centro germinal.)",
    },
    {
      original: getImagePath("./images/IMG_3205.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3205.jpeg"),
      title: "Uréter",
      description:
        "Tinción: Inmunohistoquímica. Epitelio transicional. Cuenta con tres capas musculares lisas. Además, su luz es en forma de estrella.",
    },
    {
      original: getImagePath("./images/IMG_3779.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3779.jpeg"),
      title: "Piel Delgada",
      description:
        "Tinción: Tricrómico de Masson. Epitelio plano estratificado queratinizado. Presencia de las tres capas de la piel: epidermis, dermis e hipodermis. Se puede apreciar una glándula sebácea.",
    },
    {
      original: getImagePath("./images/IMG_3780.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3780.jpeg"),
      title: "Piel Delgada",
      description:
        "Tinción: Tricrómico de Masson. Epitelio plano estratificado queratinizado. Presencia de las tres capas de la piel: epidermis, dermis e hipodermis. Se puede apreciar una glándulas sebáceas y apocrinas. También hay folículos pilosos.",
    },
    {
      original: getImagePath("./images/IMG_3781.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3781.jpeg"),
      title: "Piel Delgada",
      description:
        "Tinción: Tricrómico de Masson. Epitelio plano estratificado queratinizado. Presencia de las tres capas de la piel: epidermis, dermis e hipodermis. Folículo piloso.",
    },
    {
      original: getImagePath("./images/IMG_3782.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3782.jpeg"),
      title: "Piel Delgada",
      description:
        "Tinción: Tricrómico de Masson. Epitelio plano estratificado queratinizado. Presencia de las tres capas de la piel: epidermis, dermis e hipodermis. Se puede apreciar una glándulas sebáceas y apocrinas. También hay folículos pilosos.",
    },
    {
      original: getImagePath("./images/IMG_3793.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3793.jpeg"),
      title: "Piel Gruesa",
      description:
        "Con gran capa de estrato corneo. SIN glándulas ni foliculos pilosos. Predominante en palmas de las manos y pies.",
    },
    {
      original: getImagePath("./images/IMG_3812.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3812.jpeg"),
      title: "Corazón",
      description: "Músculo cardíaco estriado.",
    },
    {
      original: getImagePath("./images/IMG_3817.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3817.jpeg"),
      title: "Tráquea",
      description:
        "Presencia de cartílago hialino. Forma de C. Glándulas. Epitelio cilindrico pseudoestratificado ciliado con células caliciformes.",
    },
    {
      original: getImagePath("./images/IMG_3818.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3818.jpeg"),
      title: "Tráquea",
      description:
        "Presencia de cartílago hialino. Forma de C. Glándulas. Epitelio cilindrico pseudoestratificado ciliado con células caliciformes.",
    },
    {
      original: getImagePath("./images/IMG_3820.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3820.jpeg"),
      title: "Esófago",
      description:
        "Epitelio plano estratificado. Muscosa, submucosa, muscular de la mucosa y adventicia.",
    },
    {
      original: getImagePath("./images/IMG_3821.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3821.jpeg"),
      title: "Tráquea",
      description:
        "Presencia de cartílago hialino. Forma de C. Glándulas. Epitelio cilindrico pseudoestratificado ciliado con células caliciformes.",
    },
    {
      original: getImagePath("./images/IMG_3863.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3863.jpeg"),
      title: "Páncreas",
      description:
        "Contiene acinos serosos pancreáticos (exocrinos y de secreción de ZIMOGENOS) e Islotes de Langerhans (endocrinos y de celulas alfa (glucagón), beta (insulina) y delta (somatostatina). Además de secretar PP (Polipéptido Pancreático)).",
    },
    {
      original: getImagePath("./images/IMG_3864.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3864.jpeg"),
      title: "Páncreas",
      description:
        "Contiene acinos serosos pancreáticos (exocrinos y de secreción de ZIMOGENOS) e Islotes de Langerhans (endocrinos y de celulas alfa (glucagón), beta (insulina) y delta (somatostatina). Además de secretar PP (Polipéptido Pancreático)).",
    },
    {
      original: getImagePath("./images/IMG_3878.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3878.jpeg"),
      title: "Médula Espinal",
      description: "Asta dorsal. Sustancia blanca.",
    },
    {
      original: getImagePath("./images/IMG_3881.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3881.jpeg"),
      title: "Médula Espinal",
      description: "Canal central o ependimario. Sustancia gris.",
    },
    {
      original: getImagePath("./images/IMG_3886.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3886.jpeg"),
      title: "Médula Espinal",
      description:
        "Surco mediano dorsal. Sustancia blanca. Fasciculo grácil y cuneiforme.",
    },
    {
      original: getImagePath("./images/IMG_3890.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3890.jpeg"),
      title: "Encéfalo",
      description:
        "Sustancia gris y blanca. Presencia de cuerpos neuronales y terminaciones axónicas.",
    },
    {
      original: getImagePath("./images/IMG_3948.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_3948.jpeg"),
      title: "Citología Cervical",
      description: "Toma de muestra.",
    },
    {
      original: getImagePath("./images/IMG_4006.jpeg"),
      thumbnail: getImagePath("./images/thumbnails/IMG_4006.jpeg"),
      title: "Vejiga",
      description: "Capas musculares. Urotelio.",
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
