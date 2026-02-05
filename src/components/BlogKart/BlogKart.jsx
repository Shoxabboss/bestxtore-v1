import "./BlogKart.css";

export default function BlogKart({ p }) {
  return (
    <div className={p.katta ? "bKart bKart--katta" : "bKart"}>
      <div className="bKartRasm">
        <img src={p.rasm} alt="" />
        {p.katta && (
          <button type="button" className="bReadMore">
            READ MORE <span className="bReadSt">→</span>
          </button>
        )}
      </div>

      <div className="bKartPast">
        <div className="bTeglar">
          {p.teglar.slice(0, 3).map((t) => (
            <span className="bTeg" key={t}>{t}</span>
          ))}
        </div>

        <div className="bSarl">{p.sarlavha}</div>
      </div>
    </div>
  );
}
