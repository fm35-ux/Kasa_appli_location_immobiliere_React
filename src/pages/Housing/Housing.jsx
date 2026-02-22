import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Collapse from '../../components/Collapse/Collapse'
import Carousel from '../../components/Carousel/Carousel'
import starFull from '../../assets/images/star-active.png'
import starEmpty from '../../assets/images/star-inactive.png'
import './Housing.css'


function Housing() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [property, setProperty] = useState(null)

    console.log(id)

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`http://localhost:8080/api/properties/${id}`)
            if (data.status === 404) {
                navigate('/error')
            } else {
                const parsedData = await data.json()
                setProperty(parsedData)
            }
        }
        fetchData()
    }, [id, navigate])

    if (!property) return null

    const stars = [1, 2, 3, 4, 5]
    const housingScore = property.rating;

    return (
        <main className="housing-page">
            <Carousel pictures={property.pictures} />

            <div className="housing-header">

                <div className="housing-header-left">
                    <h1>{property.title}</h1>
                    <p>{property.location}</p>

                    <div className="housing-tags">
                        {property.tags.map((tag) => (
                            <span key={tag} className="tag-button">{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="housing-header-right">
                    <div className="host-block">
                        <p className="host-name">{property.host.name}</p>
                        <img className="host-img" src={property.host.picture} alt="Portrait de l'hôte" />
                    </div>

                    <div className="rating-container">
                        {stars.map((number) => (
                            housingScore >= number ? (
                                <img key={number} src={starFull} alt="étoile remplie" className="star" />
                            ) : (
                                <img key={number} src={starEmpty} alt="étoile vide" className="star" />
                            )
                        ))}
                    </div>
                </div>
            </div>

            <div className="housing-collapse">
                <Collapse title="Description" content={property.description} />
                <Collapse title="Equipements" content={
                    <ul>
                        {property.equipments.map((equipments) => (
                            <li key={equipments}>{equipments}</li>
                        ))}
                    </ul>
                } />
            </div>
        </main>
    )

}
export default Housing