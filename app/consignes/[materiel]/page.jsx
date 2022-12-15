"use client"
import styles from '../../../styles/consignes.css'
import Image from 'next/image'
import PapierCarton from '@/assets/images/PapierCarton/logo.png'
import PapierCartonCard1 from '@/assets/images/PapierCarton/card-1.png'
import PapierCartonCard2 from '@/assets/images/PapierCarton/card-2.png'
import RecycleCarton from '@/assets/images/PapierCarton/recycle-carton.png'
import Verre from '@/assets/images/Verre/logo.png'
import VerreCard1 from '@/assets/images/Verre/card-1.png'
import VerreCard2 from '@/assets/images/Verre/card-2.png'
import BioDechet from '@/assets/images/BioDechet/logo.png'
import BioDechetCard1 from '@/assets/images/BioDechet/card-1.png'
import forbidden from '@/assets/images/Forbidden.png'

export default function Page(props) {

    const data = [
        {
            materiel: 'PapierCarton',
            title: 'PAPIERS ET CARTONS',
            logo: PapierCarton,
            cards: [{
                image: PapierCartonCard1,
                text: 'ENVELOPPES AVEC FENÊTRE, JOURNAUX, MAGAZINES ET PAPIERS (agrafes et reliures acceptées)'
            }, {
                image: PapierCartonCard2,
                text: 'PETITS CARTONS (sacs kraft, boîtes de gâteaux)'
            }],
            forbiddenText: 'MOUCHOIRS, MASQUES ET EMBALLAGES SOUILLÉS',
            color: '#1261ab',
            recycleText: 'Comme le papier, le carton est fabriqué à partir de cellulose, une fibre de bois. En France, \n' +
                'le taux de recyclage du papier/carton est de 64%. Tous les cartons se recyclent, à l’exception \n' +
                'des cartons souillés. On peut réutiliser la matière jusqu’à huit fois, après quoi la fibre se \n' +
                'dégrade. \n' +
                'Recycler le carton permet de fabriquer de nouveaux emballages en carton, des boîtes à \n' +
                'chaussures, des boîtes d’œufs, des meubles, des objets de décoration…',
            recycleImage: RecycleCarton,
            recycleSteps: [
                'D’abord, le carton est trié à la source : étape essentielle pour assurer son recyclage. ',
                'De retour à l’entrepôt, les cartons sont conditionnés en balles.',
                'À leur arrivée en centre de recyclage, les balles de carton sont plongées dans un pulpeur qui les transforment en pâte. Les éléments indésirables sont isolés. Les bres sont séparées selon leur longueur.',
                'Ensuite, vient l’étape d’épuration, de désencrage et de cyclonage.',
                'Lorsqu’elle est propre et homogène, la pâte est étalée puis pressée pour faire une feuille, et enn séchée. Une bobine mère est ensuite réalisée. Elle peut revenir en usine de fabrication de nouveaux cartons !'
            ]
        }, {
            materiel: 'Verre',
            title: 'VERRE',
            logo: Verre,
            cards: [{
                image: VerreCard1,
                text: 'POTS EN VERRE'
            }, {
                image: VerreCard2,
                text: 'BOUTEILLES EN VERRE'
            }],
            forbiddenText: 'VAISSELLES, AMPOULES, AUTRES TYPES DE BOUTEILLES',
            color: '#71be50',
            recycleText: 'Le verre est un mélange de silice, de chaux et de soude. Entre 2008 et 2017, le recyclage du\n' +
                '                verre a permis d’éviter l’émission d’1,3 million de tonnes de C02. (ADEME) Le verre se recycle\n' +
                '                à 100% et à l’infini. A l’issue du processus de recyclage, le verre peut être réutilisé pour la\n' +
                '                fabrication de nouveaux flacons, pots, ou bouteilles.',
            recycleSteps: ['hahahahha', 'hohohohho', 'hohohohohoohoh']
        }, {
            materiel: 'BioDechet',
            title: 'DÉCHETS ALIMENTAIRES',
            logo: BioDechet,
            cards: [{
                image: BioDechetCard1,
                text: 'RESTES ALIMENTAIRES : fruits, légumes, oeufs, viandes, agrumes, sachets de thé, marc de café'
            }],
            forbiddenText: 'EMBALLAGES ALIMENTAIRES',
            color: '#884f2d',
            recycleText: 'Le verre est un mélange de silice, de chaux et de soude. Entre 2008 et 2017, le recyclage du\n' +
                '                verre a permis d’éviter l’émission d’1,3 million de tonnes de C02. (ADEME) Le verre se recycle\n' +
                '                à 100% et à l’infini. A l’issue du processus de recyclage, le verre peut être réutilisé pour la\n' +
                '                fabrication de nouveaux flacons, pots, ou bouteilles.',
            recycleSteps: ['hahahahha', 'hohohohho', 'hohohohohoohoh']
        }
    ];

    function getItem() {
        return data.find(d => d.materiel === props.params.materiel);
    }


    return <div className="consignes">
        <div id="rectangle" style={{backgroundColor: getItem().color}}>
            <div className="title-container">
                <h1 className="title text-center text-[30px] md:text-[70px] lg:text-[100px] mt-[20px] md:my-[40px] font-bold">{getItem().title}</h1>
            </div>
            <div id="circle" className="hidden md:block" style={{backgroundColor: getItem().color}}></div>
            <Image id="logo" src={getItem().logo} width="150" height="150"/>
        </div>
        <div
            className="section-1 flex flex-col xl:flex-row gap-10 place-content-around mt-[380px] md:mt-[550px] mb-[100px]">
            {getItem().cards.map((card, key) => (
                <div className="flex-1 flex justify-center" key={key}>
                    <div className="rounded-lg max-w-sm flex flex-col justify-between">
                        <Image className="rounded-t-lg" src={card.image} width="100 %"/>
                        <div className="p-6">
                            <h5 className="text-center text-2xl mb-2 font-bold"
                                style={{color: getItem().color}}>{card.text}</h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="section-2 border-8 rounded-md mx-20 md:mx-52"
             style={{borderColor: getItem().color, color: getItem().color}}>
            <div className='col-sm-4 landing-section2-pillar'>
                <div>
                    <div className='landing-icon'>
                        <Image id="forbidden" src={forbidden} width="100" height="100"/>
                    </div>
                    <h1 className="text-center my-10 text-[30px] sm:text-[60px] font-bold underline decoration-[10px]">INTERDITS</h1>
                    <p className="text-center font-bold text-[15px] sm:text-[30px]">
                        {getItem().forbiddenText}
                    </p>
                </div>
            </div>
        </div>

        <div className="section-3 mx-20 md:mx-52 mb-16">
            <h1 className="text-center my-5 text-[30px] sm:text-[60px] font-bold underline decoration-[10px]"
                style={{color: getItem().color}}>LE RECYCLAGE</h1>
            <p className="text-[20px] text-white p-10 rounded" style={{backgroundColor: getItem().color}}>
                {getItem().recycleText}
            </p>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto flex flex-col p-6">
                    <div className="divide-y divide-gray-700">


                        {getItem().recycleSteps.map((step, key) => (
                            <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0"
                                 key={key}>
                                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                                    <span className="text-[50px]">{key + 1}</span>
                                </div>
                                <div
                                    className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                                    <span className="mt-4 dark:text-gray-300">{step}</span>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </section>
            <Image src={getItem().recycleImage}/>
        </div>
    </div>;
}
