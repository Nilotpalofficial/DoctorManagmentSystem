import './Footer.css';

const Footer=()=>{
    return(
        <div className='container-fluid'>
        <div className="footer">
            <div className="top-row">
            <div>
                <img src='https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/logo.svg'></img>
                <p>Get A Lot Of Information About Us</p>
                <h1>Subscribe Our Newsletter</h1>
            </div>
            <div>
                <a href="/">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-twitter-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-youtube-square"></i>
                </a>
            </div>

            </div>
            <div className="bottom-row">
            <div>
                <h4>Patient Care</h4>
                <a href="/">International Patients</a>
                <a href="/">News & Media</a>
                <a href="/">Centres Of Excellence</a>
                <a href="/">Medical Procedures</a>
            </div>
            <div>
                <h4>Communities</h4>
                <a href="/">Twitter</a>
                <a href="/">Facebook</a>
                <a href="/">Instagram</a>
                <a href="/">YouTube</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href="/">Support</a>
                <a href="/">Troubleshooting</a>
                <a href="/">Contact Us</a>
            </div>
            <div>
                <h4>Others</h4>
                <a href="/">Terms and Services</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Licence</a>
            </div>
                
            </div>
        </div>
    </div>

    )
}

export default Footer