import JanganTampil from "./JanganTampil";

export default function ModalFooter() {
  return (
    <div className="modal-footer justify-content-center action-group">
      <button type="button" className="btn btn-secondary tutup" data-bs-dismiss="modal">tutup</button>
      <JanganTampil></JanganTampil>
    </div>
  )
}