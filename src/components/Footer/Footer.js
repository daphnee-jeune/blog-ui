import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerText">All content &copy; blog 2020. All rights reserved.</div>
            <div className="socialLinks">
                <i className="fa fa-youtube-square fa-lg"></i>
                <i className="fa fa-facebook-square fa-lg"></i>
                <i className="fa fa-twitter-square fa-lg"></i>
                <i className="fa fa-instagram fa-lg"></i>
                <i className="fa fa-linkedin fa-lg"></i>
            </div>
        </div>
    )
}

export default Footer
