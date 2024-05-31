import React from 'react';
import '../App.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>À Propos de Nous</h3>
          <p>
            Bienvenue sur notre site de recettes culinaires où nous partageons nos meilleures recettes et astuces de cuisine. Que vous soyez un chef expérimenté ou un débutant, vous trouverez ici quelque chose d'inspirant.
          </p>
        </div>
        <div className="footer-section">
          <h3>Liens Utiles</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/recipes">Recettes</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">À Propos</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Suivez-nous</h3>
          <ul className="social-links">
            <li><a href="https://www.facebook.com">Facebook</a></li>
            <li><a href="https://www.instagram.com">Instagram</a></li>
            <li><a href="https://www.twitter.com">Twitter</a></li>
            <li><a href="https://www.pinterest.com">Pinterest</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 VotreNom. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;