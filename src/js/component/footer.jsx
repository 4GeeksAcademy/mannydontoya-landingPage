import React from "react";

const Footer = () =>{
    const currentYear = new Date().getFullYear();
    return(
        <footer className="bg-dark text-white d-flex justify-content-center align-items-center py-2">
            <div>
                {`Copyright © Your Website ${currentYear}`}
            </div>
        </footer>
    )
};

export default Footer;