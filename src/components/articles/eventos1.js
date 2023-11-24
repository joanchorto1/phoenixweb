// Archivo: eventos1.js
import React from "react";
import Layout from "../layout/layout";

const Eventos1 = () => {
    return (
        <Layout>
            <div className="container mt-5">
                <h2 className="text-center">Claves para una Organización Exitosa de Eventos Corporativos</h2>
                <p>
                    Descubre las estrategias y prácticas esenciales para planificar y
                    ejecutar eventos corporativos exitosos. Desde la selección del lugar
                    hasta la logística del día del evento, desbloquearemos las claves para
                    el éxito.
                </p>
                <p>
                    <strong>1. Planificación Estratégica:</strong> Cómo la planificación
                    estratégica establece la base para un evento exitoso.
                </p>
                <p>
                    <strong>2. Selección de Proveedores:</strong> La importancia de
                    elegir proveedores confiables y de calidad para cada aspecto del
                    evento.
                </p>
                <p>
                    <strong>3. Experiencia del Asistente:</strong> Cómo crear una
                    experiencia memorable para los asistentes desde su llegada hasta la
                    despedida.
                </p>
                {/* Contenido adicional del artículo */}
            </div>
        </Layout>
    );
};

export default Eventos1;
