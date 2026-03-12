import { useState } from 'react';
import arrowUp from '../../assets/images/arrow-up.png'
import './Collapse.css'

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                <img
                    src={arrowUp}
                    alt="toggle arrow"
                    className={`collapse-arrow ${isOpen ? 'rotate' : ''}`}
                />
            </div>
            <div className={`collapse-content-wrapper ${isOpen ? 'open' : ''}`}>
                <div className="collapse-content">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Collapse;