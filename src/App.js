import React, { useState } from "react";
import { useCookies } from "react-cookie";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";
import Navbar from "./components/navbar/Navbar";
import Show from "./components/show-result/Show";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["janganTampil"]);
  const [isInputEmpty, setEmptyState] = useState(true);
  const [result, setResult] = useState([]);
  const [isCookieSet, setIsCookieSet] = useState(false);

  function checkCookie() {
    let tampil = cookies.janganTampil === 'true';
    if (tampil) {
      setIsCookieSet(true);
    }
  }

  return (
    <div onLoad={checkCookie} className="App">
      <Navbar isInputEmpty={isInputEmpty} setEmptyState={setEmptyState} result={result} setResult={setResult}></Navbar>
      <Show isInputEmpty={isInputEmpty} result={result}></Show>
      <Footer></Footer>
      <Modal isCookieSet={isCookieSet} setIsCookieSet={setIsCookieSet} cookies={cookies} setCookie={setCookie} removeCookie={removeCookie} ></Modal>
    </div>
  );
}

export default App;
