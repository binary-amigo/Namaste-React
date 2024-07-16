import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", {}, "Hello World");

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);
root.render(heading1);

