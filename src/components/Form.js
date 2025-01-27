import React, { useState } from "react";

const Form = ({ dodajZadanie }) => {
  const [tekst, setTekst] = useState("");
  const [czyWyroznione, setCzyWyroznione] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tekst.trim() !== "") {
      dodajZadanie(tekst, czyWyroznione);
      setTekst("");
      setCzyWyroznione(false);
    }
  };
  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  };
  return (
    <form style={styles} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Dodaj nowe zadanie"
        value={tekst}
        onChange={(e) => setTekst(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={czyWyroznione}
          onChange={(e) => setCzyWyroznione(e.target.checked)}
        />{" "}
        &#9888;
      </label>
      <input type="submit" value="Dodaj" />
    </form>
  );
};

export default Form;
