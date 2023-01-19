import Link from 'next/link';
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
const Navbar = () => {
  return (
    <nav>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <p className='nav-title' href='/'><b>Vu&apos; Profile</b></p>
      </Link>
        <div className='nav-items'>
            <a href="https://github.com/vudiep411" target='_blank' rel="noreferrer"><AiFillGithub size='2.5rem' color='white'/></a>
            <a href="#"><AiFillInstagram size='2.5rem' color='white'/></a>
            <a href="https://www.linkedin.com/in/vu-diep-b91157206/" target='_blank' rel="noreferrer"><AiFillLinkedin size='2.5rem' color='white'/></a>
        </div>
    </nav>
  )
}

export default Navbar