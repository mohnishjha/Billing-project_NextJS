import React from 'react';
import Image from 'next/image';
import './Navbar.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav className="mobileNav flex justify-between">
        
        <button>
        <Link href='/'>
        <Image src="./Assets/icons/logo.svg" alt="logo" width={72} height={72} priority style={{ width: '72px', height: '72px' }}/>
        </Link>
        </button>

      <div className='flex justify-between rightNavDiv items-center'>
        <button>
          <Image src="./Assets/icons/darkMode.svg" alt='darkmode' height={19} width={19} style={{ width: '19px', height: '19px'}}/>
          </button>
          
        <div className='rectNoAngle'></div>

        <button>
        <Image src="./Assets/icons/profilepic.svg" height={32} width={32} alt='profile pic' style={{ width: '32px', height: '32px' }} className='mr-6'/>
        </button>
      </div>
      </nav>
    </div>
  )
};

export default Navbar;