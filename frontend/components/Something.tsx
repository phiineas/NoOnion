import { IconType } from 'react-icons';
import { FaHands } from 'react-icons/fa';
import { PiCertificateThin } from "react-icons/pi";
import { MdQuiz } from "react-icons/md";
import { SiContentful } from "react-icons/si";

interface CardProps {
  icon: IconType;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon: Icon }) => (
    <div className="p-4 border rounded shadow-lg space-y-2 bg-white transition-transform duration-500 hover:scale-105">
      <div className="text-3xl text-center">
        <Icon className="text-rosered" />
      </div>
      <h2 className="text-xl font-bold text-center text-gray-700">{title}</h2>
      <p className="text-center text-gray-500">{description}</p>
    </div>
);

export default function Something() {
  const cards = [
    { icon: FaHands, title: 'Learning focused on your goals', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam quis urna eget enim volutpat maximus. Nunc maximus nunc arcu' },
    { icon: PiCertificateThin, title: 'Certification Prep', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam quis urna eget enim volutpat maximus. Nunc maximus nunc arcu' },
    { icon: MdQuiz, title: 'Analytics', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam quis urna eget enim volutpat maximus. Nunc maximus nunc arcu' },
    { icon: SiContentful, title: 'Customizable Content', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nam quis urna eget enim volutpat maximus. Nunc maximus nunc arcu' },
  ]

  return (
    <div className="flex space-x-4">
      {cards.map((card, index) => (
        <div key={index} className="flex-1">
          <Card icon={card.icon} title={card.title} description={card.description} />
        </div>
      ))}
    </div>
  )
}