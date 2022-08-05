import Modal from "./components/modal/Modal";
import Navbar from "./components/navbar/Navbar";
import Show from "./components/show-result/Show";
import React, { useEffect, useRef, useState } from "react";

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Show></Show>
      <Modal></Modal>
    </div>
  );
}

export default App;
