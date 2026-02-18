import './Card.css';
import { useNavigate } from 'react-router-dom';

function Card({ title, cover, id }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/housing/${id}`);
    }

    return (
        <div className="card" onClick={handleClick}>
            <img src={cover} alt={title} className="card-img" />
            <h3 className="card-title">{title}</h3>
        </div>
    );
}

export default Card;