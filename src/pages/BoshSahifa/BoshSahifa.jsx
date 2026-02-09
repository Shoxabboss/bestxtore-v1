import "./BoshSahifa.css";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import XizmatPanel from "../../components/XizmatPanel/XizmatPanel";
import BoLim from "../../components/BoLim/BoLim";

export default function BoshSahifa({ data }) {
  const {
    rasm,
    ikon,
    xizmatlar,
    flashSale,
    kategoriyalar,
    newArrivals,
    bestSellers,
    topRated,
  } = data;

  return (
    <div className="sahifa">
      <Header data={data} />
      <Hero rasm={rasm} />

      <div className="konteyner">
        <XizmatPanel xizmatlar={xizmatlar} />

        <BoLim nom="Flash Sale" />
        <div className="katak2">
          {flashSale.map((m) => (
            <div className="kart" key={m.id}>
              <div className="kart__rasmQism">
                <img className="kart__rasm" src={m.rasm} alt="" />
                <div className="kart__yorliq">{m.sotuv}</div>
                <div className="kart__chegirma">{m.chegirma}</div>
              </div>

              <div className="kart__ich">
                <div className="kart__nom">{m.nom}</div>
                <div className="kart__narxQator">
                  <span className="kart__narx">${m.narx.toFixed(2)}</span>
                  <span className="kart__eski">${m.eski.toFixed(2)}</span>
                </div>

                <div className="kart__reyting">
                  <img className="kart__yulduz" src={ikon.yulduz} alt="" />
                  <span>{m.reyting}</span>
                </div>

                <button className="kart__savat" type="button">
                  <img className="kart__savatIkon" src={ikon.savat} alt="" />
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <BoLim nom="Categories" />
        <div className="katak3">
          {kategoriyalar.map((k) => (
            <div className="katKart" key={k.id}>
              <div className="katKart__nom">{k.nom}</div>
              <div className="katKart__roYxat">
                {k.items.map((t, i) => (
                  <div className="katKart__item" key={i}>{t}</div>
                ))}
              </div>
              <a className="katKart__link" href="#">View all →</a>
            </div>
          ))}
        </div>
      </div>

      <section className="newBanner">
        <img className="newBanner__fon" src={rasm.newArrivalsBanner} alt="" />
        <div className="konteyner newBanner__ich">
          <div className="newBanner__chap">
            <div className="newBanner__katta">New</div>
            <div className="newBanner__katta2">Arrivals</div>
          </div>
          <div className="newBanner__oNg">
            <div className="newBanner__mayda">New Collection 2023</div>
            <div className="newBanner__sarl">Apple Watch Series 8</div>
            <div className="newBanner__matn">
              Premium design, perfect display and powerful tracking.
            </div>
            <div className="newBanner__narxlar">
              <div className="newBanner__chip">Up to 60%</div>
              <div className="newBanner__chip newBanner__chip--oq">$259.00</div>
            </div>
            <button className="tugma tugma--qora">Add to cart</button>
          </div>
        </div>
      </section>

      <div className="konteyner">
        <BoLim nom="New Arrivals" />
        <div className="katak3 mahsulotKatak">
          {newArrivals.map((m) => (
            <div className="mKart" key={m.id}>
              <div className="mKart__rasmQism">
                <img className="mKart__rasm" src={m.rasm} alt="" />
                <div className="mKart__belgi">{m.belgi}</div>
              </div>

              <div className="mKart__ich">
                <div className="mKart__nom">{m.nom}</div>
                <div className="mKart__narxQator">
                  <span className="mKart__narx">${m.narx.toFixed(2)}</span>
                  <span className="mKart__eski">${m.eski.toFixed(2)}</span>
                </div>
                <div className="mKart__reyting">
                  <img className="mKart__yulduz" src={ikon.yulduz} alt="" />
                  <span>{m.reyting}</span>
                </div>
                <button className="mKart__tugma" type="button">
                  <img className="mKart__savatIkon" src={ikon.savat} alt="" />
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="ikkiBanner">
          <div className="bannerKichik">
            <div className="bannerKichik__ust">Keyboard</div>
            <div className="bannerKichik__nom">Sale 20% off</div>
            <button className="tugma tugma--oq">Shop now</button>
          </div>
          <div className="bannerKichik bannerKichik--oq">
            <div className="bannerKichik__ust">Keyboard</div>
            <div className="bannerKichik__nom">Sale 20% off</div>
            <button className="tugma tugma--qora">Shop now</button>
          </div>
        </div>

        <BoLim nom="Best Sellers" />
        <div className="katak4 mahsulotKatak">
          {bestSellers.map((m) => (
            <div className="mKart" key={m.id}>
              <div className="mKart__rasmQism">
                <img className="mKart__rasm" src={m.rasm} alt="" />
                <div className="mKart__belgi">{m.belgi}</div>
              </div>

              <div className="mKart__ich">
                <div className="mKart__nom">{m.nom}</div>
                <div className="mKart__narxQator">
                  <span className="mKart__narx">${m.narx.toFixed(2)}</span>
                  <span className="mKart__eski">${m.eski.toFixed(2)}</span>
                </div>
                <div className="mKart__reyting">
                  <img className="mKart__yulduz" src={ikon.yulduz} alt="" />
                  <span>{m.reyting}</span>
                </div>
                <button className="mKart__tugma" type="button">
                  <img className="mKart__savatIkon" src={ikon.savat} alt="" />
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="macBanner">
        <img className="macBanner__fon" src={rasm.macbookBanner} alt="" />
        <div className="konteyner macBanner__ich">
          <div className="macBanner__chap">
            <div className="macBanner__sarl">Apple MacBook</div>
            <div className="macBanner__katta">Air M1 256GB 2023</div>
            <div className="macBanner__roYxat">
              <div>10% off with paying by credit card</div>
              <div>Free delivery within 24 hours</div>
              <div>Limited stock available</div>
            </div>
          </div>
          <div className="macBanner__oNg">
            <div className="macBanner__narx">$655.00</div>
            <div className="macBanner__mayda">10% off with paying by credit card</div>
            <button className="tugma tugma--qora">Add to cart</button>
          </div>
        </div>
      </section>

      <div className="konteyner">
        <BoLim nom="Top Rated Products" />
        <div className="topRated">
          <div className="topRated__katta">
            <div className="topRated__ich">
              <div className="topRated__nom">iPhone 14 Plus</div>
              <div className="topRated__sub">Available in store</div>
            </div>
            <img className="topRated__rasm" src={rasm.telefonQora} alt="" />
          </div>

          <div className="topRated__yon">
            {topRated.map((m) => (
              <div className="topRated__qator" key={m.id}>
                <img className="topRated__mini" src={m.rasm} alt="" />
                <div className="topRated__matnlar">
                  <div className="topRated__qnom">{m.nom}</div>
                  <div className="topRated__qnarx">
                    <span className="topRated__qnarxAsos">${m.narx.toFixed(2)}</span>
                    <span className="topRated__qnarxEski">${m.eski.toFixed(2)}</span>
                  </div>
                  <div className="topRated__qreyting">
                    <img className="topRated__yulduz" src={ikon.yulduz} alt="" />
                    <span>{m.reyting}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <BoLim nom="Feedbacks" />
        <div className="feedback">
          <div className="feedback__kart">
            <div className="feedback__matn">
              Very good quality and fast delivery. I liked the packing and support.
            </div>
            <div className="feedback__past">
              <div className="feedback__ism">John R.</div>
              <div className="feedback__yulduzlar">
                <img src={ikon.yulduz} alt="" />
                <img src={ikon.yulduz} alt="" />
                <img src={ikon.yulduz} alt="" />
                <img src={ikon.yulduz} alt="" />
                <img src={ikon.yulduz} alt="" />
              </div>
            </div>
          </div>

          <div className="feedback__kart">
            <div className="feedback__matn">
              Nice prices, clean website, products arrived on time. Recommended.
            </div>
            <div className="feedback__past">
              <div className="feedback__ism">Sarah M.</div>
              <div className="feedback__yulduzlar">
                <img src={ikon.yulduz} alt="" />
                <img src={ikon.yulduz} alt="" />
                <img src={ikon.yulduz} alt="" />
                <img src={ikon.yulduz} alt="" />
                <img src={ikon.yulduz} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="insta">
          <div className="insta__katta">
            <img className="insta__ikon" src={ikon.instagram} alt="" />
            <div className="insta__tag">@bestxtore</div>
          </div>
          <div className="insta__katak">
            {[1, 2, 3, 4, 5].map((n) => (
              <div className="insta__blok" key={n}></div>
            ))}
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="konteyner footer__ich">
          <div className="footer__chap">
            <div className="footer__logo">BESTXTORE</div>
            <div className="footer__matn">
              Best electronics store template. Simple and clean layout.
            </div>

            <div className="footer__inputQator">
              <input className="footer__input" placeholder="Your email" />
              <button className="footer__btn">Submit</button>
            </div>
          </div>

          <div className="footer__ustun">
            <div className="footer__sarl">Customer Service</div>
            <a className="footer__link" href="#">Contact Us</a>
            <a className="footer__link" href="#">Returns</a>
            <a className="footer__link" href="#">Payments</a>
            <a className="footer__link" href="#">Terms</a>
          </div>

          <div className="footer__ustun">
            <div className="footer__sarl">About Us</div>
            <a className="footer__link" href="#">Our Story</a>
            <a className="footer__link" href="#">Blog</a>
            <a className="footer__link" href="#">FAQ</a>
            <a className="footer__link" href="#">Privacy</a>
          </div>

          <div className="footer__ustun">
            <div className="footer__sarl">Contact Us</div>
            <div className="footer__mayda">bestxtore@gmail.com</div>
            <div className="footer__mayda">0129523523</div>
            <div className="footer__mayda">Tashkent, UZ</div>
          </div>
        </div>

        <div className="footer__past">
          <div className="konteyner footer__pastIch">
            <div>Copyright © BESTXTORE</div>
            <div className="footer__kartalar">VISA • Master • PayPal</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
