// Archivo: desarrolloWeb2.js
import React from "react";
import Layout from "../layout/layout";

const DesarrolloWeb2 = () => {
    return (
        <Layout>
            <div className="container mt-5">
                <h2 className="text-center">Desarrollo Web Sostenible</h2>
                <p>
                    La sostenibilidad es un tema crucial en todos los aspectos de la
                    sociedad, incluido el desarrollo web. Descubre cómo puedes contribuir
                    al desarrollo web sostenible y crear sitios respetuosos con el medio
                    ambiente.
                </p>
                <p>
                    <strong>1. Eficiencia Energética:</strong> Optimiza el rendimiento de
                    tu sitio para reducir el consumo de energía. Desde la compresión de
                    imágenes hasta el uso eficiente del código.
                </p>
                <p>
                    <strong>2. Hosting Verde:</strong> Considera opciones de hosting que
                    utilicen fuentes de energía renovable. Pequeños cambios en el hosting
                    pueden tener un impacto significativo.
                </p>
                <p>
                    <strong>3. Diseño Minimalista:</strong> Un diseño limpio no solo
                    mejora la experiencia del usuario, sino que también reduce la carga
                    del servidor y el consumo de recursos.
                </p>
                {/* Contenido adicional del artículo */}
            </div>
        </Layout>
    );
};

export default DesarrolloWeb2;
