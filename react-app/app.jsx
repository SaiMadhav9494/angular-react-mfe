import React from "react";
import ReactDOMClient from "react-dom/client";
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.page.jsx';

class App extends React.Component {
  render() {
    const reactVersion = require("./package.json").dependencies["react"];

    return (
      <>
        <h1>
          React
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            height="30"
          ></img>
        </h1>
        <p>React Version: {reactVersion}</p>

        <BrowserRouter>
          <Suspense fallback={<div>Loading</div>}>
            <Routes>
              <Route path="/react" element={<Home />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </>
    );
  }
}

class Mfe4Element extends HTMLElement {
  connectedCallback() {
    const reactRootElement = document.getElementsByTagName("react-root")[0];
    reactRootElement.id = "react-root-element";
    const container = document.getElementById("react-root-element");

    // Create a root.
    const root = ReactDOMClient.createRoot(container);

    // Initial render: Render an element to the root.
    root.render(<App />);
  }
}

customElements.define("react-root", Mfe4Element);
