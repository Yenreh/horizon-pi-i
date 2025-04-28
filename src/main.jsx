import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Suspense, lazy } from "react";
import Layout from "./layout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

const Home = lazy(() => import("./pages/home/Home"));
const Cataracts = lazy(() => import("./pages/diseases/cataracts/Cataracts"));
const Myopia = lazy(() => import("./pages/diseases/myopia/Myopia.jsx"));
const Conjunctivitis = lazy(() => import("./pages/diseases/conjunctivitis/Conjunctivitis.jsx"));
const NotFound = lazy(() => import("./pages/not-found/NotFound"));

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Layout>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/cataratas" element={<Cataracts />} />
                    <Route path="/miopia" element={<Myopia />} />
                    <Route path="/conjuntivitis" element={<Conjunctivitis />} />
                </Routes>
            </Suspense>
        </Layout>
    </BrowserRouter>
);
