import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/site/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-4xl font-bold text-brand">404</h1>
        <p className="text-lg text-black/60">Oops! Page not found</p>
        <Link to="/" className="font-medium text-brand underline">
          Return to Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
