import React from "react";
import ReactDOM from "react-dom/client";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import { CounterApp } from "./01-useState/CounterApp";
import { CounterwithCustomHook } from "./01-useState/CounterwithCustomHook";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayoutEffect/Layout";
import { Memorize } from "./06-memo/Memorize";
// import { HooksApp } from "./HooksApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Memorize />
  </React.StrictMode>
);
