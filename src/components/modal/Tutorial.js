import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function Tutorial({ cookies, setCookie, removeCookie, isCookieSet, setIsCookieSet, handleClose, show }) {
  const handleSetCookie = e => {
    if (e.target.checked) {
      setCookie("janganTampil", true, { path: '/' });
      setIsCookieSet(true);
    } else {
      removeCookie("janganTampil");
      setIsCookieSet(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="xl">
      <Modal.Header className="justify-content-center">
        <Modal.Title>cara penggunaan</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 className="text-center">contoh kata : </h5>
        <div className="kotak-kata mb-2">
          <div className="kotak-huruf benar">c</div>
          <div className="kotak-huruf kurang-tepat">e</div>
          <div className="kotak-huruf tidak-ada">r</div>
          <div className="kotak-huruf kurang-tepat">a</div>
          <div className="kotak-huruf tidak-ada">h</div>
        </div>
        <p>semua huruf yang berada dalam kotak abu-abu dimasukkan ke kolom tidak termasuk huruf.</p>
        <img src={require("../../assets/img/tidak-termasuk.webp")} className="img-fluid mb-1" alt="kolom pencarian huruf yang tidak terdapat dalam kata"></img>
        <p>semua huruf yang berada dalam kotak kuning dimasukkan ke kolom termasuk huruf.</p>
        <img src={require("../../assets/img/termasuk.webp")} className="img-fluid mb-1" alt="kolom pencarian huruf yang terdapat dalam kata"></img>
        <p>semua huruf yang berada dalam kotak hijau dimasukkan ke kolom termasuk huruf dan kotak yang berisi angka
          dipojok atas kirinya sesuai dengan posisi huruf yang benar.</p>
        <img src={require("../../assets/img/spesifik.webp")} className="img-fluid mb-1" alt="kolom pencarian huruf yang terdapat dalam kata dengan posisi tertentu"></img>
        <p>kemudian klik tombol cari!</p>
        <img src={require("../../assets/img/cari.webp")} className="img-fluid mb-1" alt="tombol cari"></img>
        <Modal.Footer className="justify-content-center action-group">
          <Button variant="secondary" className="btn btn-secondary tutup" onClick={handleClose}>tutup</Button>
          <div className="jangan-tampil">
            <input type="checkbox" name="remember" id="remember" onChange={handleSetCookie} checked={isCookieSet}></input>
            <label htmlFor="remember">jangan tampilkan lagi</label>
          </div>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  )
}