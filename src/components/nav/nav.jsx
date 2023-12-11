import { Outlet } from "react-router-dom";
import "./nav.css";
import { useRef } from "react";
import { useEffect } from "react";

export default function Nav() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  // Fonction pour fermer le menu en mode responsive
  const closeMenu = () => {
    if (navRef.current.classList.contains("responsive_nav")) {
      showNavbar();
    }
  };

  // Utilisation de useEffect pour ajouter des gestionnaires d'événements
  useEffect(() => {
    const navElements = document.querySelectorAll(
      ".nav-left a, .nav-right svg"
    );

    navElements.forEach((element) => {
      element.addEventListener("click", closeMenu);
    });

    return () => {
      // Nettoyer les gestionnaires d'événements lorsque le composant est démonté
      navElements.forEach((element) => {
        element.removeEventListener("click", closeMenu);
      });
    };
  }, []);
  return (
    <>
      <header>
        <nav ref={navRef}>
          <div className="nav-left">
            <a href="#home" className="links">
              Home
            </a>
            <a href="#infos" className="links">
              Infos
            </a>
            <a href="#project1" className="links">
              3D
            </a>

            <a href="#project2" className="links">
              Motion
            </a>

            
            <a href="#contact" className="links">
              Contact
            </a>
          </div>

          <div className="nav-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-instagram"
            >
              <a href="https://www.instagram.com/grego_art_0613/" target="_blank">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </a>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-linkedin"
            > 
            <a href="https://www.linkedin.com/in/grégoire-birlian-5376b9230/" target="_blank">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
              </a>
            </svg>
            

            <svg
            width="24"
            height="24"
            // viewBox="0 0 24 24"
            class="lucide lucide-x"
              
              data-name="Calque 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1356.1 1209.96"
            >
              <a href="https://www.artstation.com/grego_art" target="_blank">
              <path
                d="m1178.49,1208.96c-18.08,0-34.77-9.66-43.78-25.33L498.07,76.05c-8.98-15.63-8.95-34.86.07-50.46,9.03-15.6,25.69-25.21,43.71-25.21,22.68,0,45.46-.1,67.49-.19,53.59-.23,104.21-.45,156.14.6,63.87,1.3,116.78,32.96,148.99,89.15,148.86,259.68,294.79,515.09,417.91,730.69,30.27,53,31.61,110.76,3.78,162.64-25.45,47.44-51.71,92.78-79.52,140.77-11.24,19.4-22.87,39.47-34.32,59.49-8.98,15.71-25.69,25.41-43.78,25.43h-.06ZM628.97,101.11l549.62,956.19c23.95-41.37,46.73-81.03,68.57-121.76,11.25-20.98,10.44-42.18-2.48-64.82-123.1-215.56-269.01-470.93-417.83-730.55-14.69-25.62-34.84-37.82-63.42-38.4-44.52-.9-88.52-.85-134.46-.66Z"
                stroke-width="0"
              />
              <path
                d="m595.38,1209.96c-106.94,0-213.85,0-320.79,0-72.26,0-129.18-33.18-164.61-95.93-21.98-38.93-44.91-78.37-67.08-116.52-10.35-17.8-21.05-36.2-31.54-54.36-2.18-3.77-4.42-7.66-6.32-11.93-10.42-23.53-2.14-42.37,1.9-49.38,4.05-7.02,16.24-23.63,41.88-26.37,4.64-.5,8.97-.5,13.56-.5,96.93-.01,193.87-.01,290.8-.01h86.16c25.25,0,50.49,0,75.74.01,97.8.02,198.92.04,298.34-.24h.26c35.57,0,54.47,20.04,64.07,36.88,32.22,56.53,65.34,113.88,97.36,169.34,11.51,19.93,23.02,39.87,34.51,59.81,2.41,4.18,4.69,8.14,6.64,12.51,10.2,22.93,3.24,41.03-1.82,49.79-5.03,8.71-17.16,23.72-41.88,26.39-4.71.51-9.09.51-13.73.51-121.14,0-242.33,0-363.47,0Zm-459.8-254c20.65,35.53,41.85,72.07,62.36,108.41,17.64,31.25,40.56,44.58,76.66,44.58,203.87.01,407.74.01,611.62,0-28.98-50.19-58.82-101.88-88.12-153.18-94.53.23-190.27.21-283.02.2-25.24,0-50.48,0-75.72,0h-86.16c-72.54,0-145.07,0-217.61,0Z"
                stroke-width="0"
              />
              <path
                d="m722.69,775.04H151.95c-18.04,0-34.71-9.63-43.73-25.25s-9.02-34.88,0-50.5L393.58,205.08c9.02-15.62,25.69-25.25,43.73-25.25s34.71,9.62,43.73,25.25l285.37,494.22c9.02,15.62,9.02,34.88,0,50.5-9.02,15.62-25.69,25.25-43.74,25.25Zm-483.26-101h395.79l-197.9-342.72-197.89,342.72Z"
                stroke-width="0"
              />
              </a>
            </svg>
          </div>

          <button className="nav-btn nav-close-btn close" onClick={showNavbar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </nav>

        <button className="nav-btn" onClick={showNavbar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </header>

      <Outlet />
    </>
  );
}
