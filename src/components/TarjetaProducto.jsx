import { formatoPesos } from '../datos.js'
 
// Componente: recibe datos por «props» y avisa al padre con una función
function TarjetaProducto({ producto, onAgregar }) {
  return (
    <article className="tarjeta">
      <p className="categoria">{producto.categoria}</p>
      <h2>{producto.nombre}</h2>
      <p className="precio">{formatoPesos.format(producto.precio)}</p>
      <button onClick={() => onAgregar(producto)}>Agregar</button>
    </article>
  )
}
 
export default TarjetaProducto
