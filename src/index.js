
import React from "react";
import ReactDom from "react-dom";
import App from "./App";


function BookList() {
  return (
    <App/>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
