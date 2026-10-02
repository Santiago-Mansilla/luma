import { useState } from "react";
import About from "./pages/about";
import "./pages/about.css";

const menuItems = [
  {
    id: 1,
    name: "Espresso",
    category: "Coffee",
    description: "Rich, intense and perfectly balanced.",
    price: "$3.50",
  },
  {
    id: 2,
    name: "Cappuccino",
    category: "Coffee",
    description: "Double espresso, silky milk and soft foam.",
    price: "$4.50",
  },
  {
    id: 3,
    name: "Cold Brew",
    category: "Coffee",
    description: "Slow-steeped, smooth and naturally sweet.",
    price: "$4.00",
  },
  {
    id: 4,
    name: "Matcha Latte",
    category: "Drinks",
    description: "Ceremonial matcha with creamy steamed milk.",
    price: "$5.00",
  },
  {
    id: 5,
    name: "Butter Croissant",
    category: "Pastries",
    description: "Golden, flaky and baked fresh every morning.",
    price: "$3.25",
  },
  {
    id: 6,
    name: "Cinnamon Roll",
    category: "Pastries",
    description: "Soft dough, cinnamon and vanilla glaze.",
    price: "$4.25",
  },
  {
    id: 7,
    name: "Chocolate Tart",
    category: "Pastries",
    description: "Dark chocolate, buttery crust and sea salt.",
    price: "$5.00",
  },
  {
    id: 8,
    name: "Avocado Toast",
    category: "Food",
    description: "Sourdough, avocado, herbs and chili flakes.",
    price: "$7.50",
  },
];

function App() {
  const isAboutPage = window.location.pathname === "/about";
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const [sent, setSent] = useState(false);
  

  const filteredItems =
    category === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <header className="navbar">
        <a href="/" className="navbar__logo">
          LUMA
        </a>

        <button
          className="navbar__toggle"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}
        >
          <a href="/about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="/#menu" onClick={() => setMenuOpen(false)}>
            Menu
          </a>

          <a href="/#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
      </header>
      <main>
        {isAboutPage ? (
          <About />
        ) : (
          <>
            <section className="hero">
              <video
                className="hero__video"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="/luma-hero.mp4" type="video/mp4" />
              </video>

              <div className="hero__overlay"></div>

              <div className="hero__content">
                <p className="hero__eyebrow">
                  SPECIALTY COFFEE · FRESH PASTRIES
                </p>

                <h1>
                  Good coffee.
                  <span>Slow mornings.</span>
                </h1>

                <p className="hero__text">
                  Specialty coffee, fresh food and a warm space made for slowing
                  down, meeting someone or simply enjoying your moment.
                </p>

                <div className="hero__actions">
                  <a href="#menu" className="hero__button">
                    Explore the menu
                  </a>
                </div>
              </div>
            </section>

            <section className="feature">
              <div className="feature__content">
                <p className="section__eyebrow">Today's ritual</p>

                <h2>One good cup can change the pace of your day.</h2>

                <p>
                  LUMA is a place for the moments between things. Come in for
                  coffee and stay for the atmosphere.
                </p>

                <a href="#contact">Plan your visit</a>
              </div>
            </section>

            <section className="menu" id="menu">
              <div className="menu__heading">
                <p className="section__eyebrow">Our menu</p>

                <h2>Simple things, done well.</h2>

                <p>
                  From a quick espresso to a slow afternoon pastry, choose
                  something made for your moment.
                </p>
              </div>

              <div className="menu__filters">
                {["All", "Coffee", "Drinks", "Pastries", "Food"].map(
                  (option) => (
                    <button
                      key={option}
                      type="button"
                      className={
                        category === option
                          ? "menu__filter menu__filter--active"
                          : "menu__filter"
                      }
                      onClick={() => setCategory(option)}
                    >
                      {option}
                    </button>
                  ),
                )}
              </div>

              <div className="menu__grid">
                {filteredItems.map((item) => (
                  <article className="menu__item" key={item.id}>
                    <div>
                      <p>{item.category}</p>
                      <h3>{item.name}</h3>
                      <span>{item.description}</span>
                    </div>

                    <div className="menu__item-bottom">
                      <strong>{item.price}</strong>

                      <button
                        type="button"
                        onClick={() => setSelectedItem(item)}
                      >
                        View
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {selectedItem && (
              <div className="modal" onClick={() => setSelectedItem(null)}>
                <div
                  className="modal__content"
                  onClick={(event) => event.stopPropagation()}
                >
                  <button
                    type="button"
                    className="modal__close"
                    onClick={() => setSelectedItem(null)}
                  >
                    ×
                  </button>

                  <p>{selectedItem.category}</p>
                  <h3>{selectedItem.name}</h3>
                  <span>{selectedItem.description}</span>
                  <strong>{selectedItem.price}</strong>

                  <button
                    type="button"
                    className="modal__button"
                    onClick={() => setSelectedItem(null)}
                  >
                    Add to order
                  </button>
                </div>
              </div>
            )}

            <section className="contact" id="contact">
              <div className="contact__heading">
                <p className="section__eyebrow">Come by</p>

                <h2>Take a break at LUMA.</h2>

                <p>
                  Questions, private events or simply want to say hello? Send us
                  a message.
                </p>

                <div className="contact__info">
                  <div>
                    <strong>Address</strong>
                    <span>18 Oak Street, Downtown</span>
                  </div>

                  <div>
                    <strong>Opening hours</strong>
                    <span>Monday — Sunday · 8:00 AM — 8:00 PM</span>
                  </div>
                </div>
              </div>

              {sent ? (
                <div className="contact__success">
                  <span>✓</span>
                  <h3>Message received.</h3>
                  <p>Thanks for reaching out to LUMA.</p>

                  <button type="button" onClick={() => setSent(false)}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="contact__form" onSubmit={handleSubmit}>
                  <label>
                    Name
                    <input type="text" name="name" required />
                  </label>

                  <label>
                    Email
                    <input type="email" name="email" required />
                  </label>

                  <label>
                    Message
                    <textarea name="message" rows="5" required />
                  </label>

                  <button type="submit">Send message</button>
                </form>
              )}
            </section>
          </>
        )}
      </main>

      <footer className="footer">
        <div className="footer__brand">
          <span>LUMA</span>
          <p>Your daily coffee ritual.</p>
        </div>

        <nav className="footer__links">
          <a href="/about">About</a>
          <a href="/#menu">Menu</a>
          <a href="/#contact">Contact</a>
        </nav>

        <p className="footer__copy">© 2026 LUMA. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
