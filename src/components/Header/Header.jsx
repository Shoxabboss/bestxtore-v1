import "./Header.css";
import { ikon, menyu, rasm } from "../../shared/maketData";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="headerYuqori">
        <div className="konteyner headerYuqoriIch">
          <div className="headerAloqa">
            <span>bestxtore@gmail.com</span>
            <span className="headerNuqta"></span>
            <span>0129523523</span>
          </div>

          <div className="headerAksiya">
            Up to 50% Off All Items <span className="headerStrelka">→</span>
          </div>

          <div className="headerSozlama">
            <span>Track Your Order</span>
            <span className="headerNuqta"></span>
            <span>🇺🇸 ▾</span>
            <span className="headerNuqta"></span>
            <span>USD ▾</span>
          </div>
        </div>
      </div>

      <div className="headerOrta">
        <div className="konteyner headerOrtaIch">
          <Link to="/" className="headerBrend">
            <img className="headerLogo" src={rasm.logo} alt="" />
            <div className="headerNomi">BESTXTORE</div>
          </Link>

          <div className="headerQidiruv">
            <input className="headerInput" placeholder="Search..." />
            <div className="headerChiziq"></div>

            <button className="headerKategoriya" type="button">
              All Categories <span className="headerCaret">▾</span>
            </button>

            <button className="headerQidirBtn" type="button">
              <img
                className="headerIkon headerIkonOq"
                src={ikon.qidiruv}
                alt=""
              />
            </button>
          </div>

          <div className="headerAmal">
            <button className="headerIkonBtn" type="button">
              <img className="headerIkon" src={ikon.yurak} alt="" />
              <span className="headerBadge">3</span>
            </button>

            <button className="headerIkonBtn" type="button">
              <img className="headerIkon" src={ikon.solishtir} alt="" />
            </button>

            <Link to="/shop" className="headerIkonBtn" aria-label="Cart">
              <img className="headerIkon" src={ikon.savat} alt="" />
              <span className="headerBadge">2</span>
            </Link>

            <button className="headerIkonBtn" type="button">
              <img className="headerIkon" src={ikon.odam} alt="" />
            </button>

            <div className="headerDukon">
              <div className="headerDukonIkon">
                <img
                  className="headerIkon headerIkonKichik"
                  src={ikon.lokatsiya}
                  alt=""
                />
              </div>
              <div className="headerDukonMatn">
                <div className="headerDukonSarl">Stores Near You</div>
                <div className="headerDukonSub">20 Stores Nationwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="headerPast">
        <div className="konteyner headerPastIch">
          <button className="headerKatBtn" type="button">
            All Categories <span className="headerCaret">▾</span>
          </button>
                  <nav className="headerMenyu">
          {menyu.map((m) => (
            <NavLink
              key={m}
              to={m === "Product" ? "/shop" : m === "Blog" ? "/blog" : "/"}
              className={({ isActive }) =>
                isActive && (m === "Product" || m === "Blog")
                  ? "headerLink headerLinkFaol"
                  : "headerLink"
              }
            >
              {m}
            </NavLink>
          ))}
        </nav>

        </div>
      </div>
    </header>
  );
}
