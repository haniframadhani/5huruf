import { X, Search, HelpCircle } from 'react-feather';
import LimaHuruf from './LimaHuruf';
import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {

  // input spesifik
  const inputSpesifikPertama = useRef();
  const [spesifikPertama, setSpesifikPertama] = useState('');
  useEffect(() => {
    if (spesifikPertama.length === 1)
      inputSpesifikKedua.current.focus();
  }, [spesifikPertama.length]);
  const onChangeSpesifikPertama = (e) => {
    setSpesifikPertama(e.target.value.toLowerCase());
  }

  const [spesifikKedua, setSpesifikKedua] = useState('');
  const inputSpesifikKedua = useRef();
  useEffect(() => {
    if (spesifikKedua.length === 1)
      inputSpesifikKetiga.current.focus();
  }, [spesifikKedua.length]);
  const onChangeSpesifikKedua = (e) => {
    setSpesifikKedua(e.target.value.toLowerCase());
  }

  const [spesifikKetiga, setSpesifikKetiga] = useState('');
  const inputSpesifikKetiga = useRef();
  useEffect(() => {
    if (spesifikKetiga.length === 1)
      inputSpesifikKeempat.current.focus();
  }, [spesifikKetiga.length]);
  const onChangeSpesifikKetiga = (e) => {
    setSpesifikKetiga(e.target.value.toLowerCase());
  }

  const [spesifikKeempat, setSpesifikKeempat] = useState('');
  const inputSpesifikKeempat = useRef();
  useEffect(() => {
    if (spesifikKeempat.length === 1)
      inputSpesifikKelima.current.focus();
  }, [spesifikKeempat.length]);
  const onChangeSpesifikKeempat = (e) => {
    setSpesifikKeempat(e.target.value.toLowerCase());
  }

  const [spesifikKelima, setSpesifikKelima] = useState('');
  const inputSpesifikKelima = useRef();
  const onChangeSpesifikKelima = (e) => {
    setSpesifikKelima(e.target.value.toLowerCase());
  }

  // input tidak spesifik termasuk
  const [termasuk, setTermasuk] = useState('');
  const inputTermasuk = useRef();
  const onChangeTermasuk = (e) => {
    setTermasuk(e.target.value.toLowerCase());
  }

  // input tidak spesifik tidak termasuk
  const [tidakTermasuk, setTidakTermasuk] = useState('');
  const inputTidakTermasuk = useRef();
  const onChangeTidakTermasuk = (e) => {
    setTidakTermasuk(e.target.value.toLowerCase());
  }

  // change icon ketika diklik
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  }

  // tutup search

  return (
    <nav className="navbar fixed-top mobile-nav">
      <div className="container logo-icon">
        <LimaHuruf />
        <a className="icon icon-nav" onClick={handleToggle} >{isSearchOpen ? <Search /> : <X />}</a>
      </div >
      <div className={`search-bar my-5 text-center ${isSearchOpen ? 'tutup-search' : ''}`} >
        <div className="container">
          <div className="input-search">
            <form>
              <div className="input-spesifik">
                <ul className="input-spesifik-item justify-content-between">
                  <li>
                    <input ref={inputSpesifikPertama} onChange={onChangeSpesifikPertama} type="text" autoComplete="off" className="text-center" id="pertama" maxLength={1} value={spesifikPertama}></input><br />
                    <p className="posisi">1</p>
                  </li>
                  <li>
                    <input ref={inputSpesifikKedua} onChange={onChangeSpesifikKedua} type="text" autoComplete="off" className="text-center" id="kedua" maxLength={1} value={spesifikKedua}></input><br />
                    <p className="posisi">2</p>
                  </li>
                  <li>
                    <input ref={inputSpesifikKetiga} onChange={onChangeSpesifikKetiga} type="text" autoComplete="off" className="text-center" id="ketiga" maxLength={1} value={spesifikKetiga}></input><br />
                    <p className="posisi">3</p>
                  </li>
                  <li>
                    <input ref={inputSpesifikKeempat} onChange={onChangeSpesifikKeempat} type="text" autoComplete="off" className="text-center" id="keempat" maxLength={1} value={spesifikKeempat}></input><br />
                    <p className="posisi">4</p>
                  </li>
                  <li>
                    <input ref={inputSpesifikKelima} onChange={onChangeSpesifikKelima} type="text" autoComplete="off" className="text-center" id="kelima" maxLength={1} value={spesifikKelima}></input><br />
                    <p className="posisi">5</p>
                  </li>
                </ul>
              </div>
            </form>
            <div className="input-tidak-spesifik text-start">
              <div className="input-tidak-spesifik input-termasuk my-3">
                <form>
                  <label htmlFor="termasuk" className="label-input-tidak-spesifik">termasuk huruf :</label><br />
                  <input ref={inputTermasuk} onChange={onChangeTermasuk} type="text" autoComplete="off" id="termasuk" name="termasuk" placeholder="a, j, y" value={termasuk}></input><br />
                </form>
              </div>
              <div className="input-tidak-termasuk my-3">
                <form>
                  <label htmlFor="tidakTermasuk" className="label-input-tidak-spesifik">tidak termasuk huruf  :</label><br />
                  <input ref={inputTidakTermasuk} onChange={onChangeTidakTermasuk} type="text" autoComplete="off" id="tidak-termasuk" name="tidakTermasuk" placeholder="d, k, t" value={tidakTermasuk}></input><br />
                </form>
              </div>
              <div className="form-text mt-0 mb-4">pisahkan dengan koma</div>
            </div>
          </div>
          <button type="button" onClick={handleToggle} className="btn btn-cari">cari!</button>
          <div className="info text-start">
            <a className="tutorial"><HelpCircle /></a>
          </div>
        </div>
      </div>
    </nav >
  )
}