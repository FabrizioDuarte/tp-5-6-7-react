import { useState } from 'react';
import './ProyectoBlob.css';

function ProyectoBlob() {
  const [blob, setBlob] = useState(null);
  const [resultado, setResultado] = useState('');

  function crearBlob() {
    const texto = 'Este es un archivo creado usando Blob en JavaScript.';
    setBlob(new Blob([texto], { type: 'text/plain' }));
    setResultado('Blob creado correctamente.');
  }

  function descargarBlob() {
    if (!blob) {
      setResultado('Primero tenés que crear el Blob.');
      return;
    }

    const url = URL.createObjectURL(blob);
    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.download = 'archivo.txt';
    enlace.click();
    URL.revokeObjectURL(url);
    setResultado('Archivo descargado.');
  }

  function usarSlice() {
    if (!blob) {
      setResultado('Primero tenés que crear el Blob.');
      return;
    }

    const parte = blob.slice(0, 10);
    setResultado('Slice creado. Tamaño: ' + parte.size + ' bytes.');
  }

  return (
    <div className="contenedor proyecto-blob">
      <h2>Ejemplo de uso de Blobs</h2>

      <button id="crear" onClick={crearBlob}>Crear Blob de texto</button>
      <button id="descargar" onClick={descargarBlob}>Descargar Blob</button>
      <button id="slice" onClick={usarSlice}>Usar slice()</button>

      <p id="resultado">{resultado}</p>
    </div>
  );
}

export default ProyectoBlob;
