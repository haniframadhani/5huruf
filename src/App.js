import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Show from "./components/show-result/Show";
import Tutorial from "./components/modal/Tutorial"

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["janganTampil"]);
  const [isInputEmpty, setEmptyState] = useState(true);
  const [result, setResult] = useState([]);
  const [isCookieSet, setIsCookieSet] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function checkCookie() {
    const tampil = cookies.janganTampil === 'true';
    if (tampil) {
      setIsCookieSet(true);
    } else {
      handleShow();
    }
  }

  useEffect(() => {
    checkCookie();
  }, []);

  return (
    <div className="App">
      <Navbar isInputEmpty={isInputEmpty} setEmptyState={setEmptyState} result={result} setResult={setResult} handleShow={handleShow}></Navbar>
      <Show isInputEmpty={isInputEmpty} result={result}></Show>
      <Footer></Footer>
      <Tutorial isCookieSet={isCookieSet} setIsCookieSet={setIsCookieSet} cookies={cookies} setCookie={setCookie} removeCookie={removeCookie} handleClose={handleClose} show={show} ></Tutorial>
    </div>
  );
}

export default App;
