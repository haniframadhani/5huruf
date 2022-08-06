import { GitHub, Instagram, Globe } from 'react-feather';
export default function Footer() {
  return (
    <footer>
      <div className="container py-3">
        <ul className="sosial-media justify-content-center m-0">
          <li><a href="https://github.com/haniframadhani/5huruf" className='icon mx-1'><GitHub /></a>
          </li>
          <li><a href="https://www.instagram.com/haniframadhani_design/" className='icon mx-1'><Instagram /></a></li>
          <li><a href="https://haniframadhani.github.io/" className='icon mx-1'><Globe /></a></li>
        </ul>
        <p className="text-center mb-0 footer">copyright&copy; 2022 Hanif Ramadhani. All Right Reversed.</p>
      </div>
    </footer>
  )
}