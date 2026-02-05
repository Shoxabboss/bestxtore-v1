import "./BlogGrid.css";
import BlogKart from "../BlogKart/BlogKart";

export default function BlogGrid({ postlar }) {
  return (
    <div className="bGrid">
      {postlar.map((p) => (
        <BlogKart key={p.id} p={p} />
      ))}
    </div>
  );
}
