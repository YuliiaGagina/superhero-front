import { Loader } from "./Loader/Loader";
import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Header } from "../pages/Header/Header";

import CreateHero from "../pages/CreateHero/CreateHero";

const LazyHomePage = lazy(() => import("../pages/HomePage/HomePage"));
const LazyHeroDetailsPage = lazy(() =>
  import("../pages/HeroDetailsPage/HeroDetails")
);

export const App = () => {
  return (
    <div>
      <main>
        <Suspense falback={<Loader />}>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<LazyHomePage />} />
              <Route path="/create-superhero" element={<CreateHero />} />
              <Route
                path="/superheroes/:_id"
                element={<LazyHeroDetailsPage />}
              ></Route>
              <Route path="*" element={<Navigate to="/" replace={true} />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
