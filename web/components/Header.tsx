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
import Link from 'next/link';
import { Locale } from '@/config/i18n.config';
import { getDictonaryUseClient } from '@/dictionaries/default-dictionary-use-client';


export default function Header({params}: {params: {lang: Locale}}) {
  const { toggleDarkTheme, toggleLightTheme} = useTheme();

  const dict = getDictonaryUseClient(params.lang)

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notIsMobile, setIsNotMobile] = useState(false);

  const langIsPtBR = params.lang === 'pt-BR';

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
              <li className='cursor-pointer'>{dict.header.about}</li>
              <li className='cursor-pointer'>{dict.header.search}</li>
              <li className='cursor-pointer'>{dict.header.documentation}</li>
            </ul>
          </div>
        </>
        )}
      </div>

      <div className="flex items-center gap-4 mr-6">
        <a className='group text-white p-4 flex items-center gap-2 text-[1.35rem] cursor-pointer rounded-full transition-all ease-in-out bg-black dark:text-zinc-50 w-auto dark:bg-zinc-700 hover:scale-110 hover:text-black hover:bg-zinc-500 dark:border-2 dark:border-white' href='https://github.com/CAIOZIn1/Prolog-Next' target='_blank'>
          <FiGithub />
        </a>

        <div className='flex items-center justify-between w-[125px] rounded-full border-2 border-black dark:border-white'>
          <button className='group text-zinc-50 p-4 flex items-center gap-2 text-[1.50rem] cursor-pointer rounded-full transition-all ease-in-out bg-black' onClick={toggleLightTheme}>
            <PiSunBold className='text-2xl'/>
          </button>

          <button className='group dark:text-zinc-50 text-black p-4 flex items-center gap-2 cursor-pointer rounded-full transition-all ease-in-out dark:bg-zinc-700' onClick={toggleDarkTheme}>
            <MdNightlight className='text-2xl'/>
          </button>
        </div>

        <Link className='group text-white p-4 flex items-center gap-2 text-[1.35rem] cursor-pointer rounded-full transition-all ease-in-out bg-black dark:text-zinc-50 w-auto dark:bg-zinc-700 hover:scale-110 hover:text-black hover:bg-zinc-500 dark:border-2 dark:border-white' href={langIsPtBR ? '/en-US' : '/pt-BR'}>
          <IoLanguage className='text-2xl' />
        </Link>
      </div>

      { !notIsMobile && (
        <>
          {isMenuOpen && (
            <div className='group text-white p-4 flex flex-col items-center gap-11 mt-2 text-[1.35rem] cursor-pointer rounded-full bg-black dark:text-zinc-50 w-auto dark:bg-zinc-700 hover:scale-110 hover:text-black hover:bg-zinc-500 dark:border-2 dark:border-white absolute right-[42px] bottom-[29px] h-[250px] min-w-[54px] transition-all ease-in-out delay-700' >
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

          <button className='group text-white p-4 flex items-center gap-2 text-[1.35rem] cursor-pointer rounded-full transition-all ease-in-out bg-black dark:text-zinc-50 w-auto dark:bg-zinc-700 hover:scale-110 hover:text-black hover:bg-zinc-500 dark:border-2 dark:border-white absolute right-10 bottom-7 border-2 ' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CgClose className='font-bold'/> : <GiHamburgerMenu />}
          </button>
        </>
      )}
    </header>
  );
}