import KotakKata from "./KotakKara";
import ModalFooter from "./ModalFooter";

export default function ModalBody() {
  return (
    <div className="modal-body">
      <h5 className="text-center">contoh kata : </h5>
      <KotakKata />
      <p>semua huruf yang berada dalam kotak abu-abu dimasukkan ke kolom tidak termasuk huruf.</p>
      <img src={require("../../assets/img/tidak-termasuk.webp")} className="img-fluid mb-1" alt="kolom pencarian huruf yang tidak terdapat dalam kata"></img>
      <p>semua huruf yang berada dalam kotak kuning dimasukkan ke kolom termasuk huruf.</p>
      <img src={require("../../assets/img/termasuk.webp")} className="img-fluid mb-1" alt="kolom pencarian huruf yang terdapat dalam kata"></img>
      <p>semua huruf yang berada dalam kotak hijau dimasukkan ke kolom termasuk huruf dan kotak yang berisi angka
        dipojok atas kirinya sesuai dengan posisi huruf yang benar.</p>
      <img src={require("../../assets/img/spesifik.webp")} className="img-fluid mb-1" alt="kolom pencarian huruf yang terdapat dalam kata dengan posisi tertentu"></img>
      <p>kemudian klik tombol cari!</p>
      <img src={require("../../assets/img/cari.webp")} className="img-fluid mb-1" alt="tombol cari"></img>
      <ModalFooter></ModalFooter>
    </div >
  )
}