import Image from "next/image";
import Link from 'next/link';
import arrow from '@/public/arrov-purple.svg'
export default function Card () {
    return(
        //тело карточки
        <div className="flex flex-col w-[384px] h-[272px] px-[32px] py-[24] bg-[#8302FD] rounded-2xl gap-7">
            <div className="flex justify-between items-start">
            <h1 className="text-2xl text-white text-start">Отраслевые<br /> корпоративные<br /> чемпионаты</h1>
            <Image 
            src={arrow}
            width={48}
            height={48}
            alt="26kadr"
        />

            </div>
            <div>
                <p className="text-white text-start">Оценка квалификации сотрудников,<br /> актуализация <br /> механизмов кадрового обеспечения <br /> предприятия</p>
            </div>


        </div>



    )
}