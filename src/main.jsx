import React from "react";
import ReactDOM from "react-dom/client";
import searchImages from "./api";

import App from "./App";

searchImages();

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
