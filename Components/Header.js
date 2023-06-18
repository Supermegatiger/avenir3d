import { Unbounded } from 'next/font/google';
import logo from '@/app/img/logo.png';
import Image from 'next/image';

const unbounded = Unbounded({ subsets: ['latin'] })

export default function Header() {
    return <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between ps-10 lg:px-10 mb-10 lg:mb-0">
        <div className="flex items-center space-x-4 my-6 font-thin">
            <Image src={logo} width={64} height={64}/>
            <div className={unbounded.className}>Your Vision</div>
        </div>
        <a href="/" className="hover:text-[#B5B5B5] transition-all">{"<"} На главную</a>
    </div>
}