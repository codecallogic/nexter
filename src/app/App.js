import './App.css';
import React from 'react';

function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <button className="nav-btn"></button>
      </div>
      <header className="header">Header</header>
      <div className="realtors">Top 3 Realtors</div>
      <section className="features">
        <div className="feature">
          <svg className="feature-icon">
            <use xlinkHref="/images/sprite.svg#icon-global"></use>
          </svg>
          <h4 className="heading-4-dark heading-4">Worlds best luxery homes</h4>
          <p className="feature-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi non eligendi architecto quod iusto vero, nobis excepturi ratione sed tenetur error? Eligendi ad dolore qui repellendus? Perferendis in perspiciatis recusandae.</p>
        </div>
        <div className="feature">
          <svg className="feature-icon">
            <use xlinkHref="/images/sprite.svg#icon-trophy"></use>
          </svg>
          <h4 className="heading-4-dark heading-4">Only the best properties</h4>
          <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, illo itaque non in quisquam quaerat ex ducimus nemo alias, autem asperiores vel reiciendis quidem tenetur nulla sequi eius ea sit.</p>
        </div>
        <div className="feature">
          <svg className="feature-icon">
            <use xlinkHref="/images/sprite.svg#icon-map-pin"></use>
          </svg>
          <h4 className="heading-4-dark heading-4">All homes in top locations</h4>
          <p className="feature-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quisquam aliquam unde.</p>
        </div>
        <div className="feature">
          <svg className="feature-icon">
            <use xlinkHref="/images/sprite.svg#icon-key"></use>
          </svg>
          <h4 className="heading-4-dark heading-4">New home in one week</h4>
          <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, debitis aut. Praesentium nulla facere libero. At mollitia tempora dolor ex ratione laboriosam, dolorum quas veniam nisi, pariatur et minus cumque.</p>
        </div>
        <div className="feature">
          <svg className="feature-icon">
            <use xlinkHref="/images/sprite.svg#icon-presentation"></use>
          </svg>
          <h4 className="heading-4-dark heading-4">Top 1% realtors</h4>
          <p className="feature-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi expedita praesentium vitae modi tenetur! Exercitationem odio earum, sit impedit, et architecto alias officia blanditiis rerum ex adipisci veritatis, corporis laboriosam?</p>
        </div>
        <div className="feature">
          <svg className="feature-icon">
            <use xlinkHref="/images/sprite.svg#icon-lock"></use>
          </svg>
          <h4 className="heading-4-dark">Secure payments on nexter</h4>
          <p className="feature-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus dolorum enim temporibus odit. Eius eligendi dolor id? Asperiores, incidunt! Facilis blanditiis distinctio dolorum a earum fugiat sit veniam nisi commodi!</p>
        </div>
      </section>
      <div className="story-pics">
        <img src="/images/story-1.jpeg" alt="Couple with new house" className="story-img-1"/>
        <img src="/images/story-2.jpeg" alt="New House" className="story-img-2"/>
      </div>
      <div className="story-content">
        <h3 className="heading-3 mb-sm">Happy Customers</h3>
        <h2 className="heading-2 heading-2-dark mb-md">&ldquo; The best decision of our lives &rdquo;</h2>
        <p className="story-text mb-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, saepe natus maiores molestias aliquid ex id laborum cum dolore iste ipsam ea corporis.
        </p>
        <button className="btn">Find your own home</button>
      </div>
      <section className="homes">
        <div className="home">
          <img src="/images/house-1.jpeg" alt="House 1" className="home-image"/>
          <svg className="home-like">
            <use xlinkHref="/images/sprite.svg#icon-heart-full"></use>
          </svg>
          <h5 className="home-name">Beautiful Family House</h5>
          <div className="home-location">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>USA</p>
          </div>
          <div className="home-rooms">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>5 Rooms</p>
          </div>
          <div className="home-area">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-expand"></use>
            </svg>
            <p>325 m <sup>2</sup></p>
          </div>
          <div className="home-price">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-key"></use>
            </svg>
            <p>$1,200,000</p>
          </div>
          <button className="btn home-button">Contact Realtor</button>
        </div>
        <div className="home">
          <img src="/images/house-2.jpeg" alt="House 2" className="home-image"/>
          <svg className="home-like">
            <use xlinkHref="/images/sprite.svg#icon-heart-full"></use>
          </svg>
          <h5 className="home-name">Modern Glass Villa</h5>
          <div className="home-location">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>Canada</p>
          </div>
          <div className="home-rooms">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>6 Rooms</p>
          </div>
          <div className="home-area">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-expand"></use>
            </svg>
            <p>450 m <sup>2</sup></p>
          </div>
          <div className="home-price">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-key"></use>
            </svg>
            <p>$2,750,000</p>
          </div>
          <button className="btn home-button">Contact Realtor</button>
        </div>
        <div className="home">
          <img src="/images/house-3.jpeg" alt="House 3" className="home-image"/>
          <svg className="home-like">
            <use xlinkHref="/images/sprite.svg#icon-heart-full"></use>
          </svg>
          <h5 className="home-name">Cozy Country House</h5>
          <div className="home-location">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>UK</p>
          </div>
          <div className="home-rooms">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>4 Rooms</p>
          </div>
          <div className="home-area">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-expand"></use>
            </svg>
            <p>250 m <sup>2</sup></p>
          </div>
          <div className="home-price">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-key"></use>
            </svg>
            <p>$850,000</p>
          </div>
          <button className="btn home-button">Contact Realtor</button>
        </div>
        <div className="home">
          <img src="/images/house-4.jpeg" alt="House 4" className="home-image"/>
          <svg className="home-like">
            <use xlinkHref="/images/sprite.svg#icon-heart-full"></use>
          </svg>
          <h5 className="home-name">Large Rustical Villa</h5>
          <div className="home-location">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>Portugal</p>
          </div>
          <div className="home-rooms">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>6 Rooms</p>
          </div>
          <div className="home-area">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-expand"></use>
            </svg>
            <p>480 m <sup>2</sup></p>
          </div>
          <div className="home-price">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-key"></use>
            </svg>
            <p>$1,950,000</p>
          </div>
          <button className="btn home-button">Contact Realtor</button>
        </div>
        <div className="home">
          <img src="/images/house-5.jpeg" alt="House 5" className="home-image"/>
          <svg className="home-like">
            <use xlinkHref="/images/sprite.svg#icon-heart-full"></use>
          </svg>
          <h5 className="home-name">Majestic Palace House</h5>
          <div className="home-location">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>Germany</p>
          </div>
          <div className="home-rooms">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>18 Rooms</p>
          </div>
          <div className="home-area">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-expand"></use>
            </svg>
            <p>4230 m <sup>2</sup></p>
          </div>
          <div className="home-price">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-key"></use>
            </svg>
            <p>$9,500,000</p>
          </div>
          <button className="btn home-button">Contact Realtor</button>
        </div>
        <div className="home">
          <img src="/images/house-6.jpeg" alt="House 6" className="home-image"/>
          <svg className="home-like">
            <use xlinkHref="/images/sprite.svg#icon-heart-full"></use>
          </svg>
          <h5 className="home-name">Modern Family Apartment</h5>
          <div className="home-location">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-map-pin"></use>
            </svg>
            <p>Italy</p>
          </div>
          <div className="home-rooms">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-profile-male"></use>
            </svg>
            <p>3 Rooms</p>
          </div>
          <div className="home-area">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-expand"></use>
            </svg>
            <p>180 m <sup>2</sup></p>
          </div>
          <div className="home-price">
            <svg>
              <use xlinkHref="/images/sprite.svg#icon-key"></use>
            </svg>
            <p>$600,000</p>
          </div>
          <button className="btn home-button">Contact Realtor</button>
        </div>
      </section>
      <section className="gallery">
        <figure className="gallery-item gallery-item-1">
          <img src="/images/gal-1.jpeg" alt="Gallery image 1" className="gallery-image"/>
        </figure>
        <figure className="gallery-item gallery-item-2">
          <img src="/images/gal-2.jpeg" alt="Gallery image 2" className="gallery-image"/>
        </figure>
        <figure className="gallery-item gallery-item-3">
          <img src="/images/gal-3.jpeg" alt="Gallery image 3" className="gallery-image"/>
        </figure>
        <figure className="gallery-item gallery-item-4">
          <img src="/images/gal-4.jpeg" alt="Gallery image 4" className="gallery-image"/>
        </figure>
        <figure className="gallery-item gallery-item-5">
          <img src="/images/gal-5.jpeg" alt="Gallery image 5" className="gallery-image"/>
        </figure>
        <figure className="gallery-item gallery-item-6">
          <img src="/images/gal-6.jpeg" alt="Gallery image 6" className="gallery-image"/>
        </figure>
        <figure className="gallery-item gallery-item-7">
          <img src="/images/gal-7.jpeg" alt="Gallery image 7" className="gallery-image"/>
        </figure>
        <figure className="gallery-item gallery-item-8">
          <img src="/images/gal-8.jpeg" alt="Gallery image 8" className="gallery-image"/>
        </figure>
        <figure className="gallery-item gallery-item-9">
          <img src="/images/gal-9.jpeg" alt="Gallery image 9" className="gallery-image"/>
        </figure>
        <figure className="gallery-item gallery-item-10">
          <img src="/images/gal-10.jpeg" alt="Gallery image 10" className="gallery-image"/>
        </figure>
        <figure className="gallery-item gallery-item-11">
          <img src="/images/gal-11.jpeg" alt="Gallery image 11" className="gallery-image"/>
        </figure>
        <figure className="gallery-item gallery-item-12">
          <img src="/images/gal-12.jpeg" alt="Gallery image 12" className="gallery-image"/>
        </figure>
        <figure className="gallery-item gallery-item-13">
          <img src="/images/gal-13.jpeg" alt="Gallery image 13" className="gallery-image"/>
        </figure>
        <figure className="gallery-item gallery-item-14">
          <img src="/images/gal-14.jpeg" alt="Gallery image 14" className="gallery-image"/>
        </figure>
      </section>
      <div className="footer">
        <ul className="nav">
          <li className="nav-item"><a href="#" className="nav-link">Find Your Dream Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Request Proposal</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Download Home Planner</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Contact Us</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Submit Your Property</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Come Work With Us</a></li>
        </ul>
        <p className="copyright">
          &copy; Copyright 2020 by Fabricio Guardia, modern web design using css grids and css flexbox.
        </p>
      </div>
    </div>
  );
}

export default App;
