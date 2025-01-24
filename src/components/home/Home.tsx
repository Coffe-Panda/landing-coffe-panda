import { VistaServicio } from "../shared/ui/servicio/VistaServicio"
import { CafeComponent } from "../shared/ui/cafe/CafeComponent"
export const Home = () => {
  return (
   <>
    <VistaServicio mostrarBoton={true} />
    <CafeComponent mostrarBoton={true} />
   </>
  )
}
