import React from "react";
import {Link} from 'react-router-dom'
import RelatedProducts from "./RelatedProducts";

const Hero = () => {
  return (
    <section>
      <div className='max-padd-container bg-hero bg-right  bg-no-repeat h-[750px] w-full bg-secondary'>
        <div className="relative top-24 xs:top-32">
          <h2 className="h1 capitalize max-w-[50rem]">
            Des matériaux de construction de qualité supérieure pour réaliser
            vos projets avec excellence.
          </h2>
          <p className="my-5 max-w-[33rem] text-primary">
            Découvrez notre gamme complète de matériaux durables et fiables,
            conçus pour garantir le succès de vos réalisations.
          </p>
          <div>
            <Link to="" className="btn-dark rounded-xl flexcenter !py-5">Shop Now</Link>
          </div>
          <div className="mt-16">
            <RelatedProducts/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
