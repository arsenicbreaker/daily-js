import React, { useState } from 'react'

function TermsCheckbox() {
  const [agreed, setAgreed] = useState(false);
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        I agree to terms and conditions
      </label>
      <button disabled={!agreed}>Submit</button>
    </div>
  );
}

export default TermsCheckbox