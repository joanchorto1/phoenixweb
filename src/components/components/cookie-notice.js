import React from 'react';
import Layout from '../layout/layout';
const CookieNotice = () => {
    return (
        <Layout>
            <div className="container mt-5">
                <section>
                    <h2 className="text-center mb-4">Aviso de Cookies</h2>
                    <p>
                        Este sitio web utiliza cookies para mejorar la experiencia del usuario. Al utilizar nuestro sitio web, aceptas todas las cookies de acuerdo con nuestra Política de Cookies.
                    </p>

                    <h3>¿Qué son las Cookies?</h3>
                    <p>
                        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo para ayudar a mejorar la experiencia del usuario. Al utilizar nuestro sitio web, aceptas el uso de cookies de acuerdo con nuestra Política de Cookies.
                    </p>

                    <h3>¿Cómo Utilizamos las Cookies?</h3>
                    <p>
                        Utilizamos cookies para proporcionar servicios personalizados, analizar el rendimiento del sitio y mejorar la funcionalidad del mismo.
                    </p>

                    {/* Agregar más información sobre el uso de cookies según sea necesario */}

                    <h3>Control de Cookies</h3>
                    <p>
                        Puedes controlar y/o eliminar las cookies según tu deseo. Consulta la configuración de tu navegador para obtener más información sobre cómo hacerlo.
                    </p>

                    {/* Agregar más información sobre el control de cookies según sea necesario */}
                </section>
            </div>
        </Layout>
    );
};

export default CookieNotice;