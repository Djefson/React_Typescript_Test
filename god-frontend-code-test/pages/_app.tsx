import { HelloWorld } from "../src/components/Helloworld";
import "../public/css/styles.css";
import React from "react";

function HomePage() {
  return (
    <React.StrictMode>
      <HelloWorld />
    </React.StrictMode>
  );
}

export default HomePage;
