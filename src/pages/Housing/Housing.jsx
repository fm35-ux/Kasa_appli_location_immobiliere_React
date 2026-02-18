import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Collapse from '../../components/Collapse/Collapse'
import './Housing.css'


function Housing() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [property, setProperty] = useState(null)

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

    return (
        <main className="housing-page">
            <div className="housing-info">
                <h1>{property.title}</h1>
                <p>{property.location}</p>

                <div className="housing-tags">
                    {property.tags.map((tag, index) => (
                        <span key={index} className="tag-button">{tag}</span>
                    ))}
                </div>
            </div>

            <div className="housing-collapse">
                <Collapse title="Description" content={property.description} />
                <Collapse title="Equipements" content={
                    <ul>
                        {property.equipments.map((equipments, index) => (
                            <li key={index}>{equipments}</li>
                        ))}
                    </ul>
                } />
            </div>
        </main>
    )
}
export default Housing