import "./styles1.css";
export default function App() {
  return (
    <div className="App">
      <header className="flex-container">
        <div id="logo1">
          <img
            src={require("./images/logo.png")}
            alt="logo"
            width="100px"
            height="100px"
          />
        </div>
        <h1>Red Lamp</h1>
        <button className="button button1">Home</button>
        <button className="button button2">Details</button>
      </header>
      <main>
        <section>
          <p>
            Welcome to the Red Lamp Shop, this is where you can purchase the
            exquisite red lamp for only £5. This is an absolute bargain and
            there is nothing to pay on delivery!.
          </p>
        </section>

        <img
          src={require("./images/product.jpg")}
          alt="Lamp Product"
          width="300px"
          height="300px"
        />

        <article>
          <p>
            This lamp has an unknown origin, all that is known is that it is red
            with a black tube which is able to be bent and placed in any
            position. Some say that it shines so bright it can light up the
            night sky! Whether this is true or not, it remains to be seen, only
            you can find out!
          </p>
          <p>
            <button className="button button2">Buy Now</button>
          </p>
        </article>
      </main>
      <footer className="flex-container2">
        <div className="p1">
          <p>
            <a href="contactuspage">Contact us</a>
          </p>
        </div>
        <div className="p1">
          <p>
            <a href="faqspage">FAQs</a>
          </p>
        </div>
        <div className="p1">
          <p>Facebook:</p>
          <a href="www.facebook.com">
            <img
              src={require("./images/facebook_logo.png")}
              alt="facebook_logo"
              width="40px"
              height="40px"
            />
          </a>
        </div>
        <div className="p1">
          <p>Twitter:</p>
          <a href="twitter.com">
            <img
              src={require("./images/twitter_logo.png")}
              alt="twitter_logo"
              width="40px"
              height="40px"
              hyperlink="www.twitter.com"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
