import { useEffect } from "react";

function Component() {
  useEffect(() => {
    // Code yang dijalankan setelah render
    console.log("Component rendered!");
  });
  return <div>Hello</div>;
}

export default Component;
