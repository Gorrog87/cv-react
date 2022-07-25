import React from "react";
import "./formation.css";

const Formation = () => {
  return (
    <div className="formation">
      <h3 id="forma">Formations</h3>
      <div className="duo-formation">
        <img
          src="https://media.cdn.teamtailor.com/images/s3/teamtailor-production/logotype-v3/image_uploads/8fb919f4-01d0-480b-b079-83d3e15f2f42/original.png"
          alt="o'clock-logo"
          id="o-clock-logo"
        />
        <h5>
          O'clock (octobre 2022 - février 2024) en alternance : Concepteur /
          Développeur d'applications web
        </h5>
      </div>
      <div className="duo-formation">
        <img
          src="https://www.frenchtechbordeaux.com/wp-content/uploads/2019/01/le-wagon-color.png"
          alt="Le Wagon Logo"
          id="le-wagon"
        />
        <h5>
          Le Wagon - Paris (janvier - mars 2022) : Concepteur / Développeur
          d'applications web
        </h5>
      </div>
    </div>
  );
};

export default Formation;
