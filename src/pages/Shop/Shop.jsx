import { useState } from "react";
import "./Shop.css";
import Header from "../../components/Header/Header";
import ShopSarlavha from "../../components/ShopSarlavha/ShopSarlavha";
import ShopGrid from "../../components/ShopGrid/ShopGrid";

export default function Shop({ data, ui }) {
  const { shopMahsulotlar } = data;

  const [korinish, setKorinish] = useState("grid");
  const [sort, setSort] = useState("default");
  const [sahifa, setSahifa] = useState(1);
  const [filtrOch, setFiltrOch] = useState(false);

  const tartiblangan = [...shopMahsulotlar].sort((a, b) => {
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

  return (
    <div className="shopSahifa">
      <Header data={ui} />
      <ShopSarlavha />

      <div className="konteyner shopQavat">
        <aside className={filtrOch ? "shopChap shopChap--och" : "shopChap"}>
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
                Menu
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

          <ShopGrid korinish={korinish} mahsulotlar={koRinadigan} />

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
