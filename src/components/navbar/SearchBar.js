import { HelpCircle } from 'react-feather';
import InputSearch from './InputSearch';
export default function SearchBar() {
  return (
    <div className="search-bar my-5 text-center">
      <div className="container">
        <InputSearch></InputSearch>
        <button type="button" className="btn btn-cari">cari!</button>
        <div className="info text-start">
          <a className="tutorial"><HelpCircle /></a>
        </div>
      </div>
    </div>
  )
}