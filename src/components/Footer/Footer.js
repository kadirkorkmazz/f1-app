import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <footer className='footer'>
        <div className='footer-social'>
          <a
            href='https://www.linkedin.com/in/kadirkorkmazz/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://github.com/kadirkorkmazz'
            rel='noopener noreferrer'
            target='_blank'
          >
            <FaGithub />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
