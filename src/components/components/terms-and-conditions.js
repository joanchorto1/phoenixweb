import React from 'react';
import Layout from '../layout/layout';

const TermsAndConditions = () => {
    return (
        <Layout>
            <div className="container mt-5">
                <section>
                    <h2 className="text-center mb-4">Términos y Condiciones</h2>
                    <p>
                        Al acceder y utilizar este sitio web, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo con alguno de estos términos, no utilices este sitio.
                    </p>

                    <h3>Uso del Sitio</h3>
                    <p>
                        Este sitio web es propiedad y está operado por Phoenix Group. El contenido del sitio es solo para tu información general y puede cambiar sin previo aviso.
                    </p>

                    <h3>Propiedad Intelectual</h3>
                    <p>
                        Todo el contenido publicado en este sitio web, incluidos textos, gráficos, logotipos, imágenes y software, es propiedad de Phoenix Group o de terceros que han otorgado la debida autorización para su uso.
                    </p>

                    {/* Agregar más secciones y detalles según sea necesario */}

                    <h3>Limitación de Responsabilidad</h3>
                    <p>
                        Phoenix Group no será responsable por cualquier pérdida o daño directo, indirecto, incidental, especial o consecuente que surja del uso o la imposibilidad de uso de este sitio web.
                    </p>

                    <h3>Enlaces a Terceros</h3>
                    <p>
                        Este sitio web puede contener enlaces a sitios web de terceros. Phoenix Group no tiene control sobre el contenido y las políticas de privacidad de estos sitios, y no será responsable por ellos.
                    </p>

                    {/* Agregar más secciones según sea necesario */}
                </section>
            </div>
        </Layout>
    );
};

export default TermsAndConditions;