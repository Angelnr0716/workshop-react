import { useState } from 'react'
import { productos, formatoPesos } from './datos.js'
import TarjetaProducto from './components/TarjetaProducto.jsx'
 
const categorias = ['todas', 'hombre', 'mujer', 'accesorios']
 
function App() {
  // Estado: cuando cambia, React vuelve a dibujar el componente
  const [filtro, setFiltro] = useState('todas')
  const [carrito, setCarrito] = useState([])
 
  const visibles =
    filtro === 'todas' ? productos : productos.filter((p) => p.categoria === filtro)
  const total = carrito.reduce((suma, p) => suma + p.precio, 0)
 
  function agregar(producto) {
    setCarrito([...carrito, producto])
  }
 
  return (
    <>
      <header className="encabezado">
        <h1>Brisa Moda · React</h1>
        <span className="carrito">
          Carrito: {carrito.length} · {formatoPesos.format(total)}
        </span>
      </header>
      <main>
        <div className="filtros">
          {categorias.map((c) => (
            <button key={c} className={c === filtro ? 'activo' : ''} onClick={() => setFiltro(c)}>
              {c}
            </button>
          ))}
        </div>
        <div className="grilla">
          {visibles.map((p) => (
            <TarjetaProducto key={p.id} producto={p} onAgregar={agregar} />
          ))}
        </div>
      </main>
    </>
  )
}
 
export default App

