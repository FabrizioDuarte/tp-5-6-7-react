import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <div className="contenedor">
      <h2>Inicio</h2>
      <p>Trabajo Práctico N°4: ejemplo de uso de Blobs en React.</p>
      <Link to="/blobs">Ir al proyecto de Blobs</Link>
    </div>
  );
}

export default Inicio;
