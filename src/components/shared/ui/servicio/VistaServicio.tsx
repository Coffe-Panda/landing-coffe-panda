import './vista-servicio.css';

export const VistaServicio = ({ mostrarBoton }: { mostrarBoton: boolean }) => {
  return (
    <section className="vista-servicio">
      <p className='titulo-servicios'>Mantenimiento y reparación de máquinas de café</p>
      <div className='container-btn-servicios'>
      {mostrarBoton && <button className="btn-servicio">Explora nuestros servicios</button>}
      <a id='contactanos-link' className="btn-servicio mx-lg-4">Contáctanos</a>
      </div>   
    </section>
  );
};