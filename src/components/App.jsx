import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./Main";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Main />
      </div>
    </Router>
  );
}

export default App;
