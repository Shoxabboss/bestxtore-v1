import "./ShopGrid.css";
import ShopKart from "../ShopKart/ShopKart";

export default function ShopGrid({ mahsulotlar, korinish }) {
  return (
    <div className={korinish === "list" ? "grid grid--list" : "grid"}>
      {mahsulotlar.map((m) => (
        <ShopKart key={m.id} m={m} korinish={korinish} />
      ))}
    </div>
  );
}
