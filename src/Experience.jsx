import React from "react";
import "./experience.css";

export default class Experiences extends React.Component{
  render() {
    return (
      <div className="experience">
        <h3 id="title-exp">Dernière expérience professionnelle</h3>
        <h5>Responsable adjoint - Décathlon Wagram (Paris)</h5>
        <p id="date-exp"><em>(octobre 2016 - mars 2022)</em></p>
        <ul className="exp-list">
          <li>Formateur France pour les produits de golf</li>
          <li>Gestion du dynamisme commercial</li>
          <li>Traitement et analyse des statistiques</li>
          <li>Activation des leviers economiques</li>
          <li>Gestion du merchandising</li>
          <li>Management d'une équipe de quatre personnes</li>
        </ul>
      </div>
    );
  }
}
