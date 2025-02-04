import './cafe-component.css'
export const CafeComponent = ({ mostrarBoton }: { mostrarBoton: boolean }) => {
  return (
    <section className="vista-cafe">
      <p className='titulo-servicios'>CAFÉ</p>
      <p className='titulo-servicios'>100% hondureño</p>
      <p className="btn-servicio d-md-block d-md-none">Enfocados en servir siempre un abrazo en cada taza</p>
      <p className='texto-informativo p-2'>Somos una empresa apasionada por el café de especialidad; ofrecemos eventos privados, servicio técnico y capacitaciones únicas ☕✨</p>
      
    </section>
  )
}
