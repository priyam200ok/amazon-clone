import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home_img"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      />
      <div className="home__row">
        <Product
          id={1}
          title="Seagate Portable 2TB External Hard Drive Portable HDD"
          image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL480_QL65_.jpg"
          price="76.50"
          rating={4}
        />
        <Product
          id={2}
          title="Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5-10300H | NVIDIA GeForce RTX 3050 Laptop GPU"
          image="https://m.media-amazon.com/images/I/71m03KItMZL._AC_SX522_.jpg"
          price="780.16"
          rating={3}
        />
      </div>
      <div className="home__row">
        <Product
          id={3}
          title="Transformers Toys Generations War for Cybertron Titan WFC-S29 Omega Supreme Action Figure"
          image="https://m.media-amazon.com/images/I/8142ho0wkaL._AC_SX425_.jpg"
          price="76.50"
          rating={4}
        />
        <Product
          id={4}
          title="Smartphone Screen Magnifier Stand 14 Inch"
          image="https://m.media-amazon.com/images/I/71wncNORYtL._AC_SX522_.jpg"
          price="298.39"
          rating={4}
        />
        <Product
          id={5}
          title="RESPAWN RSP-110 Racing Style ,Reclining Ergonomic Chair"
          image="https://m.media-amazon.com/images/I/71y8rPagzDL._AC_SX425_.jpg"
          price="179.99"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id={6}
          title="Sceptre Curved 27 Gaming Monitor up to 165Hz DisplayPort 144Hz HDMI Edge-Less AMD FreeSync Premium, Build-in Speakers Machine Black 2021 (C275B-1858RN)"
          image="https://m.media-amazon.com/images/I/61oVczVkrkL._AC_SX450_.jpg"
          price="199.97"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
