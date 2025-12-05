import { Link } from "react-router-dom";
import peliculas from "../data/peliculas";
import List from "../components/List";
import {useState} from "react";
import { useMemo } from "react";
import SearchBar from "../components/SearchBar";


/**
 * Interpretes
 *
 * Componente que renderiza un listado de intérpretes extraídos de la colección `peliculas`.
 * Para cada película se itera su array `actores` y se crea un enlace (Link) que envuelve
 * un componente `List` con la información del intérprete.
 *
 * Estructura y comportamiento clave:
 * - Renderiza un título y una descripción introductoria.
 * - Mapea `peliculas` -> `pelicula.actores` para generar una cuadrícula de intérpretes.
 * - Cada intérprete se envuelve en un <Link> con `key` formado como `${pelicula.id}-${idInterprete}`.
 * - El `aria-label` del Link describe el intérprete: "Ver detalles del intérprete {actor.nombre}".
 * - Pasa a `List` las props:
 *     - nombre: actor.nombre
 *     - foto: actor.imagen
 *     - esNota10: booleano (true si pelicula.nota === 10)
 *   y coloca la biografía del actor como children: {actor.biografia}
 *
 * Dependencias esperadas en el scope:
 * - peliculas: Array de objetos con la forma:
 *     { id: string|number, nota: number, actores: Array<{ nombre: string, imagen?: string, biografia?: string }> }
 * - Componentes: Link, List
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa el listado de intérpretes en una cuadrícula.
 */
function Interpretes() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredInterpretes = useMemo(()=>{

    const allInterpretes = peliculas.flatMap((pelicula)=>

        pelicula.actores.map((actor,idInterprete)=>({
            idPelicula: pelicula.id,
            idInterprete: idInterprete,
            esNota10: pelicula.nombre==10,
        }))

    );
},[searchTerm]);

  return (
    <>
        <h2 className="text-xl font-semibold mb-4">Listado de intérpretes</h2>
        <p className="text-gray-700 mb-6">
            Estos son los intérpretes disponibles de nuestras películas:
        </p>
         <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                placeholder="Buscar películas por nombre..."
            />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8">
            {peliculas.map((pelicula) =>
                pelicula.actores.map((actor, idInterprete) => (
                    <Link 
                        key={`${pelicula.id}-${idInterprete}`} 
                        to={`/detalle/pelicula/${pelicula.id}/interprete/${idInterprete}`}
                        aria-label={`Ver detalles del intérprete ${actor.nombre}`}>
                        <List
                            // key={idInterprete} // No es necesario aquí porque el key está en el Link
                            nombre={actor.nombre}
                            foto={actor.imagen}
                            esNota10={pelicula.nota === 10}
                        >
                            {actor.biografia}
                        </List>
                    </Link>
                ))
            )}
        </div>
    </>
  );
}
export default Interpretes;