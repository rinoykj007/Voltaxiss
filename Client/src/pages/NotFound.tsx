import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import WhatsAppButton from "../components/WhatsAppButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <div className="flex flex-col items-center gap-4">
          <a href="/" className="text-blue-500 underline hover:text-blue-700">
            Return to Home
          </a>
          <div className="pt-4">
            <p className="mb-2 text-sm text-gray-500">Need help? Contact us on WhatsApp</p>
            <WhatsAppButton
              phone="00966591351561"
              message="Hello, I need help navigating your website."
              label="Contact Support"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
