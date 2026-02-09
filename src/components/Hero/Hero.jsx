import "./Hero.css";

export default function Hero({ rasm }) {
  return (
    <section className="hero">
      <img className="heroFon" src={rasm?.heroFon || ""} alt="" />

      <div className="konteyner heroIch">
        <div className="heroChap">
          <div className="heroMayda"> Bluetooth Headphones</div>
          <div className="heroSarlavha">AirPods Pro</div>
          <div className="heroSarlavha2">2023</div>

          <div className="heroMatn">
            Wireless noise cancelling, premium sound and comfortable fit.
          </div>

          <div className="heroInfo">
            <div className="heroInfoQator">
              <div className="heroNuqtalar">
                <span className="heroNuqta heroNuqtaFaol"></span>
                <span className="heroNuqta"></span>
                <span className="heroNuqta"></span>
              </div>
              <div>
                <div className="heroInfoNom">Delivery within 24 hours</div>
                <div className="heroInfoSub">Free shipping on all orders</div>
              </div>
            </div>
          </div>

          <div className="heroTugmaQator">
            <button className="tugma tugma--yashil" type="button">Shop now</button>
            <button className="tugma tugma--oq heroVideo" type="button">
              <span className="heroPlay">▶</span> Video
            </button>
          </div>
        </div>

        <div className="heroPastNuqta">
          <span className="heroDot heroDotFaol"></span>
          <span className="heroDot"></span>
          <span className="heroDot"></span>
        </div>
      </div>
    </section>
  );
}
