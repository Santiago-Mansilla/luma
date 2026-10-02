function About() {
  return (
    <div className="about">
      <section className="about__hero">
        <p className="about__eyebrow">ABOUT LUMA</p>

        <h1>
          A place for
          <span>slow moments.</span>
        </h1>

        <p className="about__intro">
          LUMA is a neighborhood coffee shop built around good coffee, fresh
          food and the simple pleasure of taking your time.
        </p>
      </section>

      <section className="about__story">
        <div className="about__story-label">
          <p>Our approach</p>
        </div>

        <div className="about__story-content">
          <h2>More than a coffee shop.</h2>

          <p>
            We believe a good coffee is about more than what is in the cup. It
            is about the place, the people and the moment around it.
          </p>

          <p>
            LUMA was imagined as a warm, relaxed space where mornings can move
            slowly, conversations can last a little longer and there is always
            time for another coffee.
          </p>
        </div>
      </section>

      <section className="about__quote">
        <p>
          Good coffee.
          <span>Good food.</span>
          <span>Good company.</span>
        </p>
      </section>
      
      </div>
  );
}

export default About;
