import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";
import Navbar from "./components/navbar/Navbar";
import Show from "./components/show-result/Show";

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Show></Show>
      <Footer></Footer>
      <Modal></Modal>
    </div>
  );
}

export default App;
