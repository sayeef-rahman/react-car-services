import React from 'react';

const Footer = () => {
    let year =  new Date().getFullYear();
    console.log(year);
    return (
        <div>
            <p>Copyright@{year}</p>
        </div>
    );
};

export default Footer;