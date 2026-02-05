import "./Shop.css";
import Header from "../../components/Header/Header";
import ShopSarlavha from "../../components/ShopSarlavha/ShopSarlavha";
import ShopFiltr from "../../components/ShopFiltr/ShopFiltr";
import ShopGrid from "../../components/ShopGrid/ShopGrid";

import {
  shopMahsulotlar,
  shopRanglar,
  shopXotira,
  shopBrandlar,
  shopKategoriya,
  shopTopRated,
} from "../../shared/shopData";

export default function Shop() {
  const [tanKat, setTanKat] = useState("Smartphone");
  const [tanSub, setTanSub] = useState("iPhone");
  const [narxMax, setNarxMax] = useState(350);
  const [tanRanglar, setTanRanglar] = useState(["white"]);
  const [tanBrandlar, setTanBrandlar] = useState(["Apple"]);
  const [tanXotira, setTanXotira] = useState("128GB");

  const [korinish, setKorinish] = useState("grid");
  const [sort, setSort] = useState("default");
  const [sahifa, setSahifa] = useState(1);

  const [filtrOch, setFiltrOch] = useState(false);

  const tanlanganlar = {
    tanKat,
    tanSub,
    narxMax,
    tanRanglar,
    tanBrandlar,
    tanXotira,
  };

  const hammasi = shopMahsulotlar
    .filter((m) => (tanKat ? m.kategoriya === tanKat : true))
    .filter((m) => (tanSub ? m.sub === tanSub : true))
    .filter((m) => (tanBrandlar.length ? tanBrandlar.includes(m.brand) : true))
    .filter((m) => (tanRanglar.length ? tanRanglar.includes(m.rang) : true))
    .filter((m) => (tanXotira ? m.xotira === tanXotira : true))
    .filter((m) => m.narx <= narxMax);

  const tartiblangan = [...hammasi].sort((a, b) => {
    if (sort === "arzon") return a.narx - b.narx;
    if (sort === "qimmat") return b.narx - a.narx;
    if (sort === "reyting") return b.reyting - a.reyting;
    return a.id - b.id;
  });

  const pageSize = 9;
  const jamiSahifa = Math.max(1, Math.ceil(tartiblangan.length / pageSize));
  const sahifaToza = Math.min(sahifa, jamiSahifa);
  const bosh = (sahifaToza - 1) * pageSize;
  const koRinadigan = tartiblangan.slice(bosh, bosh + pageSize);

  const chiplar = [
    tanKat ? { tur: "kat", nom: tanKat } : null,
    tanSub ? { tur: "sub", nom: tanSub } : null,
    tanXotira ? { tur: "xotira", nom: tanXotira } : null,
    ...tanBrandlar.map((b) => ({ tur: "brand", nom: b })),
    ...tanRanglar.map((r) => ({ tur: "rang", nom: r })),
    { tur: "narx", nom: `Price: $0.00 - $${narxMax.toFixed(2)}` },
  ].filter(Boolean);

  function rangBosildi(id) {
    setSahifa(1);
    setTanRanglar((old) =>
      old.includes(id) ? old.filter((x) => x !== id) : [...old, id]
    );
  }

  function brandBosildi(nom) {
    setSahifa(1);
    setTanBrandlar((old) =>
      old.includes(nom) ? old.filter((x) => x !== nom) : [...old, nom]
    );
  }

  function chipOchir(chip) {
    setSahifa(1);

    if (chip.tur === "kat") {
      setTanKat("");
      setTanSub("");
      return;
    }
    if (chip.tur === "sub") {
      setTanSub("");
      return;
    }
    if (chip.tur === "xotira") {
      setTanXotira("");
      return;
    }
    if (chip.tur === "brand") {
      setTanBrandlar((old) => old.filter((x) => x !== chip.nom));
      return;
    }
    if (chip.tur === "rang") {
      setTanRanglar((old) => old.filter((x) => x !== chip.nom));
      return;
    }
    if (chip.tur === "narx") {
      setNarxMax(350);
      return;
    }
  }

  function hammasiniTozala() {
    setTanKat("Smartphone");
    setTanSub("iPhone");
    setNarxMax(350);
    setTanRanglar([]);
    setTanBrandlar([]);
    setTanXotira("");
    setSort("default");
    setKorinish("grid");
    setSahifa(1);
  }

  return (
    <div className="shopSahifa">
      <Header />
      <ShopSarlavha />

      <div className="konteyner shopQavat">
        <aside className={filtrOch ? "shopChap shopChap--och" : "shopChap"}>
          <ShopFiltr
            kategoriyalar={shopKategoriya}
            ranglar={shopRanglar}
            brandlar={shopBrandlar}
            xotira={shopXotira}
            topRated={shopTopRated}
            tanlanganlar={tanlanganlar}
            setTanKat={(v) => {
              setSahifa(1);
              setTanKat(v);
            }}
            setTanSub={(v) => {
              setSahifa(1);
              setTanSub(v);
            }}
            setNarxMax={(v) => {
              setSahifa(1);
              setNarxMax(v);
            }}
            rangBosildi={rangBosildi}
            brandBosildi={brandBosildi}
            setTanXotira={(v) => {
              setSahifa(1);
              setTanXotira(v);
            }}
          />

          <div className="shopChapBanner">
            <div className="shopChapBannerIch">
              <div className="shopChapBannerOlma"></div>
              <div className="shopChapBannerNom">Apple Watch Series 8</div>
              <div className="shopChapBannerSub">Sale up to 60%</div>
            </div>
          </div>
        </aside>

        <main className="shopOng">
          <div className="shopTopBar">
            <div className="shopView">
              <button
                type="button"
                className={korinish === "grid" ? "shopViewBtn shopViewBtn--faol" : "shopViewBtn"}
                onClick={() => setKorinish("grid")}
              >
                ⬛⬛
              </button>
              <button
                type="button"
                className={korinish === "list" ? "shopViewBtn shopViewBtn--faol" : "shopViewBtn"}
                onClick={() => setKorinish("list")}
              >
                ☰
              </button>

              <button
                type="button"
                className="shopFiltrMobil"
                onClick={() => setFiltrOch((p) => !p)}
              >
                Filters
              </button>
            </div>

            <div className="shopNatija">
              Showing {bosh + 1}-{Math.min(bosh + pageSize, tartiblangan.length)} of{" "}
              {tartiblangan.length} result
            </div>

            <select
              className="shopSelect"
              value={sort}
              onChange={(e) => {
                setSahifa(1);
                setSort(e.target.value);
              }}
            >
              <option value="default">Default Sorting</option>
              <option value="arzon">Price: Low to High</option>
              <option value="qimmat">Price: High to Low</option>
              <option value="reyting">Rating</option>
            </select>
          </div>

          <div className="shopChipQator">
            {chiplar.map((c, i) => (
              <button className="shopChip" type="button" key={i} onClick={() => chipOchir(c)}>
                {c.nom} <span className="shopChipX">×</span>
              </button>
            ))}

            <button className="shopClear" type="button" onClick={hammasiniTozala}>
              Clear All
            </button>
          </div>

          <ShopGrid
            korinish={korinish}
            mahsulotlar={koRinadigan}
          />

          <div className="shopPagination">
            {Array(jamiSahifa)
              .fill(0)
              .map((_, i) => {
                const p = i + 1;
                return (
                  <button
                    type="button"
                    className={p === sahifaToza ? "shopPage shopPage--faol" : "shopPage"}
                    key={p}
                    onClick={() => setSahifa(p)}
                  >
                    {p}
                  </button>
                );
              })}
          </div>
        </main>
      </div>
    </div>
  );
}

import { useState } from "react";
