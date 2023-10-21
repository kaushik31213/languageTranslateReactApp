import "./style.css";
import React, { useState } from "react";
import Field from "./Components/Field";
import Translate from "./Components/Translate";
import Languages from "./Components/Languages";

export default function App() {
  const [language, setLanguage] = useState("es");
  const [text, setText] = useState("");

  return (
    <div>
      <Field onChange={setText} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
