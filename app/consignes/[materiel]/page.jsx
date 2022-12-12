import styles from '../../../styles/consignes.css'
import Image from 'next/image'
import logo from '@/assets/images/Verre.png'
export default function Page({}) {
    return <div className="consignes">
        <div id="rectangle">
            <div className="title-container">
                <h1 className="title text-center">HAHA</h1>
            </div>
            <div id="circle"></div>
            <Image id="logo" src={logo} width="150" height="150"/>
        </div>
        <div className="section-1">
            {/*<Image src={logo}/>*/}
        </div>

    </div>;
}
