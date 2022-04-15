import React from 'react';

const Footer = () => {
    let year =  new Date().getFullYear();
    console.log(year);
    return (
        <footer>    
            <p>Copyright@ {year}</p>
        </footer>
    );
};

export default Footer;