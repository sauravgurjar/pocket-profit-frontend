import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./router/routes";
import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./components/ui/PageLoader";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {routes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

