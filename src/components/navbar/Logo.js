import React from 'react';
import { X, Search } from 'react-feather';
import LimaHuruf from './LimaHuruf';;
export default function Logo() {
  return (
    <div className="container logo-icon">
      <LimaHuruf />
      <a className="icon icon-nav"><X /></a>
      <a className="icon icon-nav tidak-tampil"><Search /></a>
    </div >
  )
}