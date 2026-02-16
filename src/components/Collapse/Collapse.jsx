import { useState } from 'react';
import arrowUp from '../../assets/images/arrow-up.png'
import arrowDown from '../../assets/images/arrow-down.png'
import './Collapse.css'

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                <img src={isOpen ? arrowDown : arrowUp} alt="arrows" className="collapse-arrow" />
            </div>
            {isOpen && <div className="collapse-content">{content}</div>}
        </div>
    )
}

export default Collapse;