import React, { useState } from "react"

function GenderSelect() {
  const [gender, setGender] = useState("");
  return (
    <div>
      <label>
        <input
          type="radio"
          value="male"
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          value="female"
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>
      <p>Selected: {gender}</p>
    </div>
  );
}

export default GenderSelect;
