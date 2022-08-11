import { createPortal } from "react-dom";
import '../../css/style.css'
export default function Modal({ cookies, setCookie, removeCookie, isCookieSet, setIsCookieSet }) {
  const handleSetCookie = e => {
    if (e.target.checked) {
      setCookie("janganTampil", true, { path: '/' });
      setIsCookieSet(true);
    } else {
      removeCookie("janganTampil");
      setIsCookieSet(false);
    }
  };
  return createPortal(
    <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable modal-xl">
        <div className="modal-content">
          <div className="modal-header justify-content-center">
            <h4 className="modal-title text-center mb-2" id="modalLabel">cara penggunaan</h4>
          </div>
          <div className="modal-body">
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
            <div className="modal-footer justify-content-center action-group">
              <button type="button" className="btn btn-secondary tutup" data-bs-dismiss="modal">tutup</button>
              <div className="jangan-tampil">
                <input type="checkbox" name="remember" id="remember" onChange={handleSetCookie} checked={isCookieSet}></input>
                <label htmlFor="remember">jangan tampilkan lagi</label>
              </div>
            </div>
          </div >
        </div>
      </div>
    </div>, document.getElementById('popup')
  )
}