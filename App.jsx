import React, { useEffect, useState } from "react";

function App() {
  const [risks, setRisks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/risks")
      .then((res) => res.json())
      .then((data) => setRisks(data));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>PréviTPE – Diagnostic des Risques (Simulation)</h1>
      <p>Risques détectés dans la base simulée :</p>
      <ul>
        {risks.map((risk, i) => (
          <li key={i}>{risk}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
