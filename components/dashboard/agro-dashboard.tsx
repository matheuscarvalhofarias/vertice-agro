"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Property {
  id: string;
  name: string;
  location: string;
  area: string;
  date: string;
  personId: string;
}

interface Contact {
  id: string;
  name: string;
  location: string;
  area: string;
  date: string;
  personId: string;
}

interface Commodity {
  name: string;
  price: string;
  change: string;
  type: "up" | "down" | "flat";
}

const propertiesData: Property[] = [
  { id: "p1", name: "Fazenda Santa Cruz", location: "Rondonópolis — MT", area: "1.240 ha", date: "08/04/2026", personId: "DEMO-001" },
  { id: "p2", name: "Sítio Boa Esperança", location: "Ponta Grossa — PR", area: "320 ha", date: "08/04/2026", personId: "DEMO-002" },
  { id: "p3", name: "Fazenda Rio Verde", location: "Barreiras — BA", area: "870 ha", date: "07/04/2026", personId: "DEMO-003" },
  { id: "p4", name: "Chácara Sol Nascente", location: "Ribeirão Preto — SP", area: "45 ha", date: "07/04/2026", personId: "DEMO-001" },
  { id: "p5", name: "Estância Boa Vista", location: "Campo Grande — MS", area: "2.100 ha", date: "06/04/2026", personId: "DEMO-002" },
  { id: "p6", name: "Fazenda São Bento", location: "Uberlândia — MG", area: "650 ha", date: "06/04/2026", personId: "DEMO-003" },
];

const contactsData: Contact[] = [
  { id: "c1", name: "Agropecuária Horizonte Ltda.", location: "São Desidério — BA", area: "2.480 ha", date: "08/04/2026", personId: "DEMO-001" },
  { id: "c2", name: "Mariana Costa Ribeiro", location: "Sorriso — MT", area: "1.360 ha", date: "08/04/2026", personId: "DEMO-002" },
  { id: "c3", name: "Fazendas Vale do Sol S.A.", location: "Rio Verde — GO", area: "3.200 ha", date: "07/04/2026", personId: "DEMO-003" },
  { id: "c4", name: "Carlos Eduardo Silveira", location: "Primavera do Leste — MT", area: "1.850 ha", date: "07/04/2026", personId: "DEMO-004" },
  { id: "c5", name: "Agrícola Terra Viva ME", location: "Luís Eduardo Magalhães — BA", area: "920 ha", date: "06/04/2026", personId: "DEMO-005" },
  { id: "c6", name: "João Batista de Oliveira", location: "Cristalina — GO", area: "1.100 ha", date: "06/04/2026", personId: "DEMO-006" },
];

const commoditiesData: Commodity[] = [
  { name: "Milho", price: "R$ 79.80", change: "—", type: "flat" },
  { name: "Feijão", price: "R$ 300.00", change: "3.52%", type: "up" },
  { name: "Arroz", price: "R$ 62.50", change: "—", type: "flat" },
  { name: "Soja", price: "R$ 137.40", change: "1.20%", type: "down" },
  { name: "Trigo", price: "R$ 88.00", change: "2.10%", type: "up" },
  { name: "Café", price: "R$ 1420.00", change: "5.30%", type: "up" },
  { name: "Algodão", price: "R$ 96.50", change: "0.80%", type: "down" },
  { name: "Cana", price: "R$ 4.20", change: "0.15%", type: "up" },
];

interface AgroDashboardProps {
  onLogout?: () => void;
}

export function AgroDashboard({ onLogout }: AgroDashboardProps) {
  const [activeTab, setActiveTab] = useState<"properties" | "contacts">("properties");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const filteredProperties = propertiesData.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredContacts = contactsData.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen w-full bg-[#f3f4f6] text-[#101828] font-sans overflow-hidden select-none">
      {/* ======================================================== */}
      {/* 1. SIDEBAR (80px width, matching Figma Node 3732:7220)   */}
      {/* ======================================================== */}
      <aside className="w-20 bg-white border-r border-[#edf0f4] flex flex-col justify-between items-center py-5 shrink-0 z-20">
        <div className="flex flex-col items-center w-full gap-6">
          {/* Logo TecnologyX */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 flex items-center justify-center cursor-pointer drop-shadow-[0_4px_12px_rgba(0,200,248,0.4)]"
            title="TecnologyX"
          >
            <img src="/assets/tx-logo-mark.svg" alt="TecnologyX" className="w-[36px] h-[36px] rounded-[9px] object-contain" />
          </motion.div>

          {/* Navigation */}
          <nav className="flex flex-col items-center w-full gap-3">
            {/* Nav Home (Active) */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="relative w-[55px] h-[44px] flex items-center justify-center rounded-[10px] bg-gradient-to-r from-[#00c8f8] to-[#2f7bff] text-white shadow-[0_4px_14px_rgba(47,123,255,0.38)] cursor-pointer"
              title="Início"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </motion.button>

            {/* Nav Contatos & Produtores */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
              whileTap={{ scale: 0.95 }}
              className="w-[55px] h-[44px] flex items-center justify-center rounded-[10px] text-[#4a5565] transition-colors cursor-pointer"
              title="Contatos e Produtores"
              onClick={() => {
                window.location.hash = "#contacts";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </motion.button>

            {/* Nav Contratos & Operações */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
              whileTap={{ scale: 0.95 }}
              className="w-[55px] h-[44px] flex items-center justify-center rounded-[10px] text-[#4a5565] transition-colors cursor-pointer"
              title="Contratos e Operações"
              onClick={() => {
                window.location.hash = "#credit";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </motion.button>

            {/* Nav Search */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
              whileTap={{ scale: 0.95 }}
              className="w-[55px] h-[44px] flex items-center justify-center rounded-[10px] text-[#4a5565] transition-colors cursor-pointer"
              title="Pesquisar Imóvel"
              onClick={() => setIsSearchModalOpen(true)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </motion.button>
          </nav>
        </div>

        {/* User Avatar */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="w-9 h-9 rounded-full bg-gradient-to-br from-[#123c7a] to-[#0e2a5c] text-[#00e0ff] border-2 border-[#00e0ff] flex items-center justify-center text-xs font-bold cursor-pointer shadow-[0_2px_10px_rgba(0,224,255,0.35)]"
          title="Usuário analista (Clique para sair ou voltar ao login)"
          onClick={() => {
            if (onLogout) onLogout();
            else window.location.hash = "#login";
          }}
        >
          U
        </motion.div>
      </aside>

      {/* ======================================================== */}
      {/* 2. MAIN CONTENT AREA (Figma Node 3732:6934)             */}
      {/* ======================================================== */}
      <main className="flex-1 flex flex-col p-3.5 sm:p-5 overflow-hidden min-w-0 h-screen max-h-screen">
        {/* TOP TICKER BAR (38px height - Infinite Marquee) */}
        <header className="h-[38px] bg-white border border-[#edf0f4] rounded-[14px] flex items-center px-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)] mb-3 shrink-0 overflow-hidden w-full relative">
          {/* Safras Label */}
          <div className="flex items-center gap-1.5 pr-4 border-r border-[#edf0f4] shrink-0 bg-white z-10 h-full">
            <img src="/assets/figma_3732_6938.svg" alt="" className="w-3.5 h-3.5" />
            <span className="text-xs font-semibold text-[#6a7282]">Safras</span>
          </div>

          {/* Commodities List / Infinite Marquee (Ponta a Ponta) */}
          <div className="flex-1 overflow-hidden relative h-full flex items-center [mask-image:linear-gradient(90deg,transparent,black_16px,black_calc(100%-16px),transparent)]">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
              className="flex items-center gap-8 whitespace-nowrap will-change-transform"
            >
              {[...commoditiesData, ...commoditiesData].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs">
                  <span className="font-semibold text-[#6a7282] uppercase tracking-[0.3px]">{item.name}</span>
                  <span className="font-semibold text-[#101828]">{item.price}</span>
                  <span
                    className={`flex items-center gap-0.5 font-medium ${
                      item.type === "up" ? "text-[#00bc7d]" : item.type === "down" ? "text-[#fb2c36]" : "text-[#99a1af]"
                    }`}
                  >
                    {item.type === "up" && "↑ "}
                    {item.type === "down" && "↓ "}
                    {item.change}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Ao vivo indicator */}
          <div className="flex items-center gap-1.5 pl-4 border-l border-[#edf0f4] shrink-0 bg-white z-10 h-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d492] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00d492]"></span>
            </span>
            <span className="text-xs text-[#99a1af] font-normal">Ao vivo</span>
          </div>
        </header>

        {/* TWO CARDS GRID (Full Viewport - No Whitespace - No Scroll) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full flex-1 min-h-0 overflow-hidden">
          {/* ======================================================== */}
          {/* LEFT CARD: TRACTOR / NOVA CONSULTA (Crisp Typography, No Lift) */}
          {/* ======================================================== */}
          <section
            className="relative rounded-[16px] overflow-hidden flex flex-col justify-end shadow-[0_1px_3px_rgba(0,0,0,0.02)] w-full h-full bg-cover bg-bottom bg-no-repeat"
            style={{
              backgroundImage: `url('/assets/tractor-clean-card-2x.png')`,
              backgroundColor: '#0d1522'
            }}
          >
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a101a]/95 via-[#0a101a]/70 via-40% to-transparent pointer-events-none" />

            {/* Crisp Vector Typography & CTA */}
            <div className="relative z-10 p-7 sm:p-9 flex flex-col items-start max-w-[580px]">
              <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-[#00e0ff] drop-shadow-[0_0_12px_rgba(0,224,255,0.45)] mb-2.5">
                NOVA CONSULTA
              </span>
              <h1 className="text-2xl sm:text-[32px] font-bold text-white leading-[1.18] -tracking-[0.02em] mb-3 drop-shadow-sm">
                Consulte qualquer<br />imóvel rural agora
              </h1>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300 max-w-[460px] mb-5 sm:mb-6">
                Pesquise por CPF, CNPJ, CAR ou NIRF e obtenha dados completos de vínculos, histórico e situação fundiária.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsSearchModalOpen(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00c8f8] to-[#2f7bff] hover:from-[#00b4e0] hover:to-[#1a6cf0] text-white text-sm font-semibold px-5 py-3 rounded-[12px] shadow-[0_4px_18px_rgba(0,200,248,0.45)] hover:shadow-[0_6px_24px_rgba(0,200,248,0.65)] cursor-pointer transition-all"
                aria-label="Nova Consulta"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <span>Nova Consulta</span>
              </motion.button>
            </div>
          </section>

          {/* ======================================================== */}
          {/* RIGHT CARD: CONSULTAS RECENTES (Full Space)              */}
          {/* ======================================================== */}
          <section className="bg-white border border-[#edf0f4] rounded-[16px] p-5 sm:p-6 flex flex-col shadow-[0_1px_3px_rgba(0,0,0,0.02)] w-full h-full overflow-hidden">
            {/* Header */}
            <div className="mb-2.5">
              <h2 className="text-[14.5px] font-semibold leading-[20px] text-[#101828]">
                Consultas recentes
              </h2>
              <p className="text-[11.5px] text-[#99a1af] mt-0.5">
                Últimas consultas realizadas
              </p>
            </div>

            {/* Search Input (Node 3732:7109) */}
            <div className="relative mb-2.5">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <img src="/assets/figma_3732_7109.svg" alt="" className="w-3.5 h-3.5 opacity-70" />
              </div>
              <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-[34px] bg-[#ffffff] border border-[#e5e7eb] rounded-[10px] pl-9 pr-3 text-xs text-[#101828] placeholder-[#99a1af] focus:outline-none focus:border-[#2f7bff] focus:ring-2 focus:ring-[#00c8f8]/15 transition-all"
              />
            </div>

            {/* Tabs (Node 3732:7113 / 3732:7120) */}
            <div className="flex items-center gap-5 border-b border-[#edf0f4] pb-1.5 mb-2 relative">
              {/* Tab: Propriedades */}
              <button
                onClick={() => setActiveTab("properties")}
                className={`relative flex items-center gap-1.5 text-xs pb-1.5 font-medium transition-colors cursor-pointer ${
                  activeTab === "properties" ? "text-[#0e2a5c] font-semibold" : "text-[#99a1af] hover:text-[#6a7282]"
                }`}
              >
                <img src="/assets/figma_3732_7114.svg" alt="" className="w-3.5 h-3.5" />
                <span>Propriedades</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full font-semibold border ${
                    activeTab === "properties" ? "bg-[#e8f7ff] text-[#0284c7] border-[#00c8f8]/25" : "bg-[#f3f4f6] text-[#99a1af] border-transparent"
                  }`}
                >
                  {propertiesData.length}
                </span>

                {activeTab === "properties" && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute -bottom-[9px] left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#00c8f8] to-[#2f7bff] rounded-full"
                  />
                )}
              </button>

              {/* Tab: Contatos */}
              <button
                onClick={() => setActiveTab("contacts")}
                className={`relative flex items-center gap-2 text-sm pb-2 font-medium transition-colors cursor-pointer ${
                  activeTab === "contacts" ? "text-[#0e2a5c] font-semibold" : "text-[#99a1af] hover:text-[#6a7282]"
                }`}
              >
                <img src="/assets/figma_3732_7121.svg" alt="" className="w-4 h-4" />
                <span>Contatos</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-semibold border ${
                    activeTab === "contacts" ? "bg-[#e8f7ff] text-[#0284c7] border-[#00c8f8]/25" : "bg-[#f3f4f6] text-[#99a1af] border-transparent"
                  }`}
                >
                  {contactsData.length}
                </span>

                {activeTab === "contacts" && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute -bottom-[9px] left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#00c8f8] to-[#2f7bff] rounded-full"
                  />
                )}
              </button>
            </div>

            {/* List with Animated Entrance (No scroll on hover) */}
            <div className="flex-1 overflow-hidden pr-1 flex flex-col justify-start min-h-0">
              <AnimatePresence mode="wait">
                {activeTab === "properties" ? (
                  <motion.div
                    key="props-list"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col justify-start gap-1.5"
                  >
                    {filteredProperties.map((prop, idx) => (
                      <motion.div
                        key={prop.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.03 }}
                        onClick={() => setSelectedItem(prop.personId)}
                        className="flex items-center justify-between p-2 rounded-[10px] hover:bg-gradient-to-r hover:from-[#e8f7ff]/70 hover:to-[#f4f6fa]/50 cursor-pointer group transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-[8px] bg-[#e8f7ff] border border-[#00c8f8]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <img src="/assets/figma_3732_7131.svg" alt="" className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-[#101828] group-hover:text-[#2f7bff] transition-colors">
                              {prop.name}
                            </h4>
                            <p className="text-xs text-[#6a7282]">
                              {prop.location} · {prop.area}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs text-[#99a1af]">{prop.date}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="contacts-list"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col justify-start gap-1.5"
                  >
                    {filteredContacts.map((contact, idx) => (
                      <motion.div
                        key={contact.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.03 }}
                        onClick={() => setSelectedItem(contact.personId)}
                        className="flex items-center justify-between p-2 rounded-[10px] hover:bg-gradient-to-r hover:from-[#e8f7ff]/70 hover:to-[#f4f6fa]/50 cursor-pointer group transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-[8px] bg-[#e8f7ff] border border-[#00c8f8]/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <img src="/assets/figma_3732_7121.svg" alt="" className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-[#101828] group-hover:text-[#2f7bff] transition-colors">
                              {contact.name}
                            </h4>
                            <p className="text-xs text-[#6a7282]">
                              {contact.location} · {contact.area}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs text-[#99a1af]">{contact.date}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>
        </div>
      </main>

      {/* ======================================================== */}
      {/* 3. MODAL: NOVA CONSULTA (Spring Pop-In)                  */}
      {/* ======================================================== */}
      <AnimatePresence>
        {isSearchModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.35, bounce: 0.2 }}
              className="bg-white rounded-[20px] shadow-2xl border border-[#e5e7eb] w-full max-w-lg p-6 overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#e8f7ff] border border-[#00c8f8]/20 flex items-center justify-center text-[#2f7bff]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#101828]">Nova Consulta Fundiária</h3>
                </div>
                <button
                  onClick={() => setIsSearchModalOpen(false)}
                  className="p-1 rounded-full text-[#99a1af] hover:text-[#101828] hover:bg-[#f3f4f6] transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <p className="text-sm text-[#6a7282] mb-5">
                Digite um CPF, CNPJ, código CAR ou número do NIRF para consultar dados cadastrais, polígonos e restrições.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#6a7282] block mb-1.5">
                    Identificador do Imóvel ou Produtor
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 00.000.000/0001-01 ou MT-5107602-..."
                    className="w-full h-11 bg-[#f9fafb] border border-[#e5e7eb] rounded-xl px-4 text-sm text-[#101828] focus:border-[#2f7bff] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00c8f8]/15 transition-all"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    onClick={() => setIsSearchModalOpen(false)}
                    className="px-4 py-2.5 text-sm font-medium text-[#6a7282] hover:bg-[#f3f4f6] rounded-xl transition-colors cursor-pointer"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={() => {
                      setIsSearchModalOpen(false);
                      setSelectedItem("DEMO-001");
                    }}
                    className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#00c8f8] to-[#2f7bff] hover:from-[#00b4e0] hover:to-[#1a6cf0] rounded-xl shadow-[0_4px_16px_rgba(0,200,248,0.4)] transition-all cursor-pointer"
                  >
                    Consultar Imóvel
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AgroDashboard;
