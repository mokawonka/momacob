import React from "react";
import {
  RiMailFill,
  RiMailLine,
  RiPhoneFill,
  RiPhoneLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="flex flex-row justify-around max-padd-container bg-tertiary py-8 divide-x divide-dashed ">
      <div className="text-white">
        <h4>Copyrights © SARL MOMACOB </h4>
      </div>

      <div>
        <h4 className="text-white mx-2">Horaires </h4>
        <div className="flex flex-row mx-3 ">
          <div>
            <p>samedi</p>
            <p>Dimanche</p>
            <p>Lundi</p>
            <p>Mardi</p>
            <p>Mercredi</p>
            <p>Jeudi</p>
            <p>Vendredi</p>
          </div>
          <div>
            <p>:8H-17H</p>
            <p>:8H-17H</p>
            <p>:8H-17H</p>
            <p>:8H-17H</p>
            <p>:8H-17H</p>
            <p>:8H-17H</p>
            <p>Ferme</p>
          </div>
        </div>
      </div>
      <div className="flex flexCenter flex-row text-white ">
        <div className="mx-2">
          <RiMailLine className="my-2" />
          <RiPhoneLine className="my-2" />
        </div>

        <div>
          <h4>Email: sarl.momacob@gmail.com </h4>
          <h4>Telephone: 0798883266</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
