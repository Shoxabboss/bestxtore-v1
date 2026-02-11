import "./Blog.css";
import { useState } from "react";
import Header from "../../components/Header/Header";
import BlogSarlavha from "../../components/BlogSarlavha/BlogSarlavha";
import BlogGrid from "../../components/BlogGrid/BlogGrid";

export default function Blog({ data, ui }) {
  const { blogPostlar } = data;

  const [sort, setSort] = useState("default");
  const [sahifa, setSahifa] = useState(1);

  const pageSize = 12;

  const tartiblangan = [...blogPostlar].sort((a, b) => {
    if (sort === "a-z") return a.sarlavha.localeCompare(b.sarlavha);
    if (sort === "z-a") return b.sarlavha.localeCompare(a.sarlavha);
    if (sort === "katta") return Number(!!b.katta) - Number(!!a.katta);
    return a.id - b.id;
  });

  const jamiSahifa = Math.max(1, Math.ceil(tartiblangan.length / pageSize));
  const sahifaToza = Math.min(sahifa, jamiSahifa);
  const bosh = (sahifaToza - 1) * pageSize;
  const koRinadigan = tartiblangan.slice(bosh, bosh + pageSize);

  return (
    <div className="blogSahifa">
      <Header data={ui} />
      <BlogSarlavha />

      <div className="konteyner blogQavat">
        <aside className="blogChap">
          <div className="blogReklama">
            <div className="blogReklamaIch">
              <div className="blogReklamaOlma"></div>
              <div className="blogReklamaKichik">Introducing</div>
              <div className="blogReklamaNom">MacBook Pro</div>
              <div className="blogReklamaNarx">
                <span>Price only</span>
                <b>$899.00</b>
              </div>
            </div>
          </div>
        </aside>

        <main className="blogOng">
          <div className="blogTopBar">
            <div className="blogNatija">
              Showing {bosh + 1}-{Math.min(bosh + pageSize, tartiblangan.length)} of{" "}
              {tartiblangan.length} result
            </div>

            <select
              className="blogSelect"
              value={sort}
              onChange={(e) => {
                setSahifa(1);
                setSort(e.target.value);
              }}
            >
              <option value="default">Default Sorting</option>
              <option value="katta">Featured First</option>
              <option value="a-z">Title: A-Z</option>
              <option value="z-a">Title: Z-A</option>
            </select>
          </div>

          <BlogGrid postlar={koRinadigan} />

          <div className="blogPagination">
            {Array(jamiSahifa)
              .fill(0)
              .map((_, i) => {
                const p = i + 1;
                return (
                  <button
                    type="button"
                    className={p === sahifaToza ? "blogPage blogPage--faol" : "blogPage"}
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
