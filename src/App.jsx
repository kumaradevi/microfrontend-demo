import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import Joke from "jokeInHost/Joke";
// import Weather from "WeatherAppInHost/Weather";
const Joke=lazy(()=>import ("jokeInHost/Joke"));
const WeatherApp=lazy(()=>import ("weatherInHost/WeatherApp"))
const App = () => (
  <div >
    <Header/>
  <div className="content">
  <Suspense fallback={<p>loading...</p>}><Joke/></Suspense>

   
<Suspense fallback={<p>loading...</p>}><WeatherApp/></Suspense>
  </div>
  <Footer/>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)