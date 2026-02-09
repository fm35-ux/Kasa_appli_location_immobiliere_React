import Banner from '../../components/Banner/Banner'
import bannerImage from '../../assets/images/banner-home.png'


function Home() {
    return (
        <div className="home">
            <Banner
                image={bannerImage}
                text="Chez vous, partout et ailleurs"
            />
        </div>
    )
}
export default Home