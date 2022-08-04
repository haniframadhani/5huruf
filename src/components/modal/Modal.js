import { createPortal } from "react-dom";
import React, { useState } from "react";
import '../../css/style.css'
import ModalDialog from "./ModalDialog";
export default function Modal({ isOpened }) {
  return createPortal(
    <div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
      <ModalDialog></ModalDialog>
    </div>, document.getElementById('popup')
  )
}