"use client";

import React, { useState, useEffect } from "react";
import { AgroDashboard } from "@/components/dashboard/agro-dashboard";
import { LoginScreen } from "@/components/auth/login-screen";

export default function Home() {
  const [currentView, setCurrentView] = useState<"login" | "dashboard">("login");

  useEffect(() => {
    const handleHash = () => {
      const isAuth = typeof window !== "undefined" && sessionStorage.getItem("agro_auth") === "true";
      const hash = window.location.hash;

      if (!isAuth || hash === "#login") {
        setCurrentView("login");
        if (window.location.hash !== "#login") {
          window.location.hash = "#login";
        }
      } else {
        setCurrentView("dashboard");
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  if (currentView === "login") {
    return (
      <LoginScreen
        onLoginSuccess={() => {
          sessionStorage.setItem("agro_auth", "true");
          window.location.hash = "#home";
          setCurrentView("dashboard");
        }}
      />
    );
  }

  return (
    <AgroDashboard
      onLogout={() => {
        sessionStorage.removeItem("agro_auth");
        window.location.hash = "#login";
        setCurrentView("login");
      }}
    />
  );
}
