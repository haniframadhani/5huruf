import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Show from "./components/show-result/Show";
import Tutorial from "./components/modal/Tutorial"
import { Helmet } from "react-helmet";
import ThumbnailPng from "./assets/img/Thumbnail.png";
// import ThumbnailWebp from "./assets/img/Thumbnail.webp";

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
      <Helmet>
        <title>5Huruf</title>
        <meta name="description" content="5huruf merupakan website untuk mencari kata yang hanya memiliki 5 huruf untuk membantu bermain katla(wordle versi bahasa Indonesia)." />

        <meta property="og:url" content="https://5huruf.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="5Huruf" />
        <meta property="og:description" content="5huruf merupakan website untuk mencari kata yang hanya memiliki 5 huruf untuk membantu bermain katla(wordle versi bahasa Indonesia)." />
        <meta property="og:image" content={ThumbnailPng} />
        {/* <meta property="og:image" content={ThumbnailWebp} /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="5huruf.netlify.app" />
        <meta property="twitter:url" content="https://5huruf.netlify.app/" />
        <meta name="twitter:title" content="5Huruf" />
        <meta name="twitter:description" content="5huruf merupakan website untuk mencari kata yang hanya memiliki 5 huruf untuk membantu bermain katla(wordle versi bahasa Indonesia)." />
        <meta name="twitter:image" content={ThumbnailPng} />
        {/* <meta name="twitter:image" content={ThumbnailWebp} /> */}
      </Helmet>
      <Navbar isInputEmpty={isInputEmpty} setEmptyState={setEmptyState} result={result} setResult={setResult} handleShow={handleShow}></Navbar>
      <Show isInputEmpty={isInputEmpty} result={result}></Show>
      <Footer></Footer>
      <Tutorial isCookieSet={isCookieSet} setIsCookieSet={setIsCookieSet} cookies={cookies} setCookie={setCookie} removeCookie={removeCookie} handleClose={handleClose} show={show} ></Tutorial>
    </div>
  );
}

export default App;
