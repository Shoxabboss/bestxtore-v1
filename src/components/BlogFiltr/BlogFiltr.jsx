import "./BlogFiltr.css";

export default function BlogFiltr({
  kategoriyalar,
  yangiPostlar,
  tanAsosiy,
  tanSub,
  setTanAsosiy,
  setTanSub,
}) {
  

  return (
    <div className="bFiltr">
      <div className="bFiltrSarl">Categories</div>

      <div className="bFiltrBox">
        {kategoriyalar.map((k) => (
          <div className="bFiltrKat" key={k.nom}>
            <button
              type="button"
              className={tanAsosiy === k.nom ? "bKatBtn bKatBtn--faol" : "bKatBtn"}
              onClick={() => {
                setTanAsosiy(k.nom);
                setTanSub(k.sub[0]);
              }}
            >
              {k.nom}
              <span className="bKatStrelka">▾</span>
            </button>

            {tanAsosiy === k.nom && (
              <div className="bSub">
                {k.sub.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={tanSub === s ? "bSubBtn bSubBtn--faol" : "bSubBtn"}
                    onClick={() => setTanSub(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
                                        
      <div className="bFiltrSarl bFiltrSarl--oraliq">New Posts</div>
      <div className="bFiltrBox bFiltrBox--pad">
        <div className="bYangi">
          {yangiPostlar.map((p) => (
            <div className="bYangiKart" key={p.id}>
              <div className="bYangiRasm">
                <img src={p.rasm} alt="" />
              </div>
              <div className="bYangiTag">
                {p.teglar.map((t) => (
                  <span className="bTag" key={t}>{t}</span>
                ))}
              </div>
              <div className="bYangiMatn">{p.matn}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
