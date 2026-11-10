"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

export function LoginScreen({ onLoginSuccess }: LoginScreenProps) {
  const [email, setEmail] = useState("analista@verticeagro.com");
  const [password, setPassword] = useState("••••••••");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLoginSuccess();
    }, 750);
  };

  return (
    <div className="flex h-screen w-full bg-white select-none overflow-hidden font-sans">
      {/* ======================================================== */}
      {/* 1. LEFT PANEL: LOGIN FORM (Matching User Print & Figma)  */}
      {/* ======================================================== */}
      <div className="w-full lg:w-[44%] xl:w-[42%] flex flex-col items-center justify-center p-8 sm:p-12 z-10 shrink-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-[370px] flex flex-col"
        >
          {/* Logo container */}
          <div className="flex justify-center items-center mb-7 relative">
            <motion.img
              whileHover={!loading ? { scale: 1.02 } : undefined}
              animate={
                loading
                  ? {
                      scale: [1, 1.06, 1.02, 0.95],
                      y: [0, -4, -2, -16],
                      opacity: [1, 1, 0.85, 0],
                    }
                  : {
                      scale: 1,
                      y: 0,
                      opacity: 1,
                    }
              }
              transition={
                loading
                  ? { duration: 0.75, ease: [0.2, 0.9, 0.3, 1] }
                  : { duration: 0.3 }
              }
              src="/assets/tx-logo-assinatura.svg"
              alt="TecnologyX — Tecnologia, Dados e Automação"
              className="w-full max-w-[330px] h-auto max-h-[108px] object-contain cursor-pointer"
            />
          </div>

          {/* Form */}
          <motion.form
            animate={
              loading
                ? { opacity: 0.2, y: 8 }
                : { opacity: 1, y: 0 }
            }
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            {/* Email / User field */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="user-email"
                className="text-[13px] font-medium text-[#374151]"
              >
                Email ou usuário
              </label>
              <input
                id="user-email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Coloque seu email ou usuário"
                required
                className="h-[42px] w-full rounded-[8px] border border-[#e5e7eb] bg-[#f9fafb] px-3.5 text-[13.5px] text-[#1f2937] placeholder-[#9ca3af] transition-all focus:border-[#2f7bff] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00c8f8]/20"
              />
            </div>

            {/* Password field */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="user-password"
                className="text-[13px] font-medium text-[#374151]"
              >
                Senha
              </label>
              <div className="relative flex items-center">
                <input
                  id="user-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  required
                  className="h-[42px] w-full rounded-[8px] border border-[#e5e7eb] bg-[#f9fafb] pl-3.5 pr-10 text-[13.5px] text-[#1f2937] placeholder-[#9ca3af] transition-all focus:border-[#2f7bff] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00c8f8]/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Ocultar senha" : "Exibir senha"}
                  className="absolute right-2.5 p-1 text-[#9ca3af] hover:text-[#4b5563] transition-colors"
                >
                  {showPassword ? (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Forgot password */}
            <div className="flex justify-end -mt-1 mb-1">
              <a
                href="#forgot"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Instruções de recuperação foram enviadas para o email cadastrado.");
                }}
                className="text-[12px] text-[#2f7bff] underline hover:text-[#0e2a5c] transition-colors"
              >
                Esqueceu a senha?
              </a>
            </div>

            {/* Submit button */}
            <motion.button
              whileHover={{ scale: 1.015, boxShadow: "0 6px 20px rgba(0,200,248,0.5)" }}
              whileTap={{ scale: 0.985 }}
              type="submit"
              disabled={loading}
              className="mt-1 flex h-[44px] w-full items-center justify-center rounded-[8px] bg-gradient-to-r from-[#00c8f8] to-[#2f7bff] hover:from-[#00b4e0] hover:to-[#1a6cf0] font-semibold text-white shadow-[0_4px_18px_rgba(0,200,248,0.38)] transition-all cursor-pointer"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Entrando...</span>
                </span>
              ) : (
                "Entrar na plataforma"
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>

      {/* ======================================================== */}
      {/* 2. RIGHT PANEL: AGRO COLLAGE & HEX360 BRANDING          */}
      {/* ======================================================== */}
      <div
        className="hidden lg:block flex-1 h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/login-hero-2x.jpg')`,
        }}
        role="img"
        aria-label="Paisagens rurais, rebanho bovino e marca HEX 360"
      />
    </div>
  );
}

