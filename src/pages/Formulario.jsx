import { useState } from 'react';

function Formulario() {
    const [formData, setFormData] = useState({
        nombre: "", grupo: "", año: "", tipo: "", localizacion: "", prestado: false
    });

    const handleChange = (e) => {

        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados:", formData)
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4" >
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md"
            >
                <div className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
                    Formulario de Discos
                </div>
                <label htmlFor="nombre"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre:
                </label>
                <input
                    id='nombre'
                    type="text"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                />
                <label htmlFor="grupo"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Grupo:
                </label>
                <input
                    id='grupo'
                    type="text"
                    value={formData.grupo}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                />
                <label htmlFor="año"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Año:
                </label>
                <input
                    id='año'
                    type="date"
                    value={formData.año}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                />
                <label htmlFor="tipo"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo:
                </label>

                <select
                    id='tipo'
                    value={formData.tipo}
                    onChange={(e) => setFormData({
                        ...formData,
                        tipo: e.target.value
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                >
                    <option value="rock">Rock</option>
                    <option value="punk">Punk</option>
                    <option value="trash">Trash</option>
                </select>

                <label htmlFor="localizacion"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Localizacion:
                </label>
                <input
                    id='localizacion'
                    type="text"
                    value={formData.localizacion}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                />
                <label htmlFor="prestado"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    prestado:
                </label>
                <input
                    id='prestado'
                    type="checkbox"
                    value={formData.prestado}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                />
                <div>
                    <button type='submit'
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )



}
export default Formulario;