import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-purple-100">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg sticky top-0 z-10">
        <div className="container mx-auto">
          <Header />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-6">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-purple-700 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-6 text-center">
          <Footer />
        </div>
      </footer>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen bg-purple-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600 border-opacity-75"></div>
        <p className="mt-4 text-lg font-semibold text-purple-800">Loading...</p>
      </div>
    </div>
  );
}

export default App;
