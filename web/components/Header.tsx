'use client'

import logo from '@/public/icon.svg'
import Image from 'next/image'
import { FiGithub } from "react-icons/fi";
import { MdNightlight } from "react-icons/md";
import { PiSunBold } from "react-icons/pi";
import { IoLanguage, IoDocumentAttachOutline } from "react-icons/io5";
import { MdOutlineSearch } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { BsInfoLg } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { useTheme } from '@/context/theme-context';


export default function Header() {
  const { theme, toggleTheme} = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notIsMobile, setIsNotMobile] = useState(false);

  const isDarkMode = theme === 'dark';

  useEffect(() => {
    const handleResize = () => {
      setIsNotMobile(window.innerWidth > 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={`w-full h-20 flex ${notIsMobile ? 'justify-between' : 'justify-center'} items-center p-4`}>
      <div className="flex items-center ml-6">
      {notIsMobile && (
        <>
          <Image
            src={logo}
            alt='Logotipo'
            className='h-14 w-14'
          />

          <div className='ml-4'>
            <ul className='flex justify-center items-center font-extrabold uppercase gap-7'>
              <li className='cursor-pointer'>Sobre</li>
              <li className='cursor-pointer'>Pesquisar</li>
              <li className='cursor-pointer'>Documentação</li>
            </ul>
          </div>
        </>
        )}
      </div>

      <div className="flex items-center gap-4">
        <a className='group text-white p-4 flex items-center gap-2 text-[1.35rem] cursor-pointer rounded-full transition-all ease-in-out bg-black w-auto' href='https://github.com/CAIOZIn1/Prolog-Next' target='_blank'>
          <FiGithub />
        </a>
        <div className='flex items-center justify-between w-[125px] rounded-full border-2 border-black'>
          <button className={`group ${!isDarkMode ? 'text-white' : 'text-black'} p-4 flex items-center gap-2 text-[1.50rem] cursor-pointer rounded-full transition-all ease-in-out ${!isDarkMode ? 'bg-black' : ''}`} >
            <PiSunBold className='text-2xl'/>
          </button>
          <button className={`group ${isDarkMode ? 'text-white' : 'text-black'} p-4 flex items-center gap-2 cursor-pointer rounded-full transition-all ease-in-out ${isDarkMode ? 'bg-black' : ''}`}>
            <MdNightlight className='text-2xl'/>
          </button>
        </div>
        <button className='group text-white p-4 flex items-center gap-2 text-[1.35rem] cursor-pointer rounded-full transition-all ease-in-out bg-black'>
          <IoLanguage className='text-2xl' />
        </button>
        {notIsMobile && (
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-white p-4'>
            <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        )}
      </div>

      { !notIsMobile && (
        <>
          {isMenuOpen && (
            <div className='group text-white p-4 flex items-center flex-col gap-11 text-[1.35rem] cursor-pointer rounded-full bg-black absolute right-[42px] bottom-[29px] h-[250px] min-w-[54px] transition-all ease-in-out delay-700' >
              <button className='mt-1'>
                <BsInfoLg />
              </button>

              <button>
                <MdOutlineSearch />
              </button>

              <button>
                <IoDocumentAttachOutline />
              </button>
            </div>
          )}

          <button className='group text-white p-4 flex items-center gap-2 text-[1.35rem] cursor-pointer rounded-full transition-all ease-in-out bg-black absolute right-10 bottom-7 border-2 border-zinc-50' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CgClose className='font-bold'/> : <GiHamburgerMenu />}
          </button>
        </>
      )}
    </header>
  );
}
