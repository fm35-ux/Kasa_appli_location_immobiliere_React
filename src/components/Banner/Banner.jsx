import './Banner.css';


function Banner({ image, text }) {
    return (
        <div className="banner">
            <img src={image} alt="Bannerière Kasa" className="banner-img" />
            <div className="banner-overlay"></div>
            <h1 className="banner-text">{text}</h1>
        </div>
    );
}

export default Banner;