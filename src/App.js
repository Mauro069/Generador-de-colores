import { useState } from "react";
import Icono from "./Icono.png";
import "./App.css";

function App() {
  const [color, setColor] = useState("#000000");

  const cambiarColor = () => {
    let nuevoColor = (Math.random() * 0xfffff * 1000000)
      .toString(16)
      .slice(0, 6);
    setColor(`#${nuevoColor}`);
  };

  return (
    <div className="contenedor" 
      style={{ backgroundColor: `${color}`}}
    >
      <div className="contenido">
        <h2>{color}</h2>
        <button onClick={cambiarColor}>
          <img src={Icono} alt="icono" />
        </button>
      </div>
    </div>
  );
}

export default App;
