import React, { useState } from "react";
import ReactDOM from "react-dom";
import Ramka from "./Ramka.js";
import Form from "./Form.js";
import Wpis from "./Wpis.js";
import BrakZadan from "./BrakZadan.js";
import "../styles/ToDo.css";
import Overlay from "./Overlay.js";
const ToDo = () => {
  const [listaZadan, setListaZadan] = useState([]);
  const [overlay, setOverlay] = useState(false);

  const dodajZadanie = (tekst, czyWyroznione) => {
    const noweZadanie = { tekst, czyWyroznione };
    setListaZadan([...listaZadan, noweZadanie]);
  };

  const usunZadanie = (index) => {
    const nowaLista = listaZadan.filter((_, i) => i !== index);
    const usunieteZadanie = listaZadan[index];
    setOverlay(!overlay);
    setListaZadan(nowaLista);
  };

  const przesunWGore = (index) => {
    if (index > 0) {
      const noweZadania = [...listaZadan];
      const tmp = noweZadania[index];
      noweZadania[index] = noweZadania[index - 1];
      noweZadania[index - 1] = tmp;
      setListaZadan(noweZadania);
    }
  };

  const przesunWDol = (index) => {
    if (index < listaZadan.length - 1) {
      const noweZadania = [...listaZadan];
      const tmp = noweZadania[index];
      noweZadania[index] = noweZadania[index + 1];
      noweZadania[index + 1] = tmp;
      setListaZadan(noweZadania);
    }
  };

  return (
    <Ramka>
      <h1>Lista zadań</h1>
      <Form dodajZadanie={dodajZadanie} />

      <ul className="lista">
        {listaZadan.length === 0 ? (
          <BrakZadan />
        ) : (
          listaZadan.map((zadanie, index) => (
            <Wpis
              key={index}
              zadanie={zadanie}
              usunZadanie={() => usunZadanie(index)}
              przesunWGore={() => przesunWGore(index)}
              przesunWDol={() => przesunWDol(index)}
              index={index}
              maxIndex={listaZadan.length - 1}
            />
          ))
        )}
      </ul>

      {overlay &&
        ReactDOM.createPortal(
          <Overlay
            text={"Usunięto zadanie"}
            onClose={() => setOverlay(!overlay)}
          />,
          document.getElementById("overlay-root")
        )}
    </Ramka>
  );
};
export default ToDo;
