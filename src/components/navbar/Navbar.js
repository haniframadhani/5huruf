import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <nav className="navbar fixed-top mobile-nav">
      <Logo></Logo>
      <SearchBar></SearchBar>
    </nav>
  )
}