import { VistaServicio } from "../shared/ui/servicio/VistaServicio";
import './area-servicio.css'

const imgArray=[ './servicio/servicio-3.jpg', './servicio/servicio-4.jpg', './servicio/servicio-00.jpg', './servicio/servicio-1.jpg', './servicio/servicio-2.jpg', './servicio/servicio-5.jpg']

export const AreaServicios = () => {
  return (
    <>
      <VistaServicio mostrarBoton={false} />
      <section className="h-auto w-100">
        <p className="descripcion-servicios">
          En Panda Café, ofrecemos servicios de mantenimiento y reparaciones
          especializadas para máquinas de café y equipos de cafetería,
          asegurando que tu inversión se mantenga en óptimas condiciones durante
          mucho más tiempo.
        </p>

        {/* Contenedor del slider */}
        <div className="slider-container">
          {imgArray.map((item) => (
            <div key={item} className="slider-item">
              <img
                src={item} // Ajusta la ruta de las imágenes
                alt={`Servicio ${item}`}
                className="slider-image"
              />
            </div>
          ))}
        </div>
        <div className="destacados">
            <h2>Puntos Destacados</h2>
            <div className="puntos-destacados">
                <img src="" alt="" />

            </div>

        </div>
      </section>
    </>
  );
};