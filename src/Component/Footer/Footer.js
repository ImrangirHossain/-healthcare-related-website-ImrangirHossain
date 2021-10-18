import React from 'react';
const Footer = () => {
    const footerStyle={
        height: '100px',
        backgroundColor: 'black'
    }
    return (
        <div style={footerStyle}>
            <div className="text-muted">
            <i className="fab fa-facebook p-3"></i>
            <i className="fab fa-twitter p-3"></i>
            <i className="fab fa-viber p-3" ></i>
            <i className="fab fa-google-plus-g p-3"></i>
            </div>

            <p className="text-white"><small>Designer by <span className="text-warning">Imrangir</span> . All Rights Reserved.</small></p>
        </div>
    );
};

export default Footer;