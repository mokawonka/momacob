import React from "react";
import { TbLock, TbPhoneCheck, TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
import Truck from '../assets/Truck.png'

const About = () => {
  return (
    <section className="max-padd-container my-10">
      <div className="flex flex-col xl:flex-row">
        {/*left*/}
        <div className="flex-1">
          <h3 className="h3 capitalize">
            Devoilement du Service de vente Tout-en-Un!
          </h3>
          <p className="py-5">
            Découvrez notre nouveau service de vente en Ligne, conçu pour
            simplifier et améliorer votre expérience d'achat. Profitez d'une
            commodité inégalée avec un support client exceptionnel.
          </p>
          <div className="flex flex-col items-start gap-y-4">
            <div className="flexCenter gap-x-4">
              <div className="h-16 min-w-16 bg-secondary flexCenter rounded-md">
                <TbTruckDelivery className="text-white text-2xl" />
              </div>
              <div>
                <h4 className="medium-18">Livraison sur chantier</h4>
                <p>
                  La livraison sur chantier assure l'acheminement direct de vos
                  matériaux et équipements sur votre site de construction,
                  facilitant ainsi la gestion de votre projet.
                </p>
              </div>
            </div>
            <div className="flexCenter gap-x-4">
              <div className="h-16 min-w-16 bg-secondary flexCenter rounded-md">
                <TbLock className="text-white text-2xl" />
              </div>
              <div>
                <h4 className="medium-18">Paiement a L'arrivée</h4>
                <p>
                  Le paiement à domicile simplifie vos achats en vous permettant
                  de régler directement à votre porte, offrant ainsi une
                  solution pratique et sécurisée.
                </p>
              </div>
            </div>
            <div className="flexCenter gap-x-4">
              <div className="h-16 min-w-16 bg-secondary flexCenter rounded-md">
                <TbPhoneCheck className="text-white text-2xl" />
              </div>
              <div>
                <h4 className="medium-18">
                  Confirmation de Commande par Téléphone
                </h4>
                <p>
                  La confirmation de commande par téléphone assure une
                  vérification directe et rapide de votre achat, garantissant
                  ainsi une communication claire et efficace de votre commande.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*Right*/}
        <div className="flex-1 flexCenter">
          <div>
          <img src={Truck} height={488} width={488}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
