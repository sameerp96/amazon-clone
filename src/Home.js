import React from 'react';
import BannerAd from "./images/BannerAd.jpg";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
      <div className="home">
        <div className="home__container">
          <img className="home__image" alt="banner" src={BannerAd} />

          <div className="home__row">
            <Product
              id="123456"
              title="The Lean Startup: How Constant Innovation Creates Radically Successful Business"
              price={10.99}
              image={"https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg"}
              rating={5}
            />
            <Product
              id="123457"
              title="Galaxy S20 Mobile Phone; Sim Free Smartphone - Cosmic Grey"
              price={629.99}
              image={"https://images-na.ssl-images-amazon.com/images/I/71efuy%2B3ZNL._AC_SY450_.jpg"}
              rating={4}
            />
          </div>

          <div className="home__row">
            <Product
              id="123458"
              title="Sony Alpha 6400 | APS-C Mirrorless Camera with Sony 16-50 mm f/3.5-5.6 Power Zoom Lens"
              price={942.99}
              image={"https://images-na.ssl-images-amazon.com/images/I/61ijNtQq6bL._AC_SL1028_.jpg"}
              rating={4}
            />
            <Product
              id="123459"
              title="Apple AirPods with Charging Case (wired)"
              price={129}
              image={"https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._AC_SL1500_.jpg"}
              rating={5}
            />
            <Product
              id="123460"
              title="Echo Dot (3rd Gen) - Smart Speaker with Alexa -Charcoal Fabric"
              price={29.99}
              image={"https://images-na.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_SL1000_.jpg"}
              rating={5}
            />
          </div>

          <div className="home__row">
          <Product
              id="123461"
              title="Samsung 108cm (43 inches) $k ultra HD Smart LED TV UA43TU8570UXXL(Black)"
              price={685}
              image={"https://images-na.ssl-images-amazon.com/images/I/91wKQnyG%2BLL._SL1500_.jpg"}
              rating={4}
            />
          </div>
          <div className="home__row">
          <Product
              id="123462"
              title="The Secret by Rhonda Byrne"
              price={11.99}
              image={"https://images-na.ssl-images-amazon.com/images/I/51FGx8kUv-L._SX391_BO1,204,203,200_.jpg"}
              rating={4}
            />
            <Product
              id="123463"
              title="SanDisk Ultra 32 GB microSDHC MEmory Card + SD Adapter"
              price={5.99}
              image={"https://images-na.ssl-images-amazon.com/images/I/61wtfkbzUIL._AC_SL1093_.jpg"}
              rating={4}
            />
            <Product
              id="123464"
              title="DJI Mavic Mini - Ultralight and Portable Drone, Batter Life 30 min, Distance 2KM"
              price={459}
              image={"https://images-na.ssl-images-amazon.com/images/I/71JJgCAQKSL._AC_SL1500_.jpg"}
              rating={5}
            />
            <Product
              id="123465"
              title="KLOS Guitars Acoustic Electric Guitar Package"
              price={867}
              image={"https://images-na.ssl-images-amazon.com/images/I/71LCtX7pftL._AC_SL1500_.jpg"}
              rating={3}
            />
          </div>

        </div>
      </div>
    );
}

export default Home
