import Image from 'next/image'
import Link from 'next/link'
import megaphone from '/public/mascote/megaphone.png';


const astucesBureau = [
  {
    salle: "bureau",
    astuce: "25% des documents sont jetés 5 minutes après leur impréssion ! Pour limiter le gaspillage, pensez à limiter le nombre d’imprimantes et à bien les paramétrer pour qu'elles impriment en recto-verso par défaut. Installer des bac à brouillons pour récupérer les impréssions et pensez à utiliser du papier recyclé !"
  },
  {
    salle: "cuisine",
    astuce: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At veniam fugit labore! Doloribus, reiciendis! Aut consequatur iusto in aperiam error sapiente, sit, cupiditate odio nemo incidunt illum eos recusandae consequuntur?"
  },
  {
    salle: "cafetaria",
    astuce: "osjogijipgs pofjsjd!"
  },
]


const Popup = ({ onClose, position }) => {
  return (
    <div className="tooltip bg-white rounded-lg w-[250px] h-[300px]">
      <div className='text-right pr-1'>
        <button className="text-[32px] inline-block text-right">
          X
        </button>
      </div>
      <div className="container w-full p-2 pb-1 flex flex-col justify-center">
        <div className="flex relative">
          <Image
            src={megaphone}
            width={30.65}
            height={43.93}
            alt="megaphone.svg"
          />
          <h1>Le saviez-vous</h1>
        </div>
        <div className="h-[150px] max-6-lines">
          25% des documents sont jetés 5 minutes après leur impréssion ! Pour
          limiter le gaspillage, pensez à limiter le nombre d’imprimantes et à
          bien les paramétrer pour qu'elles impriment en recto-verso par défaut.
          Installer des bac à brouillons pour récupérer les impréssions et
          pensez à utiliser du papier recyclé !
        </div>
        <div className="text-right">
          <Link className="underline text-secondary-light" href={"#"}>
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Popup