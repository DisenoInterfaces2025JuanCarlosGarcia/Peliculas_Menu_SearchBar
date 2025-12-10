
/**
 * Nav - Responsive navigation component with accessible mobile menu.
 *
 * This component renders a hamburger button for small screens and a horizontal
 * navigation for medium and larger screens. It internally manages an `open`
 * boolean state to control the collapsed/expanded mobile menu.
 *
 * Behavior:
 * - toggleMenu toggles the `open` state; closeMenu sets `open` to false.
 * - The hamburger button is keyboard accessible and exposes:
 *   - aria-label="Abrir menú"
 *   - aria-expanded={open}
 *   - aria-controls="menu-principal"
 * - The navigation element has aria-label="Navegación principal" and an id
 *   that matches the button's aria-controls for assistive technologies.
 * - Uses animated transitions (height and opacity) to show/hide the mobile menu,
 *   while remaining fully visible on md+ viewports (responsive classes).
 * - Navigation links are NavLink components; each link calls closeMenu on click
 *   so the mobile menu collapses after navigation.
 * - Active link styling is applied via the NavLink className callback.
 *
 * Accessibility notes:
 * - The toggle is a native <button> element (keyboard/assistive friendly).
 * - aria-expanded and aria-controls keep state exposed to screen readers.
 * - Visual focus styles are provided via focus:ring utilities.
 *
 * @component
 * @returns {JSX.Element} The navigation component with responsive and accessible menu.
 */
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Botón hamburguesa accesible */}
      <button
        className="md:hidden border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
        aria-label="Abrir menú"
        aria-expanded={open}
        aria-controls="menu-principal"
        onClick={toggleMenu}
      >
        ☰
      </button>

      {/* NAV */}
      <nav
        id="menu-principal"
        className={`
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} 
          md:max-h-none md:opacity-100 
          overflow-hidden transition-all duration-300 ease-in-out
          md:flex md:gap-6 text-lg 
          absolute md:static left-0 right-0 top-16 md:top-auto 
          bg-white shadow md:shadow-none 
          p-6 md:p-0
        `}
        aria-label="Navegación principal"
      >
        <NavLink
          to="/"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive
              ? "font-bold underline block mb-4 md:mb-0"
              : "hover:underline block mb-4 md:mb-0"
          }
        >
          Inicio
        </NavLink>

        <NavLink
          to="/peliculas"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive
              ? "font-bold underline block mb-4 md:mb-0"
              : "hover:underline block mb-4 md:mb-0"
          }
        >
          Películas
        </NavLink>

        <NavLink
          to="/interpretes"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive
              ? "font-bold underline block mb-4 md:mb-0"
              : "hover:underline block mb-4 md:mb-0"
          }
        >
          Intérpretes
        </NavLink>

        <NavLink
          to="/admin"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive
              ? "font-bold underline block"
              : "hover:underline block"
          }
        >
          Admin
        </NavLink>
        
        <NavLink
          to="/formulario"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive
              ? "font-bold underline block"
              : "hover:underline block"
          }
        >
          Formulario
        </NavLink>
      </nav>
    </>
  );
}
export default Nav;