import { useState } from 'react'
import './Carousel.css'
import leftArrow from '../../assets/images/arrow-left.png'
import rightArrow from '../../assets/images/arrow-right.png'

function Carousel({ pictures }) {
    const [index, setIndex] = useState(0)

    function nextSlide() {
        setIndex(index === pictures.length - 1 ? 0 : index + 1)
    }

    function previousSlide() {
        setIndex(index === 0 ? pictures.length - 1 : index - 1)
    }

    if (pictures.length === 1) {
        return (
            <div className="carousel">
                <img src={pictures[0]} alt="logement" className="carousel-img" />
            </div>
        )
    }

    return (
        <div className="carousel">
            <button className="carousel-arrow arrow-left" onClick={previousSlide}>
                <img src={leftArrow} alt="flèche gauche" />
            </button>

            <img src={pictures[index]} alt="logement" className="carousel-img" />

            <button className="carousel-arrow arrow-right" onClick={nextSlide}>
                <img src={rightArrow} alt="flèche droite" />
            </button>

            <span className="carousel-counter">{index + 1}/{pictures.length}</span>
        </div>
    )
}

export default Carousel