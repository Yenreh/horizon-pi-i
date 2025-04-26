import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Suspense, lazy } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Layout from "./layout/Layout";

const Home = lazy(() => import("./pages/home/Home"));
const Definition = lazy(() => import("./pages/diseases/cataracts/definition/definition"));
const Myopia = lazy(() => import("./pages/diseases/myopia/Myopia.jsx"));
const NotFound = lazy(() => import("./pages/not-found/NotFound"));

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Layout>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/cataratas" element={<Definition />} />
                    <Route path="/miopia" element={<Myopia />} />
                </Routes>
            </Suspense>
        </Layout>
    </BrowserRouter>
);
