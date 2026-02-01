import React, { useState } from "react";

function CountrySelect() {
  const [country, setCountry] = useState("");
  return (
    <div>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="">Pilih Negara</option>
        <option value="id">Indonesia</option>
        <option value="my">Malaysia</option>
        <option value="sg">Singapore</option>
      </select>
      <p>Kamu pilih: {country}</p>
    </div>
  );
}

export default CountrySelect;
