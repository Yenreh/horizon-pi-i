import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import Definition from "./pages/diseases/cataracts/definition/definition";
import Myopia from "./pages/diseases/myopia/definition/myopia";
import NotFound from "./pages/not-found/NotFound";
import "./index.css";
import Layout from "./layout/Layout";
// import App from "./App";

createRoot(document.getElementById("root")).render(
    // <App />
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
