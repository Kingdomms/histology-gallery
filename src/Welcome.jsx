import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";

const Welcome = ({ onEnterGallery }) => {
  const { theme } = useTheme();
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Set animation complete after the animation duration
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 3000); // 3 seconds for the animation to complete

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`welcome-container ${theme}`}>
      <div className="welcome-content">
        <h1 className="welcome-title">
          <span className="animate-text">Atlas de Histología</span>
        </h1>
        <h2 className="welcome-subtitle">
          <span className="animate-text delay-1">
            Por Luis Hazael Flores Ramírez
          </span>
        </h2>
        <button
          className={`enter-button ${animationComplete ? "visible" : ""}`}
          onClick={onEnterGallery}
        >
          Entrar a la Galería
        </button>
      </div>
      <style jsx="true">{`
        .welcome-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100%;
          background-color: var(--bg-color);
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
        }

        .welcome-content {
          text-align: center;
          padding: 2rem;
        }

        .welcome-title {
          font-size: 3.5rem;
          color: var(--title-color);
          margin-bottom: 1rem;
          overflow: hidden;
        }

        .welcome-subtitle {
          font-size: 2rem;
          color: var(--text-color);
          margin-bottom: 3rem;
          overflow: hidden;
        }

        .animate-text {
          display: inline-block;
          opacity: 0;
          transform: translateY(50px);
          animation: fadeInUp 1.5s ease forwards;
        }

        .delay-1 {
          animation-delay: 0.5s;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .enter-button {
          padding: 12px 30px;
          font-size: 1.2rem;
          background-color: #4a90e2;
          color: white;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0;
          transform: scale(0.9);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .enter-button.visible {
          opacity: 1;
          transform: scale(1);
          animation: pulse 2s infinite;
        }

        .enter-button:hover {
          background-color: #357abd;
          transform: scale(1.05);
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(74, 144, 226, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(74, 144, 226, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(74, 144, 226, 0);
          }
        }

        @media (max-width: 768px) {
          .welcome-title {
            font-size: 2.5rem;
          }
          .welcome-subtitle {
            font-size: 1.5rem;
          }
          .enter-button {
            padding: 10px 25px;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Welcome;
