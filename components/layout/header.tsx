import Image from "next/image";
import Link from 'next/link';
import Partpoekt from '@/public/Partproekt.svg'
import iarrow from '@/public/arrov-purple.svg'
export default function Home() {
  return (
    <div>
      <header className="bg-black flex gap-5  w-full h-[83px] items-center justify-between p-6">
        <Image
            src={Partpoekt}
            width={303}
            height={36}
            alt="26kadr"
        />
        <Link href="" className="w-[131px] h-[51px] bg-white flex items-center justify-center rounded-full font-semibold">Связаться</Link>
    </header>
    </div>
  );
}