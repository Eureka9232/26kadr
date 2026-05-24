import Image from "next/image";
import Link from 'next/link';
import Header from '@/components/layout/header'
import arrow from '@/public/arrov-purple.svg'
import Card from "@/components/ui/card";
import razor1 from '@/public/razor1.svg'
import razor2 from '@/public/razor2.svg'
import Partpoekt from '@/public/Partproekt.svg'
import logo from '@/public/Logo (2).svg'
import GreenArrow from '@/public/GreenArrow.svg'
export default function Home() {
  return (
    
      <div className="flex flex-col text-center w-full">
      <Header/>
      <div className="bg-black pt-[200px] min-h-screen w-full ">
        <div>
          <h1 className="font-medium text-7xl text-white pb-[20px]">ПАРТНЕРСКИЕ ПРОЕКТЫ 26 КАДР</h1>
          <p className="text-white pb-[40px]">Практико-ориентированное обучение,<br /> подготовка специалистов и совместные<br /> проекты с индустрией</p>
    <div className="flex justify-center items-center">
    <button className="group flex items-center bg-white text-black pl-8   rounded-full font-medium">
      <span className="text-base select-none mr-4">
        Смотреть кейсы
      </span>
      <div className="flex items-center justify-center bg-[#7FFF00] w-12 h-12 rounded-full ">
        <svg 
          className="w-5 h-5 text-black" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
    </button>
    </div>
      </div>
      <div>
        <Image 
            src={razor1}
            width={3000}
            height={86}
            alt="26kadr"
            className="w-full block"
        />
      </div>
      {/* главный див для сетки с отстп */}
    <div className=" px-[64px] py-[128px] bg-white gap-[24px] flex flex-col items-center justify-center">
      <div>
        <p className=" text-3xl font-bold text-start">ПРОЕКТЫ</p>
      </div>
      {/* сетка грид */}
    <div className="grid grid-cols-3 mt-[36px] gap-5">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    
    </div>
    {/* станьте партнереом */}
    <div className="px-[64px] py-[128px]  bg-white flex flex-row justify-between">
      {/* текст */}
      <div className="flex flex-col w-[568px] h-[148px]">
        <p className="pb-[20px] text-3xl text-start font-bold">СТАНЬТЕ ПАРТНЁРОМ 26 КАДР</p>
        <p className="text-start">Обсудим совместные проекты,<br />подготовку специалистов и форматы <br /> сотрудничества для вашего бизнеса</p>
      </div>
      {/* дивы кнопки - инф */}
      <div className="flex flex-col w-[568px] h-[299px]">
      {/* три контейнера */}
      <div className="w-full h-[53px] bg-[#F2F2F2] mb-[16px] flex items-center justify-start px-[32px] rounded-lg">
        <p className="text-[#6C6C6C]">ФИО</p>
      </div>
      <div className="w-full h-[53px] bg-[#F2F2F2] mb-[16px] flex items-center justify-start px-[32px] rounded-lg">
        <p className="text-[#6C6C6C]">ФИО</p>
      </div>
      <div className="w-full h-[53px] bg-[#F2F2F2] mb-[16px] flex items-center justify-start px-[32px] rounded-lg">
        <p className="text-[#6C6C6C]">ФИО</p>
      </div>
      <div className="w-full h-[53px] bg-[#7FF70C] mb-[16px] flex items-center justify-center rounded-lg">
        <p className="font-bold">Отправить</p>
      </div>
      {/* галочка + текст */}
      <div  className="flex flex-row">
        <div className="bg-white w-[24px] h-[24px] rounded-lg border border-zinc-400 mr-[8px]"></div>
        <p>Согласен на обработку</p> <p className="ml-[5px] text-[#8302FD] underline">персональных данных</p>
      </div>
      </div>
      
      
    </div>
    <div>
        <Image 
            src={razor2}
            width={3000}
            height={86}
            alt="26kadr"
            className="w-full block"
        />
      </div>
      {/* футтер */}
      <footer>
        {/* тело футтера */}
        <div className="bg-black px-[128px] py-[128px] flex justify-between">
          {/* текст и лого */}
          <div>
          <div className="mb-6">
          <Image
            src={logo}
            width={64}
            height={43}
            alt="26kadr"
        />
          </div>
          <p className="text-white text-start">ГБПОУ «26 КАДР» — крупнейший колледж Москвы, объединяющий<br /> четырнадцать подразделений в сфере архитектуры, дизайна, строительства, IT,<br /> логистики, реставрации и химических технологий.</p>

        </div>
        {/* часть справа */}
        <div className="flex flex-row gap-[48px]">
        {/* текст 1 */}
        <div className="flex flex-col">
          <p className="text-start mb-[16px] text-white">Навиuация</p>
          <p className="text-start mb-[16px] text-white">О проекте</p>
          <p className="text-start mb-[16px] text-white">Кейсы</p>
          <p className="text-start text-white">Контакты</p>
        </div>
        {/* текст 2 */}
        <div className="flex flex-col">
          <p className="text-start mb-[16px] text-white">Контакты</p>
          <p className="text-start mb-[16px] text-white">www.26kadr.ru</p>
          <p className="text-start mb-[16px] text-white">+7 (964) 706-49-88</p>
          <p className="text-start text-white">samarskayaaa@26kadr.ru</p>
        </div>
        </div>
        </div>
      </footer>
      </div>
      
    </div>  
  );
}
