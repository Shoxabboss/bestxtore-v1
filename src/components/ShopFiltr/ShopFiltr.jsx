import "./ShopFiltr.css";

export default function ShopFiltr({
  kategoriyalar,
  ranglar,
  brandlar,
  xotira,
  topRated,
  tanlanganlar,
  setTanKat,
  setTanSub,
  setNarxMax,
  rangBosildi,
  brandBosildi,
  setTanXotira,
}) {
  const { tanKat, tanSub, narxMax, tanRanglar, tanBrandlar, tanXotira } = tanlanganlar;

  return (
    <div className="filtr">
      <div className="filtrSarl">Categories</div>

      <div className="filtrBox">
        {kategoriyalar.map((k) => (
          <div className="filtrKat" key={k.nom}>
            <button
              type="button"
              className={tanKat === k.nom ? "filtrKatBtn filtrKatBtn--faol" : "filtrKatBtn"}
              onClick={() => {
                setTanKat(k.nom);
                setTanSub(k.sub[0] || "");
              }}
            >
              {k.nom}
              <span className="filtrKatStrelka">▾</span>
            </button>

            {tanKat === k.nom && (
              <div className="filtrSub">
                {k.sub.map((s) => (
                  <button
                    key={s}
                    type="button"
                    className={tanSub === s ? "filtrSubBtn filtrSubBtn--faol" : "filtrSubBtn"}
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

      <div className="filtrSarl filtrSarl--oraliq">Price</div>
      <div className="filtrBox filtrBox--pad">
        <input
          className="filtrRange"
          type="range"
          min="25"
          max="350"
          value={narxMax}
          onChange={(e) => setNarxMax(Number(e.target.value))}
        />
        <div className="filtrRangePast">
          <div>Range:</div>
          <div className="filtrNarx">${(25).toFixed(2)} - ${narxMax.toFixed(2)}</div>
        </div>
      </div>

      <div className="filtrSarl filtrSarl--oraliq">Color</div>
      <div className="filtrBox filtrBox--pad">
        <div className="filtrRanglar">
          {ranglar.map((r) => (
            <button
              key={r.id}
              type="button"
              className={tanRanglar.includes(r.id) ? "filtrRang filtrRang--faol" : "filtrRang"}
              onClick={() => rangBosildi(r.id)}
              aria-label={r.nom}
              data-rang={r.id}
            ></button>
          ))}
        </div>
      </div>

      <div className="filtrSarl filtrSarl--oraliq">Brands</div>
      <div className="filtrBox filtrBox--pad">
        <div className="filtrChiplar">
          {brandlar.map((b) => (
            <button
              key={b}
              type="button"
              className={tanBrandlar.includes(b) ? "filtrChip filtrChip--faol" : "filtrChip"}
              onClick={() => brandBosildi(b)}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <div className="filtrSarl filtrSarl--oraliq">Memory</div>
      <div className="filtrBox filtrBox--pad">
        <div className="filtrChiplar">
          {xotira.map((x) => (
            <button
              key={x}
              type="button"
              className={tanXotira === x ? "filtrChip filtrChip--faol" : "filtrChip"}
              onClick={() => setTanXotira(x)}
            >
              {x}
            </button>
          ))}
        </div>
      </div>

      <div className="filtrSarl filtrSarl--oraliq">Top Rated Products</div>
      <div className="filtrBox filtrBox--pad">
        <div className="filtrTop">
          {topRated.map((t) => (
            <div className="filtrTopQator" key={t.id}>
              <div className="filtrTopRasm"></div>
              <div className="filtrTopMatn">
                <div className="filtrTopNarx">${t.narx.toFixed(2)}</div>
                <div className="filtrTopNom">{t.nom}</div>
                <div className="filtrTopSub">{t.reyting} ⭐ • {t.sharh} Reviews</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
