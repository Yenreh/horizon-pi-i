import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import Definition from "./pages/diseases/cataracts/definition/definition";
import Myopia from "./pages/diseases/myopia/definition/Myopia";
import NotFound from "./pages/not-found/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Layout from "./layout/Layout";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/cataratas" element={<Definition />} />
                <Route path="/miopia" element={<Myopia />} />
            </Routes>
        </Layout>
    </BrowserRouter>
);
