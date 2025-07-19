import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Sidebar from "../src/components/Sidebar";

const MainLayout = ({ children }) => {
  const location = useLocation();

  // Sidebar visible only on certain routes
  const showSidebar = location.pathname.startsWith("/asanas") || location.pathname.startsWith("/literature");

  return (
    <div className="min-h-screen flex flex-col bg-offwhite text-accenttext font-sans">
      <Navbar />

      <div className="flex flex-1">
        {showSidebar && (
          <aside className="hidden lg:block sticky top-0 h-screen w-64 bg-beige shadow-inner overflow-y-auto">
            <Sidebar />
          </aside>
        )}

        <main className={`flex-1 p-4 lg:p-8 ${showSidebar ? "lg:ml-0" : ""}`}>
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
