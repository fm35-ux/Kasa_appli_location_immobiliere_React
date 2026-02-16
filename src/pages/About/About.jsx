import bannerImage from '../../assets/images/banner-about.png'
import Banner from '../../components/Banner/Banner'

function About() {
    return (
        <div className="home">
            <Banner
                image={bannerImage}
            />
        </div>
    )
}
export default About