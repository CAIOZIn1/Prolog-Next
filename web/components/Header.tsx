import logo from '@/public/icon.svg'
import Image from 'next/image'
import { FiGithub } from "react-icons/fi";
import { MdNightlight } from "react-icons/md";
import { PiSunBold } from "react-icons/pi";


export default function Header() {
  return (
    <header className="w-full h-20 flex">
      <div className="w-1/2 flex items-center justify-evenly">
        <Image
          src={logo}
          alt='Logotipo image'
          className='h-14 w-14'
        />

        <div className='w-2/4'>
          <ul className='flex justify-around items-center font-extrabold uppercase'>
            <li className='cursor-pointer'>Sobre</li>
            <li className='cursor-pointer'>Pesquisar</li>
            <li className='cursor-pointer'>Documentação</li>
          </ul>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <a className='group text-white p-4 flex items-center gap-2 text-[1.35rem] cursor-pointer rounded-full transition-all ease-in-out bg-black ' href='https://github.com/CAIOZIn1/Prolog-Next' target='_blank'>
          <FiGithub />
        </a>

        <div className='flex items-center justify-between w-1/6 rounded-full border-2 border-black'>
          <button className='group text-white p-4 flex items-center gap-2 text-[1.35rem] cursor-pointer rounded-full transition-all ease-in-out bg-black'>
            <MdNightlight />
          </button>

          <button className='group text-black p-4 flex items-center gap-2 text-1xl cursor-pointer rounded-full transition-all ease-in-out'>
            <PiSunBold />
          </button>
        </div>
      </div>
    </header>
  )
}
