import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const Blog = lazy(() => import("../pages/Blog"));
const BlogPost = lazy(() => import("../pages/BlogPost"));
const Calculators = lazy(() => import("../pages/Calculators"));
const CreditCards = lazy(() => import("../pages/CreditCards"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Privacy = lazy(() => import("../pages/Privacy"));
const Terms = lazy(() => import("../pages/Terms"));

const withLayout = (node) => <MainLayout>{node}</MainLayout>;

export const routes = [
  { path: "/", element: withLayout(<Home />) },
  { path: "/blog", element: withLayout(<Blog />) },
  { path: "/blog/:slug", element: withLayout(<BlogPost />) },
  { path: "/calculators", element: withLayout(<Calculators />) },
  { path: "/credit-cards", element: withLayout(<CreditCards />) },
  { path: "/about", element: withLayout(<About />) },
  { path: "/contact", element: withLayout(<Contact />) },
  { path: "/privacy", element: withLayout(<Privacy />) },
  { path: "/terms", element: withLayout(<Terms />) },
];
