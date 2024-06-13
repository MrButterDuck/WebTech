import React from 'react';

const Footer = ({links}) => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Работу выполнил студент<br/>группa Б9121-09.03.04<br/>Костюченко Антон</p>
      </div>
      <div className="footer-right">
      {links.map((link, index) => (<a key={index} href={link.url}>{link.text}</a>))}
      </div>
    </footer>
  );
};

export default Footer;