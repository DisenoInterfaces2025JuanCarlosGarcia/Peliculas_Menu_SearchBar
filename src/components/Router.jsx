import { Routes, Route, Navigate } from "react-router-dom";

import Contenedor from "./Contenedor";
import Detail from "./Detail";

import Home from "../pages/Home";
import Peliculas from "../pages/Peliculas";
import Interpretes from "../pages/Interpretes";
import Admin from "../pages/Admin";
import Formulario from "../pages/Formulario"

/**
 * AppRouter
 *
 * React component that defines the application's routing structure using react-router.
 *
 * Routes:
 * - "/" -> Home (rendered inside the Contenedor layout)
 * - "/inicio" -> Redirects (Navigate) to "/"
 * - "/peliculas" -> Peliculas (inside Contenedor)
 * - "/interpretes" -> Interpretes (inside Contenedor)
 * - "/admin" -> Admin (inside Contenedor)
 * - "/detalle/pelicula/:idPeli" -> Detail component with prop `es="pelicula"` (inside Contenedor)
 * - "/detalle/pelicula/:idPeli/interprete/:idInterprete" -> Detail component with prop `es="interprete"` (inside Contenedor)
 * - "*" -> Fallback 404 route rendering Contenedor with a "Página no encontrada" title and message
 *
 * Notes:
 * - The primary routes are nested under a Contenedor layout via a parent <Route element={<Contenedor />}>.
 * - URL parameters:
 *   - idPeli (string): identifier for a movie
 *   - idInterprete (string): identifier for an interpreter/actor
 * - The "/inicio" path performs a programmatic redirect to the root path using <Navigate />.
 * - The catch-all ("*") route provides a user-friendly 404 page while still using the Contenedor wrapper.
 *
 * @component
 * @returns {JSX.Element} The routing element tree built with <Routes> and <Route>.
 *
 * @example
 * // Render the router at the root of the app:
 * // <BrowserRouter>
 * //   <AppRouter />
 * // </BrowserRouter>
 */
function AppRouter() {
  return (
    <Routes>
      {/* Layout principal */}
      <Route element={<Contenedor />}>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Navigate to="/" />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/interpretes" element={<Interpretes />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/formulario" element={<Formulario />} /> 
        <Route path="/detalle/pelicula/:idPeli" element={<Detail es="pelicula" />} />
        <Route path="/detalle/pelicula/:idPeli/interprete/:idInterprete" element={<Detail es="interprete" />} />
      </Route>

      {/* Página 404 */}
      <Route
        path="*"
        element={
          <Contenedor titulo="Página no encontrada">
            <p>La ruta no existe.</p>
          </Contenedor>
        }
      />
    </Routes>
  );
}
export default AppRouter;