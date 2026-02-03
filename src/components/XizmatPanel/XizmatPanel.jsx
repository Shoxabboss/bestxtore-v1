import "./XizmatPanel.css";
import { xizmatlar } from "../../shared/maketData";

export default function XizmatPanel() {
  return (
    <section className="xizmat">
      <div className="xizmatQator">
        {xizmatlar.map((x, i) => (
          <div
            className={x.rang === "yashil" ? "xizmatKart xizmatKartYashil" : "xizmatKart"}
            key={i}
          >
            <div className="xizmatIkonBox">
              <span className="xizmatBelgi">{x.belgi}</span>
            </div>
            <div>
              <div className="xizmatNom">{x.nom}</div>
              <div className="xizmatSub">{x.izoh}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
