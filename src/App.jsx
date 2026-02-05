import { Routes, Route, Navigate } from "react-router-dom";
import BoshSahifa from "./pages/BoshSahifa/BoshSahifa";
import Shop from "./pages/Shop/Shop";
import Blog from "./pages/Blog/Blog";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BoshSahifa />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
