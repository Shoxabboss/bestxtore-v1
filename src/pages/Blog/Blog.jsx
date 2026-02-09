import "./Blog.css";
import { useMemo, useState } from "react";
import Header from "../../components/Header/Header";
import BlogSarlavha from "../../components/BlogSarlavha/BlogSarlavha";
import BlogFiltr from "../../components/BlogFiltr/BlogFiltr";
import BlogGrid from "../../components/BlogGrid/BlogGrid";


export default function Blog({ data, ui }) {
  const { blogKategoriyalar, blogPostlar, blogYangiPostlar } = data;

  const [tanAsosiy, setTanAsosiy] = useState("Tips (96)");
  const [tanSub, setTanSub] = useState("All (96)");
  const [sort, setSort] = useState("default");
  const [sahifa, setSahifa] = useState(1);

  const pageSize = 12;

  const filtrlangan = useMemo(() => {
    const subToza = (tanSub || "").split(" ")[0];
    const asosToza = (tanAsosiy || "").split(" ")[0];

    let r = [...blogPostlar];

    if (asosToza && asosToza !== "Tips") {
      r = r.filter((p) => p.teglar.includes(asosToza));
    }
    if (subToza && subToza !== "All") {
      r = r.filter((p) => p.teglar.includes(subToza));
    }

    if (sort === "a-z") r.sort((a, b) => a.sarlavha.localeCompare(b.sarlavha));
    if (sort === "z-a") r.sort((a, b) => b.sarlavha.localeCompare(a.sarlavha));
    if (sort === "katta") r.sort((a, b) => Number(!!b.katta) - Number(!!a.katta));

    return r;
  }, [tanAsosiy, tanSub, sort, blogPostlar]);

  const jamiSahifa = Math.max(1, Math.ceil(filtrlangan.length / pageSize));
  const sahifaToza = Math.min(sahifa, jamiSahifa);
  const bosh = (sahifaToza - 1) * pageSize;
  const koRinadigan = filtrlangan.slice(bosh, bosh + pageSize);

  return (
    <div className="blogSahifa">
      <Header data={ui} />
      <BlogSarlavha />

      <div className="konteyner blogQavat">
        <aside className="blogChap">
          <BlogFiltr
            kategoriyalar={blogKategoriyalar}
            yangiPostlar={blogYangiPostlar}
            tanAsosiy={tanAsosiy}
            tanSub={tanSub}
            setTanAsosiy={(v) => {
              setSahifa(1);
              setTanAsosiy(v);
            }}
            setTanSub={(v) => {
              setSahifa(1);
              setTanSub(v);
            }}
          />

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
              Showing {bosh + 1}-{Math.min(bosh + pageSize, filtrlangan.length)} of{" "}
              {filtrlangan.length} result
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
