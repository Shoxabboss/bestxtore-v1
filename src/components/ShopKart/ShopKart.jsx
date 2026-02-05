import "./ShopKart.css";
import { ikon } from "../../shared/maketData";

export default function ShopKart({ m, korinish }) {
  return (
    <div className={korinish === "list" ? "sk sk--list" : "sk"}>
      <div className="skRasmQism">
        <img className="skRasm" src={m.rasm} alt="" />

        <div className="skBadge">{m.belgi}</div>
        <div className="skChegirma">{m.chegirma}</div>

        <div className="skHover">
          <button type="button" className="skHBtn">
            <img src={ikon.yurak} alt="" />
          </button>
          <button type="button" className="skHBtn">
            <img src={ikon.solishtir} alt="" />
          </button>
          <button type="button" className="skHBtn skHBtn--yashil">
            <img src={ikon.savat} alt="" />
          </button>
        </div>
      </div>

      <div className="skMatn">
        <div className="skNarxQator">
          <div className="skNarx">${m.narx.toFixed(2)}</div>
          <div className="skEski">${m.eski.toFixed(2)}</div>
        </div>

        <div className="skNom">{m.nom}</div>

        <div className="skRating">
          <span className="skYulduz">★★★★★</span>
          <span className="skRey">{m.reyting}</span>
          <span className="skSharh">• {m.sharh} Reviews</span>
        </div>
      </div>
    </div>
  );
}
