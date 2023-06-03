import React from 'react';
import styles from "../styles/Footer.css";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <Link to="https://www.instagram.com/douglaswillianb/" target='_blank'>
                    <InstagramIcon />
                </Link>
                <Link to="https://github.com/DouglasWillianBasilio" target='_blank'>
                    <GitHubIcon />
                </Link>
                <Link to="https://www.linkedin.com/in/douglas-basilio-459a6a1bb/" target='_blank'>
                    <LinkedInIcon />
                </Link>
            </div>
            <p> &copy; 2023 Douglas Willian </p>
        </div>
    )
}

export default Footer
