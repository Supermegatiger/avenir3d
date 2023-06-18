import Header from "@/Components/Header";
import '../main.css';
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../../Components/Map'), {
    ssr: false,
})

export default function Page() {
    return <div className='h-full'>
        <Header/>

        <div className="h-[800px] flex">
            <div className="h-full bg-[#353535] w-[500px]">

            </div>
            <Map/>
        </div>
        
    </div>;
}