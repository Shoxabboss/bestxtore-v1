import "./BoLim.css";

export default function BoLim({ nom }) {
  return (
    <div className="bolim">
      <div className="bolimNom">{nom}</div>
      <div className="bolimTugma">
        <button type="button">‹</button>
        <button type="button">›</button>
      </div>
    </div>
  );
}
