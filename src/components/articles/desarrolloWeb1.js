// Archivo: desarrolloWeb1.js
import React from "react";
import Layout from "../layout/layout";

const DesarrolloWeb1 = () => {
    return (
        <Layout>
            <div className="container mt-5">
                <h2 className="text-center">Tendencias Actuales en Desarrollo Web</h2>
                <p>
                    El mundo del desarrollo web está en constante evolución. Explora las
                    tendencias más actuales que están dando forma al diseño y la
                    funcionalidad de los sitios web en la actualidad.
                </p>
                <p>
                    <strong>1. Diseño Responsivo:</strong> La adaptabilidad a diferentes
                    dispositivos es esencial. Descubre cómo el diseño responsivo mejora la
                    experiencia del usuario.
                </p>
                <p>
                    <strong>2. Desarrollo de Aplicaciones Progresivas (PWA):</strong> Las
                    PWA ofrecen una experiencia similar a la de una aplicación nativa.
                    Explora cómo están cambiando el juego en el desarrollo web.
                </p>
                <p>
                    <strong>3. Integración de Inteligencia Artificial:</strong> La IA está
                    transformando el desarrollo web. Desde chatbots hasta personalización
                    de contenido, descubre cómo se está utilizando.
                </p>
                {/* Contenido adicional del artículo */}
            </div>
        </Layout>
    );
};

export default DesarrolloWeb1;
