import React from "react";
import "./bio.css";

export default class Bio extends React.Component {
  render() {
    return (
      <p>
        <q>
          <i>
            {" "}
            Après avoir exercé pendant cinq ans le métier de vendeur puis de
            formateur France pour des produits signés, j'ai décidé de faire une
            reconversion professionnelle. J'ai terminé ma formation de
            développeur web Fullstack au sein du Wagon Paris en mars 2022. Ces
            années passées dans le secteur de la vente m'ont permis d'acquérir
            certaines aptitudes telles que : la capacité à se remettre en
            question, s'améliorer face aux clients, un relationnel facile, une
            interaction sociale forte. Ce sont à mon sens des points
            intéressants pour ce type de métier. La communication doit etre
            fondamentale, et les relations saines.{" "}
          </i>
        </q>
      </p>
    );
  }
}
