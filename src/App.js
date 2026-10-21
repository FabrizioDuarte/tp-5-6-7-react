import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Inicio from './pages/Inicio';
import ProyectoBlob from './pages/ProyectoBlob';
import Contacto from './pages/Contacto';
import AcercaDe from './pages/AcercaDe';
import './App.css';

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/blobs" element={<ProyectoBlob />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
