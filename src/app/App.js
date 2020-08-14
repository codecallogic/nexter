import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="sidebar">Sidebar</div>
      <header className="header">Header</header>
      <div className="realtors">Top 3 Realtors</div>
      <section className="features">
        <div className="feature">
          <svg className="feature-icon">
            <use xlinkHref="/images/sprite.svg#icon-global"></use>
          </svg>
          <h4 className="heading-4">Worlds best luxery homes</h4>
          <p className="feature-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi non eligendi architecto quod iusto vero, nobis excepturi ratione sed tenetur error? Eligendi ad dolore qui repellendus? Perferendis in perspiciatis recusandae.</p>
        </div>
        <div className="feature">
          <svg className="feature-icon">
            <use xlinkHref="/images/sprite.svg#icon-trophy"></use>
          </svg>
          <h4 className="heading-4">Only the best properties</h4>
          <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, illo itaque non in quisquam quaerat ex ducimus nemo alias, autem asperiores vel reiciendis quidem tenetur nulla sequi eius ea sit.</p>
        </div>
        <div className="feature">
          <svg className="feature-icon">
            <use xlinkHref="/images/sprite.svg#icon-map-pin"></use>
          </svg>
          <h4 className="heading-4">All homes in top locations</h4>
          <p className="feature-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quisquam aliquam unde deleniti atque reiciendis repellat deserunt. Natus earum repellendus eum, aperiam et soluta culpa eveniet deleniti perspiciatis! Corrupti, commodi!</p>
        </div>
        <div className="feature">
          <svg className="feature-icon">
            <use xlinkHref="/images/sprite.svg#icon-key"></use>
          </svg>
          <h4 className="heading-4">New home in one week</h4>
          <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, debitis aut. Praesentium nulla facere libero. At mollitia tempora dolor ex ratione laboriosam, dolorum quas veniam nisi, pariatur et minus cumque.</p>
        </div>
        <div className="feature">
          <svg className="feature-icon">
            <use xlinkHref="/images/sprite.svg#icon-presentation"></use>
          </svg>
          <h4 className="heading-4">Top 1% realtors</h4>
          <p className="feature-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi expedita praesentium vitae modi tenetur! Exercitationem odio earum, sit impedit, et architecto alias officia blanditiis rerum ex adipisci veritatis, corporis laboriosam?</p>
        </div>
        <div className="feature">
          <svg className="feature-icon">
            <use xlinkHref="/images/sprite.svg#icon-lock"></use>
          </svg>
          <h4 className="heading-4">Secure payments on nexter</h4>
          <p className="feature-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus dolorum enim temporibus odit. Eius eligendi dolor id? Asperiores, incidunt! Facilis blanditiis distinctio dolorum a earum fugiat sit veniam nisi commodi!</p>
        </div>
      </section>
      <div className="story-pics">Story pics</div>
      <div className="story-content">Story content</div>
      <section className="homes">Homes</section>
      <section className="gallery">Gallery</section>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
