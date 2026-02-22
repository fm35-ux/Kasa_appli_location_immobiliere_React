import { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner'
import bannerImage from '../../assets/images/banner-home.png'
import Card from '../../components/Card/Card'
import './Home.css'


function Home() {

    const [properties, setProperties] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await fetch('http://localhost:8080/api/properties')
            const parsedData = await data.json()
            setProperties(parsedData)
        }
        fetchData()
    }, [])


    return (
        <main>
            <div className="home">
                <Banner
                    image={bannerImage}
                    text="Chez vous, partout et ailleurs"
                />
                <section className="housing-container">
                    {properties.map(({ id, title, cover }) => (
                        <Card key={id} id={id} title={title} cover={cover} />
                    ))}
                </section>
            </div>
        </main>
    )
}
export default Home