import React from "react";
// import ReactDOM from 'react-dom';
import "./i18n";
import './index.css';
import App from './App';
// import { createRoot } from "react-dom";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
