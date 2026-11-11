// X AGRO - Inteligência de Crédito Rural (POC Baseada no Frame Figma 3732:6932)

const people = [
  { id: 'DEMO-001', name: 'Agropecuária Horizonte Ltda.', doc: '00.000.000/0001-01', city: 'São Desidério', state: 'BA', area: 2480, farms: 3, score: 82, crop: 'Soja e milho', revenue: 18600000, limit: 2400000 },
  { id: 'DEMO-002', name: 'Mariana Costa Ribeiro', doc: '000.000.000-02', city: 'Sorriso', state: 'MT', area: 1360, farms: 2, score: 76, crop: 'Soja', revenue: 10200000, limit: 1600000 },
  { id: 'DEMO-003', name: 'Fazendas Vale do Sol S.A.', doc: '00.000.000/0001-03', city: 'Rio Verde', state: 'GO', area: 3200, farms: 4, score: 64, crop: 'Milho e algodão', revenue: 24800000, limit: 3100000 },
  { id: 'DEMO-004', name: 'Carlos Eduardo Silveira', doc: '000.000.000-04', city: 'Primavera do Leste', state: 'MT', area: 1850, farms: 2, score: 80, crop: 'Soja e algodão', revenue: 14200000, limit: 2100000 },
  { id: 'DEMO-005', name: 'Agrícola Terra Viva ME', doc: '00.000.000/0001-05', city: 'Luís Eduardo Magalhães', state: 'BA', area: 920, farms: 1, score: 72, crop: 'Milho', revenue: 7800000, limit: 1100000 },
  { id: 'DEMO-006', name: 'João Batista de Oliveira', doc: '000.000.000-06', city: 'Cristalina', state: 'GO', area: 1100, farms: 2, score: 79, crop: 'Soja e feijão', revenue: 9500000, limit: 1400000 }
];

const recentProperties = [
  { id: 'prop-1', name: 'Fazenda Santa Cruz', location: 'Rondonópolis — MT', area: '1.240 ha', date: '08/04/2026', personId: 'DEMO-001', farmIndex: 0 },
  { id: 'prop-2', name: 'Sítio Boa Esperança', location: 'Ponta Grossa — PR', area: '320 ha', date: '08/04/2026', personId: 'DEMO-002', farmIndex: 0 },
  { id: 'prop-3', name: 'Fazenda Rio Verde', location: 'Barreiras — BA', area: '870 ha', date: '07/04/2026', personId: 'DEMO-003', farmIndex: 0 },
  { id: 'prop-4', name: 'Chácara Sol Nascente', location: 'Ribeirão Preto — SP', area: '45 ha', date: '07/04/2026', personId: 'DEMO-001', farmIndex: 1 },
  { id: 'prop-5', name: 'Estância Boa Vista', location: 'Campo Grande — MS', area: '2.100 ha', date: '06/04/2026', personId: 'DEMO-002', farmIndex: 1 },
  { id: 'prop-6', name: 'Fazenda São Bento', location: 'Uberlândia — MG', area: '650 ha', date: '06/04/2026', personId: 'DEMO-003', farmIndex: 1 }
];

const recentContacts = [
  { id: 'DEMO-001', name: 'Agropecuária Horizonte Ltda.', location: 'São Desidério — BA', area: '2.480 ha', date: '08/04/2026', personId: 'DEMO-001' },
  { id: 'DEMO-002', name: 'Mariana Costa Ribeiro', location: 'Sorriso — MT', area: '1.360 ha', date: '08/04/2026', personId: 'DEMO-002' },
  { id: 'DEMO-003', name: 'Fazendas Vale do Sol S.A.', location: 'Rio Verde — GO', area: '3.200 ha', date: '07/04/2026', personId: 'DEMO-003' },
  { id: 'DEMO-004', name: 'Carlos Eduardo Silveira', location: 'Primavera do Leste — MT', area: '1.850 ha', date: '07/04/2026', personId: 'DEMO-004' },
  { id: 'DEMO-005', name: 'Agrícola Terra Viva ME', location: 'Luís Eduardo Magalhães — BA', area: '920 ha', date: '06/04/2026', personId: 'DEMO-005' },
  { id: 'DEMO-006', name: 'João Batista de Oliveira', location: 'Cristalina — GO', area: '1.100 ha', date: '06/04/2026', personId: 'DEMO-006' }
];

// Exact commodities matching Figma Frame 3732:6932
const commodities = [
  { name: 'Milho', price: 'R$ 79.80', change: '—', type: 'flat' },
  { name: 'Feijão', price: 'R$ 300.00', change: '↑ 3.52%', type: 'up' },
  { name: 'Arroz', price: 'R$ 62.50', change: '—', type: 'flat' },
  { name: 'Soja', price: 'R$ 137.40', change: '↓ 1.20%', type: 'down' },
  { name: 'Trigo', price: 'R$ 88.00', change: '↑ 2.10%', type: 'up' },
  { name: 'Café', price: 'R$ 1420.00', change: '↑ 5.30%', type: 'up' },
  { name: 'Algodão', price: 'R$ 96.50', change: '↓ 0.80%', type: 'down' },
  { name: 'Cana', price: 'R$ 4.20', change: '↑ 0.15%', type: 'up' }
];

const initialProposals = [
  { id: 'PR-2026-001', person: 'DEMO-002', value: 1200000, term: 12, purpose: 'Custeio Safra Soja', status: 'Em análise', opinion: 'Aguardando revisão das certidões e garantias cartorárias.', date: '09/11/2026' },
  { id: 'PR-2026-002', person: 'DEMO-003', value: 1800000, term: 18, purpose: 'Aquisição de Maquinário', status: 'Aprovada', opinion: 'Parecer favorável com alienação fiduciária e seguro ativo.', date: '06/11/2026' },
  { id: 'PR-2026-003', person: 'DEMO-001', value: 2400000, term: 24, purpose: 'CPR Financeira Soja & Milho', status: 'Aprovada', opinion: 'Histórico produtivo de excelência e capacidade de amortização comprovada.', date: '03/11/2026' },
  { id: 'PR-2026-004', person: 'DEMO-004', value: 1500000, term: 12, purpose: 'Custeio Safra Algodão', status: 'Em análise', opinion: 'Em fase de conferência da apólice do seguro agrícola.', date: '28/10/2026' },
  { id: 'PR-2026-005', person: 'DEMO-006', value: 950000, term: 12, purpose: 'Insumos e Fertilizantes', status: 'Aprovada', opinion: 'Área com pivô central e excelente produtividade média.', date: '22/10/2026' },
  { id: 'PR-2026-006', person: 'DEMO-005', value: 1100000, term: 36, purpose: 'Construção de Silos e Armazém', status: 'Recusada', opinion: 'Nível de endividamento de curto prazo acima do teto de tolerância.', date: '15/10/2026' }
];

let state = {
  proposals: structuredClone(initialProposals),
  watch: ['DEMO-002', 'DEMO-003'],
  resolved: []
};

try {
  const saved = JSON.parse(localStorage.getItem('agro-poc-v1'));
  if (saved && Array.isArray(saved.proposals) && saved.proposals.length >= 4) {
    state = saved;
  }
} catch {}

// Authentication session: Default to login screen so the user enters via Login
let isAuthenticated = sessionStorage.getItem('agro_auth') === 'true';
let view = (isAuthenticated && window.location.hash && window.location.hash !== '#login')
  ? (window.location.hash.slice(1) || 'home')
  : 'login';

if (view === 'login' && window.location.hash !== '#login') {
  window.location.hash = '#login';
}
let recentTab = 'properties';
let recentFilter = '';
let contactsFilter = '';
let proposalStatusFilter = 'all';
let tab = 'overview';
let person = people[0];
let activeProposal = null;
let bounds = false;
let farm = 0;
let year = '2026';

function getBarterEstimate(value, crop = 'Soja') {
  const isMilho = /milho/i.test(crop);
  const commName = isMilho ? 'Milho' : 'Soja';
  const price = isMilho ? 79.80 : 137.40;
  const bags = Math.round(value / price);
  return {
    crop: commName,
    price,
    bags,
    formattedBags: num(bags) + ' sc',
    text: `${num(bags)} sacas de ${commName.toLowerCase()} (R$ ${price.toFixed(2).replace('.', ',')}/sc 60kg)`
  };
}

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const money = n => Number(n).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
const num = n => Number(n).toLocaleString('pt-BR');

const save = () => {
  try {
    localStorage.setItem('agro-poc-v1', JSON.stringify(state));
  } catch {}
};

let toastTimer;
function toast(t) {
  const el = $('#toast');
  if (!el) return;
  el.textContent = '✓ ' + t;
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.hidden = true, 4000);
}

let currentRenderedView = null;
let previousView = 'home';

function updateSidebarActive() {
  document.querySelectorAll('.sidebar-nav-btn').forEach(btn => {
    const go = btn.dataset.go;
    if (go) {
      if (go === 'home') btn.classList.toggle('active', view === 'home');
      else if (go === 'contacts') btn.classList.toggle('active', view === 'contacts');
      else if (go === 'credit') btn.classList.toggle('active', view === 'credit');
      else btn.classList.toggle('active', view === go);
    }
  });
}

function renderDossierPanelOnly() {
  const panel = document.querySelector('.dossier-panel');
  if (!panel) return false;

  panel.innerHTML = `
    ${tab === 'overview' ? `
      <div class="identity">
        <div class="identity-heading">
          <h1>RESUMO DO PRODUTOR</h1>
          <button class="text-link" data-action="refresh" title="Atualizar informações">Atualizar ↻</button>
        </div>
        <p><b>Cultura Principal:</b> ${esc(person.crop)}</p>
        <p><b>Telefone:</b> (00) 00000-000${person.id.slice(-1)}</p>
        <p><b>Email:</b> contato${person.id.slice(-1)}@verticeagro.com.br</p>
        <p><b>Área Georreferenciada:</b> ${num(person.area)} ha (${person.farms} propriedades)</p>
      </div>
    ` : ''}
    ${dossierPanelContent()}
  `;

  document.querySelectorAll('.dossier-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === tab);
  });

  return true;
}

function openPerson(id, t = 'overview', fIndex = 0) {
  previousView = (view === 'dossier' || view === 'login') ? (previousView || 'home') : view;
  person = people.find(p => p.id === id) || people[0];
  view = 'dossier';
  tab = t;
  farm = fIndex;
  bounds = fIndex > 0;
  window.location.hash = '#dossier';
  render();
}

function render() {
  const root = $('#root');
  if (!root) return;

  if (view === 'login') {
    window.AgroMaps?.detach();
    currentRenderedView = 'login';
    root.innerHTML = renderLogin();
    return;
  }

  const existingShell = root.querySelector('.app-shell');
  const contentEl = root.querySelector('#app-content');

  // Flicker-Free Update: If already inside the shell, preserve sidebar and ticker seamlessly
  if (existingShell && contentEl && currentRenderedView !== 'login') {
    updateSidebarActive();

    // If staying within dossier and just switching section tabs or farm bounds
    if (view === 'dossier' && currentRenderedView === 'dossier') {
      const panelUpdated = renderDossierPanelOnly();
      if (panelUpdated) {
        window.AgroMaps?.mount({
          kind: 'dossier',
          person,
          people,
          bounds,
          farm
        });
        return;
      }
    }

    // If leaving dossier to another page, clean up map
    if (currentRenderedView === 'dossier' && view !== 'dossier') {
      window.AgroMaps?.detach();
    }

    // Instant seamless view swap on content element only - ZERO flicker!
    contentEl.innerHTML = renderMainView();
    currentRenderedView = view;

    if (view === 'dossier') {
      window.AgroMaps?.mount({
        kind: 'dossier',
        person,
        people,
        bounds,
        farm
      });
    }
    return;
  }

  // Initial mount of the persistent shell
  currentRenderedView = view;
  root.innerHTML = `
    <div class="app-shell">
      ${renderSidebar()}
      <div class="app-main">
        ${renderTicker()}
        <div id="app-content">
          ${renderMainView()}
        </div>
      </div>
    </div>
  `;

  if (view === 'dossier') {
    window.AgroMaps?.mount({
      kind: 'dossier',
      person,
      people,
      bounds,
      farm
    });
  }
}

// ==========================================
// RENDER LOGIN SCREEN (Image 2)
// ==========================================
function renderLogin() {
  return `
    <div class="login-screen">
      <div class="login-left-panel">
        <div class="login-form-box">
          <div class="login-logo-container">
            <img src="assets/tx-logo-assinatura.svg" alt="TecnologyX" class="login-brand-img">
          </div>
          <form id="login-form" class="login-form">
            <div class="login-field">
              <label for="login-email">Email ou usuário</label>
              <input type="text" id="login-email" class="login-input" placeholder="Coloque seu email ou usuário" value="analista@verticeagro.com" required>
            </div>
            <div class="login-field">
              <label for="login-password">Senha</label>
              <div class="password-wrapper">
                <input type="password" id="login-password" class="login-input" placeholder="Digite sua senha" value="••••••••" required>
                <button type="button" class="btn-eye-toggle" id="btn-toggle-eye" aria-label="Mostrar ou ocultar senha">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </button>
              </div>
            </div>
            <div class="forgot-password-row">
              <a href="#" class="forgot-link" id="link-forgot-password">Esqueceu a senha?</a>
            </div>
            <button type="submit" class="btn-login-submit">Login</button>
          </form>
        </div>
      </div>
      <div class="login-right-panel" role="img" aria-label="Painel ilustrativo de paisagens agrícolas e HEX 360"></div>
    </div>
  `;
}

// ==========================================
// RENDER SIDEBAR & TOP TICKER (Exact Figma SVGs)
// ==========================================
function renderSidebar() {
  return `
    <aside class="app-sidebar" style="width: 80px;">
      <div class="sidebar-top">
        <button class="sidebar-logo-btn" data-go="home" aria-label="Página inicial" title="TecnologyX">
          <img src="assets/tx-logo-mark.svg" alt="TecnologyX" class="sidebar-logo-img">
        </button>
        <nav class="sidebar-nav">
          <button class="sidebar-nav-btn ${view === 'home' ? 'active' : ''}" data-go="home" data-tip="Início" aria-label="Início" style="width: 55px; height: 44px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
          </button>
          <button class="sidebar-nav-btn ${view === 'contacts' ? 'active' : ''}" data-go="contacts" data-tip="Contatos & Produtores" aria-label="Contatos e Produtores" style="width: 55px; height: 44px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </button>
          <button class="sidebar-nav-btn ${view === 'credit' ? 'active' : ''}" data-go="credit" data-tip="Contratos & Propostas" aria-label="Contratos e Propostas" style="width: 55px; height: 44px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </button>
        </nav>
      </div>
      <div class="sidebar-bottom">
        <button class="sidebar-avatar-btn" data-action="logout" title="Usuário analista (Clique para sair ou voltar ao login)">
          <span>U</span>
        </button>
      </div>
    </aside>
  `;
}

function renderTicker() {
  const quoteItems = commodities.map(c => `
    <div class="ticker-quote">
      <span class="quote-name">${esc(c.name)}</span>
      <span class="quote-price">${esc(c.price)}</span>
      <span class="quote-change ${c.type}">${esc(c.change)}</span>
    </div>
  `).join('');

  return `
    <header class="ticker-bar">
      <div class="ticker-label">
        <img src="assets/figma_3732_6938.svg" alt="" style="width: 14px; height: 14px;">
        <span>Safras</span>
      </div>
      <div class="ticker-track-wrap">
        <div class="ticker-track">
          <div class="ticker-track-group">
            ${quoteItems}
          </div>
          <div class="ticker-track-group" aria-hidden="true">
            ${quoteItems}
          </div>
        </div>
      </div>
      <div class="ticker-live">
        <span class="pulse-dot"></span>
        <span>Ao vivo</span>
      </div>
    </header>
  `;
}

function renderMainView() {
  if (view === 'home') return renderHome();
  if (view === 'contacts') return renderContactsView();
  if (view === 'credit') return renderCreditView();
  if (view === 'dossier') return renderDossierView();
  return renderHome();
}

// ==========================================
// RENDER HOME DASHBOARD (Exact Figma Frame 3732:6932)
// ==========================================
function renderHome() {
  const isProps = recentTab === 'properties';
  const filterLower = recentFilter.toLowerCase().trim();

  const filteredProps = recentProperties.filter(p =>
    !filterLower || (p.name + ' ' + p.location + ' ' + p.area).toLowerCase().includes(filterLower)
  );

  const filteredContacts = recentContacts.filter(c =>
    !filterLower || (c.name + ' ' + c.location + ' ' + c.area).toLowerCase().includes(filterLower)
  );

  return `
    <div class="home-dashboard-grid">
      <!-- Left Hero Card: Tractor / Nova Consulta (Clean Crisp Typography) -->
      <section class="tractor-card">
        <div class="tractor-card-overlay"></div>
        <div class="tractor-card-content">
          <span class="tractor-tag">NOVA CONSULTA</span>
          <h1 class="tractor-heading">Consulte qualquer<br>imóvel rural agora</h1>
          <p class="tractor-desc">Pesquise por CPF, CNPJ, CAR ou NIRF e obtenha dados completos de vínculos, histórico e situação fundiária.</p>
          <button class="tractor-cta-btn" data-action="search" aria-label="Nova Consulta">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span>Nova Consulta</span>
          </button>
        </div>
      </section>

      <!-- Right Card: Consultas Recentes -->
      <section class="recent-card">
        <div class="recent-header">
          <h2 class="recent-title" style="font-size: 15.2px; line-height: 22.8px; font-weight: 600; color: #101828;">Consultas recentes</h2>
          <p class="recent-subtitle" style="font-size: 12px; color: #99a1af;">Últimas consultas realizadas</p>
        </div>

        <div class="recent-search-wrap">
          <span class="recent-search-icon">
            <img src="assets/figma_3732_7109.svg" alt="" style="width: 16px; height: 16px;">
          </span>
          <input type="text" id="recent-search-input" class="recent-search-input" placeholder="Buscar..." value="${esc(recentFilter)}" aria-label="Buscar nas consultas recentes" style="border-radius: 14px; font-size: 14px;">
        </div>

        <div class="recent-tabs" role="tablist">
          <button class="recent-tab ${isProps ? 'active' : ''}" data-tab="properties" role="tab" aria-selected="${isProps}">
            <img src="assets/figma_3732_7114.svg" alt="" style="width: 16px; height: 16px;">
            <span>Propriedades</span>
            <span class="tab-badge" style="${isProps ? 'background: #e8f7ff; color: #0284c7; border: 1px solid rgba(0, 200, 248, 0.25);' : 'background: #f3f4f6; color: #99a1af;'}">${recentProperties.length}</span>
          </button>
          <button class="recent-tab ${!isProps ? 'active' : ''}" data-tab="contacts" role="tab" aria-selected="${!isProps}">
            <img src="assets/figma_3732_7121.svg" alt="" style="width: 16px; height: 16px;">
            <span>Contatos</span>
            <span class="tab-badge" style="${!isProps ? 'background: #e8f7ff; color: #0284c7; border: 1px solid rgba(0, 200, 248, 0.25);' : 'background: #f3f4f6; color: #99a1af;'}">${recentContacts.length}</span>
          </button>
        </div>

        <div class="recent-list">
          ${isProps ? renderRecentProperties(filteredProps) : renderRecentContacts(filteredContacts)}
        </div>
      </section>
    </div>
  `;
}

function renderRecentProperties(list) {
  if (!list.length) {
    return `<div class="recent-empty">Nenhuma propriedade encontrada para a busca.</div>`;
  }
  return list.map(p => `
    <button class="recent-item-btn" data-open-prop="${p.personId}" data-farm="${p.farmIndex}">
      <div class="recent-item-left">
        <div class="recent-item-icon-box" style="background: #e8f7ff; border: 1px solid rgba(0, 200, 248, 0.2); border-radius: 8px;">
          <img src="assets/figma_3732_7131.svg" alt="" style="width: 16px; height: 16px;">
        </div>
        <div class="recent-item-info">
          <strong class="recent-item-name" style="font-size: 14px; font-weight: 500; color: #101828;">${esc(p.name)}</strong>
          <span class="recent-item-meta" style="font-size: 12px; color: #6a7282;">${esc(p.location)} · ${esc(p.area)}</span>
        </div>
      </div>
      <span class="recent-item-date" style="font-size: 12px; color: #99a1af;">${esc(p.date)}</span>
    </button>
  `).join('');
}

function renderRecentContacts(list) {
  if (!list.length) {
    return `<div class="recent-empty">Nenhum contato encontrado para a busca.</div>`;
  }
  return list.map(c => `
    <button class="recent-item-btn" data-open="${c.personId}">
      <div class="recent-item-left">
        <div class="recent-item-icon-box" style="background: #e8f7ff; border: 1px solid rgba(0, 200, 248, 0.2); border-radius: 8px;">
          <img src="assets/figma_3732_7121.svg" alt="" style="width: 16px; height: 16px;">
        </div>
        <div class="recent-item-info">
          <strong class="recent-item-name" style="font-size: 14px; font-weight: 500; color: #101828;">${esc(c.name)}</strong>
          <span class="recent-item-meta" style="font-size: 12px; color: #6a7282;">${esc(c.location)} · ${esc(c.area)}</span>
        </div>
      </div>
      <span class="recent-item-date" style="font-size: 12px; color: #99a1af;">${esc(c.date)}</span>
    </button>
  `).join('');
}

// ==========================================
// RENDER DOSSIER VIEW (Unified Top-Tab Layout - No Second Sidebar)
// ==========================================
const dossierTabs = [
  { id: 'overview', label: 'Visão Geral', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>' },
  { id: 'contact', label: 'Dados Cadastrais', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' },
  { id: 'check', label: 'Agrocheck', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>' },
  { id: 'farms', label: 'Propriedades', count: true, icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>' },
  { id: 'files', label: 'Arquivos', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' },
  { id: 'financial', label: 'Análise de Crédito', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>' },
  { id: 'history', label: 'Histórico', icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' }
];

function renderDossierView() {
  const isGoodScore = person.score >= 75;

  return `
    <div class="dossier-shell">
      <!-- Top Bar: Back Button, Producer Info, Status & Key Actions -->
      <header class="dossier-top-bar">
        <div class="dossier-header-left">
          <button class="btn-dossier-back" data-go="${previousView || 'home'}" title="Voltar à tela anterior">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Voltar</span>
          </button>

          <span class="dossier-header-sep"></span>

          <div class="dossier-producer-info">
            <h1 class="dossier-producer-name">${esc(person.name)}</h1>
            <span class="badge ${isGoodScore ? 'green' : 'red'}">${isGoodScore ? 'Baixo risco' : 'Atenção'} (${person.score}/100)</span>
            <span class="dossier-meta-tag">${esc(person.doc)}</span>
            <span class="dossier-meta-tag">📍 ${esc(person.city)} / ${esc(person.state)}</span>
          </div>
        </div>

        <div class="dossier-header-right">
          <button class="btn-dossier-search-highlight" data-action="search" title="Iniciar nova consulta de produtor ou imóvel">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span>Nova Consulta</span>
          </button>
          <button class="btn-action-secondary" data-action="proposal" title="Criar nova proposta de crédito">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span>Nova Proposta</span>
          </button>
          <button class="btn-action-secondary" data-action="print" title="Imprimir dossiê">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
            <span>Imprimir</span>
          </button>
        </div>
      </header>

      <!-- Horizontal Navigation Tabs (Clean, Modern, No Second Sidebar!) -->
      <nav class="dossier-tabs-bar" role="tablist">
        ${dossierTabs.map(t => `
          <button class="dossier-tab-btn ${tab === t.id ? 'active' : ''}" data-section="${t.id}" role="tab" aria-selected="${tab === t.id}">
            ${t.icon}
            <span>${t.label}${t.count ? ` (${person.farms})` : ''}</span>
          </button>
        `).join('')}
      </nav>

      <!-- Main Workspace: Data Content Panel (Left) + Interactive Map (Right) -->
      <div class="dossier-workspace">
        <section class="dossier-panel">
          ${tab === 'overview' ? `
            <div class="identity">
              <div class="identity-heading">
                <h1>RESUMO DO PRODUTOR</h1>
                <button class="text-link" data-action="refresh" title="Atualizar informações">Atualizar ↻</button>
              </div>
              <p><b>Cultura Principal:</b> ${esc(person.crop)}</p>
              <p><b>Telefone:</b> (00) 00000-000${person.id.slice(-1)}</p>
              <p><b>Email:</b> contato${person.id.slice(-1)}@verticeagro.com.br</p>
              <p><b>Área Georreferenciada:</b> ${num(person.area)} ha (${person.farms} propriedades)</p>
            </div>
          ` : ''}
          ${dossierPanelContent()}
        </section>

        <section class="detail-map live-map-shell">
          <div id="interactive-map" class="live-map"></div>
          <div class="map-status" role="status">Carregando mapa interativo…</div>
          <div class="map-toolbar">
            <button class="map-style" data-action="map-style">Satélite / Ruas</button>
            <button class="map-boundaries" data-action="bounds" aria-pressed="${bounds}">${bounds ? 'Ocultar' : 'Exibir'} limites</button>
          </div>
          <div class="map-gis-legend">
            <span class="gis-legend-title">Camadas CAR & Satélite</span>
            <div class="gis-legend-items">
              <span class="gis-item"><span class="gis-dot rl"></span> Reserva Legal (RL)</span>
              <span class="gis-item"><span class="gis-dot app"></span> APP Hídrica</span>
              <span class="gis-item"><span class="gis-dot talhao"></span> Área Produtiva</span>
              <span class="gis-item"><span class="gis-dot ok"></span> Zero Embargos</span>
            </div>
          </div>
          <div class="map-footer">
            <span>${esc(person.city)} / ${esc(person.state)}</span>
            <span>${person.farms} propriedades · ${num(person.area)} ha</span>
          </div>
        </section>
      </div>
    </div>
  `;
}

function dossierPanelContent() {
  if (tab === 'overview') {
    return `
      <h2 class="section-title">Score de Risco</h2>
      <div class="scores">
        ${[
          ['Propriedade', 77],
          ['Produtividade', 86],
          ['Bancário', 71],
          ['Legal', person.score < 75 ? 42 : 84],
          ['Patrimonial', 71]
        ].map(([t, n]) => `
          <div>
            <div class="score-label">
              <span>${t}</span>
              <strong style="color:${n < 50 ? 'var(--red)' : n > 85 ? 'var(--wine)' : 'var(--green)'}">${n}% (${n > 85 ? 'Excelente' : n < 50 ? 'Atenção' : 'Bom'})</strong>
            </div>
            <div class="track">
              <i style="width:${n}%;background:${n < 50 ? 'var(--red)' : n > 85 ? 'var(--wine)' : 'var(--green)'}"></i>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="deforest-head">
        <h2>Desmatamento</h2>
        <select id="year-select" aria-label="Ano da análise ambiental">
          <option ${year === '2026' ? 'selected' : ''}>2026</option>
          <option ${year === '2025' ? 'selected' : ''}>2025</option>
        </select>
      </div>
      <div class="environment-stats">
        <div><img src="assets/dossier-5dba2.svg" alt=""><strong>${year === '2026' ? '0,00 ha' : '1,20 ha'}</strong><span>Área desmatada</span></div>
        <div><img src="assets/dossier-afab8.png" alt=""><strong>${year === '2026' ? 'Nenhum' : '2025'}</strong><span>Ano do desmatamento</span></div>
        <div><img src="assets/dossier-5a32d.png" alt=""><strong>0</strong><span>Propriedades vizinhas</span></div>
        <div><img src="assets/dossier-e8839.png" alt=""><strong>Não</strong><span>Desmatamento contínuo</span></div>
      </div>
      <div class="gauge">
        <img src="assets/dossier-62f00.svg" alt="Indicador de desmatamento">
        <strong>${year === '2026' ? '0' : '0,003'}<small>/dia</small></strong>
        <span>Taxa de desmatamento · ${year}</span>
      </div>

      <div class="panel-callout">
        <h3>Da informação à decisão</h3>
        <p>Confira os riscos e avance para a análise de crédito.</p>
        <button class="primary" data-section="financial">Analisar crédito →</button>
      </div>
    `;
  }

  if (tab === 'contact') {
    return `
      <h2 class="section-title left">Dados cadastrais</h2>
      <dl class="details">
        <div><dt>Identificador</dt><dd>${esc(person.id)}</dd></div>
        <div><dt>Situação cadastral</dt><dd>Ativa (simulada)</dd></div>
        <div><dt>Atividade</dt><dd>Produção agrícola</dd></div>
        <div><dt>Culturas</dt><dd>${esc(person.crop)}</dd></div>
        <div><dt>Área total</dt><dd>${num(person.area)} ha</dd></div>
        <div><dt>Propriedades</dt><dd>${person.farms}</dd></div>
      </dl>
      <button class="outline" data-action="watch">
        ${state.watch.includes(person.id) ? 'Remover do monitoramento' : 'Monitorar produtor'}
      </button>
    `;
  }

  if (tab === 'check') {
    return `
      <h2 class="agrocheck">✓ AGRO<span>CHECK</span><small>Verificações simuladas</small></h2>
      ${[
        ['Processos · Polo passivo', '2 ocorrências demonstrativas', 'check-36211.svg'],
        ['Processos · Polo ativo', 'Nenhum registro neste cenário', 'check-b9d8e.svg'],
        ['Dívida ativa da União', 'Sem pendências neste cenário', 'check-92d2e.svg'],
        ['Situação na Receita Federal', 'Situação cadastral ativa', 'check-df8f7.svg'],
        ['DAP / CAF', 'Cadastro regular', 'check-beb6b.svg'],
        ['Trabalho escravo', 'Nenhum registro encontrado', 'check-03fac.svg'],
        ['Infrações ambientais', 'Nenhuma ocorrência', 'check-47800.svg'],
        ['Embargos', '0,00 ha embargados', 'check-6d61e.svg'],
        ['Quadro societário', '2 sócios cadastrados', 'check-7d7a3.svg']
      ].map(([t, r, f]) => `
        <details class="check-row">
          <summary>
            <img class="asset-icon" alt="" src="assets/${f}">
            <span>${t}</span>
            <b>+</b>
          </summary>
          <p>${r}. Base simulada atualizada em 09/11/2026.</p>
        </details>
      `).join('')}
    `;
  }

  if (tab === 'farms') {
    return `
      <h2 class="section-title left">Propriedades vinculadas <span>${person.farms}</span></h2>
      <p style="font-size:12px;color:var(--muted);margin-bottom:12px">Área total: ${num(person.area)} ha</p>
      ${Array.from({ length: person.farms }, (_, i) => `
        <button class="farm-card ${farm === i ? 'chosen' : ''}" data-farm="${i}">
          <span>
            <strong>Fazenda ${person.id === 'DEMO-001' ? 'Horizonte' : person.id === 'DEMO-002' ? 'Boa Vista' : 'Vale do Sol'} ${['I', 'II', 'III', 'IV'][i]}</strong>
            <span class="badge green">CAR ativo</span>
          </span>
          <p>${esc(person.city)} / ${esc(person.state)}</p>
          <dl class="details" style="margin:4px 0 10px">
            <div><dt>Área estimada</dt><dd>${num(Math.round(person.area / person.farms))} ha</dd></div>
            <div><dt>Cultura</dt><dd>${i % 2 ? 'Milho' : 'Soja'}</dd></div>
          </dl>
          <small>CAR: DEMO-${person.state}-0000${i + 1}</small>
        </button>
      `).join('')}
    `;
  }

  if (tab === 'files') {
    return `
      <h2 class="section-title left">Arquivos do dossiê</h2>
      ${['Resumo cadastral', 'Laudo socioambiental', 'Resumo das garantias'].map(t => `
        <div class="file-row">
          <img class="asset-icon" alt="" src="assets/dossier-9dd0f.svg">
          <div>
            <strong>${t}</strong>
            <small>Documento demonstrativo · TXT</small>
          </div>
          <button class="text-link" data-download="${t}">Baixar</button>
        </div>
      `).join('')}
    `;
  }

  if (tab === 'financial') {
    return `
      <h2 class="section-title left">Análise de crédito</h2>
      <div class="financial-cards">
        <div><span>Receita projetada</span><strong>${money(person.revenue)}</strong></div>
        <div><span>Limite de referência</span><strong>${money(person.limit)}</strong></div>
      </div>
      <dl class="details">
        <div><dt>Classificação</dt><dd>${person.score >= 75 ? 'A · Baixo risco' : 'B · Atenção'}</dd></div>
        <div><dt>Índice demonstrativo</dt><dd>${person.score}/100</dd></div>
        <div><dt>Garantia sugerida</dt><dd>Imóvel rural</dd></div>
        <div><dt>Finalidade</dt><dd>Custeio da próxima safra</dd></div>
      </dl>
      <div class="panel-callout">
        <h3>Pronto para avançar?</h3>
        <p>Simule a operação e registre o parecer do analista.</p>
        <button class="primary" data-action="proposal">+ Nova proposta</button>
      </div>
      ${state.proposals.filter(p => p.person === person.id).map(p => `
        <button class="proposal-mini" data-proposal="${p.id}">
          <span>${p.id}<strong>${money(p.value)}</strong></span>
          <span class="badge ${/Aprov/.test(p.status) ? 'green' : /Recus/.test(p.status) ? 'red' : ''}">${esc(p.status)}</span>
        </button>
      `).join('')}
    `;
  }

  return `
    <h2 class="section-title left">Histórico do produtor</h2>
    <div class="timeline">
      <article>
        <small>09/11/2026 · 09:11</small>
        <strong>Consulta inicial concluída</strong>
        <p>Dossiê de demonstração disponibilizado.</p>
      </article>
      ${state.proposals.filter(p => p.person === person.id).map(p => `
        <article>
          <small>${esc(p.date)}</small>
          <strong>${esc(p.id)} · ${esc(p.status)}</strong>
          <p>${money(p.value)} · ${esc(p.opinion || 'Parecer registrado.')}</p>
        </article>
      `).join('')}
    </div>
  `;
}

// ==========================================
// RENDER CONTACTS & CREDIT VIEWS (TecnologyX Enterprise Hub)
// ==========================================
function getProducerInitials(name) {
  if (!name) return 'PR';
  const clean = name.replace(/(Ltda|S\.A\.|ME|EPP)\.?/gi, '').trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return clean.slice(0, 2).toUpperCase() || 'PR';
}

function renderContactsHub(activeTab = 'contacts') {
  const isContacts = activeTab === 'contacts';
  const query = (contactsFilter || '').toLowerCase().trim();

  // Aggregate Metrics
  const totalProdutores = people.length;
  const totalArea = people.reduce((s, p) => s + p.area, 0);
  const totalLimite = people.reduce((s, p) => s + p.limit, 0);
  const mediaLimite = Math.round(totalLimite / (totalProdutores || 1));
  const totalVolumePropostas = state.proposals.reduce((s, p) => s + p.value, 0);
  const aprovadas = state.proposals.filter(p => p.status === 'Aprovada').length;
  const emAnalise = state.proposals.filter(p => p.status === 'Em análise').length;

  // Filtered lists
  const filteredContacts = people.filter(p => {
    if (!query) return true;
    return (p.name + ' ' + p.doc + ' ' + p.city + ' ' + p.state + ' ' + p.crop).toLowerCase().includes(query);
  });

  const filteredProposals = state.proposals.filter(pr => {
    if (proposalStatusFilter !== 'all' && pr.status !== proposalStatusFilter) return false;
    if (!query) return true;
    const produtor = people.find(x => x.id === pr.person)?.name || '';
    return (pr.id + ' ' + produtor + ' ' + pr.purpose + ' ' + pr.status).toLowerCase().includes(query);
  });

  return `
    <div class="contacts-page-shell">
      <!-- Header -->
      <header class="contacts-page-header">
        <div>
          <div class="contacts-header-badge">
            <span class="tx-pulse-indicator"></span>
            <span>TECNOLOGYX · GESTÃO INTEGRADA</span>
          </div>
          <h1 class="contacts-header-title">${isContacts ? 'Contatos e Produtores Rurais' : 'Contratos e Propostas de Crédito'}</h1>
          <p class="contacts-header-subtitle">
            ${isContacts
              ? 'Gestão cadastral, limites de crédito, área monitorada e análise de risco dos produtores da sua carteira.'
              : 'Acompanhe da esteira de originação à formalização de contratos, CPRs e operações financeiras.'
            }
          </p>
        </div>
        <div class="contacts-header-actions">
          <button class="btn-action-secondary" data-action="search" title="Buscar imóvel por CPF/CNPJ, CAR ou NIRF">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span>Nova Consulta</span>
          </button>
          <button class="btn-action-primary" data-action="proposal" title="Criar nova proposta de crédito">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span>Nova Proposta</span>
          </button>
        </div>
      </header>

      <!-- 4 Executive KPI Cards -->
      <div class="contacts-kpi-grid">
        <div class="kpi-card">
          <div class="kpi-icon-wrap cyan">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div class="kpi-data">
            <span class="kpi-label">Produtores Cadastrados</span>
            <strong class="kpi-value">${totalProdutores} produtores</strong>
            <span class="kpi-sub">100% dossiês atualizados</span>
          </div>
        </div>

        <div class="kpi-card">
          <div class="kpi-icon-wrap blue">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
              <line x1="8" y1="2" x2="8" y2="18"></line>
              <line x1="16" y1="6" x2="16" y2="22"></line>
            </svg>
          </div>
          <div class="kpi-data">
            <span class="kpi-label">Área Monitorada</span>
            <strong class="kpi-value">${num(totalArea)} ha</strong>
            <span class="kpi-sub">MT, BA, GO, MS, MG, SP</span>
          </div>
        </div>

        <div class="kpi-card">
          <div class="kpi-icon-wrap navy">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <div class="kpi-data">
            <span class="kpi-label">Limite Global Aprovado</span>
            <strong class="kpi-value">${money(totalLimite)}</strong>
            <span class="kpi-sub">Média ${money(mediaLimite)} / produtor</span>
          </div>
        </div>

        <div class="kpi-card">
          <div class="kpi-icon-wrap green">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <polyline points="9 15 11 17 15 13"></polyline>
            </svg>
          </div>
          <div class="kpi-data">
            <span class="kpi-label">Volume em Contratos</span>
            <strong class="kpi-value">${money(totalVolumePropostas)}</strong>
            <span class="kpi-sub">${aprovadas} aprovadas · ${emAnalise} em análise</span>
          </div>
        </div>
      </div>

      <!-- Main Table Card with Toolbar -->
      <section class="contacts-table-card">
        <div class="contacts-table-toolbar">
          <div class="contacts-tab-group" role="tablist">
            <button class="contacts-tab-btn ${isContacts ? 'active' : ''}" data-go="contacts" role="tab" aria-selected="${isContacts}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
              <span>Produtores & Contatos</span>
              <span class="contacts-count-pill">${people.length}</span>
            </button>
            <button class="contacts-tab-btn ${!isContacts ? 'active' : ''}" data-go="credit" role="tab" aria-selected="${!isContacts}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
              </svg>
              <span>Contratos & Propostas</span>
              <span class="contacts-count-pill">${state.proposals.length}</span>
            </button>
          </div>

          <div class="contacts-toolbar-right">
            ${!isContacts ? `
              <div class="proposals-filter-chips">
                <button class="chip-filter ${proposalStatusFilter === 'all' ? 'active' : ''}" data-status-filter="all">Todas (${state.proposals.length})</button>
                <button class="chip-filter ${proposalStatusFilter === 'Em análise' ? 'active' : ''}" data-status-filter="Em análise">Em análise (${emAnalise})</button>
                <button class="chip-filter ${proposalStatusFilter === 'Aprovada' ? 'active' : ''}" data-status-filter="Aprovada">Aprovadas (${aprovadas})</button>
                <button class="chip-filter ${proposalStatusFilter === 'Recusada' ? 'active' : ''}" data-status-filter="Recusada">Recusadas (${state.proposals.length - aprovadas - emAnalise})</button>
              </div>
            ` : ''}
            <div class="contacts-search-box">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input type="text" id="contacts-search-input" class="contacts-search-input" placeholder="${isContacts ? 'Buscar por produtor, CPF/CNPJ, cultura...' : 'Buscar proposta, finalidade, status...'}" value="${esc(contactsFilter)}" aria-label="Pesquisar registros">
            </div>

            <button class="btn-export-csv" data-action="export" title="Exportar dados em formato CSV">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Exportar CSV</span>
            </button>
          </div>
        </div>

        <div class="contacts-table-scroll">
          ${isContacts ? renderContactsTable(filteredContacts) : renderProposalsTable(filteredProposals)}
        </div>
      </section>
    </div>
  `;
}

function renderContactsTable(list) {
  if (!list.length) {
    return `
      <div class="tx-empty-state">
        <div class="empty-icon-box">🔍</div>
        <h3>Nenhum produtor encontrado</h3>
        <p>Tente buscar por outro nome, documento, município ou cultura agrícola.</p>
      </div>
    `;
  }

  return `
    <table class="tx-data-table">
      <thead>
        <tr>
          <th>PRODUTOR & CULTURA</th>
          <th>CPF / CNPJ</th>
          <th>LOCALIZAÇÃO</th>
          <th>ÁREA MONITORADA</th>
          <th>LIMITE DE CRÉDITO</th>
          <th>SCORE DE RISCO</th>
          <th style="text-align: right; padding-right: 20px;">AÇÕES</th>
        </tr>
      </thead>
      <tbody>
        ${list.map(p => `
          <tr class="tx-table-row">
            <td>
              <div class="producer-cell">
                <div class="producer-avatar">${getProducerInitials(p.name)}</div>
                <div class="producer-info">
                  <span class="producer-name">${esc(p.name)}</span>
                  <span class="crop-tag">🌱 ${esc(p.crop)}</span>
                </div>
              </div>
            </td>
            <td>
              <span class="doc-code">${esc(p.doc)}</span>
            </td>
            <td>
              <span class="location-badge">📍 ${esc(p.city)} / ${esc(p.state)}</span>
            </td>
            <td>
              <div class="area-cell">
                <strong>${num(p.area)} ha</strong>
                <small>${p.farms} propriedade${p.farms > 1 ? 's' : ''}</small>
              </div>
            </td>
            <td>
              <div class="finance-cell">
                <span>${money(p.limit)}</span>
                <span class="limit-sub">Fat: ${money(p.revenue)}</span>
              </div>
            </td>
            <td>
              ${p.score >= 75
                ? `<span class="score-pill low-risk"><span class="score-circle"></span>${p.score}/100 · Baixo risco</span>`
                : `<span class="score-pill mod-risk"><span class="score-circle"></span>${p.score}/100 · Atenção</span>`
              }
            </td>
            <td style="text-align: right; padding-right: 20px;">
              <button class="btn-open-dossier" data-open="${p.id}" title="Abrir dossiê completo deste produtor">
                <span>Abrir dossiê</span>
                <span>→</span>
              </button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function renderProposalsTable(list) {
  if (!list.length) {
    return `
      <div class="tx-empty-state">
        <div class="empty-icon-box">📋</div>
        <h3>Nenhuma proposta encontrada</h3>
        <p>Não há operações de crédito correspondentes aos filtros aplicados.</p>
      </div>
    `;
  }

  return `
    <table class="tx-data-table">
      <thead>
        <tr>
          <th>PROPOSTA / DATA</th>
          <th>PRODUTOR VINCULADO</th>
          <th>FINALIDADE DA OPERAÇÃO</th>
          <th>VALOR SOLICITADO</th>
          <th>PRAZO</th>
          <th>STATUS</th>
          <th style="text-align: right; padding-right: 20px;">PARECER & DECISÃO</th>
        </tr>
      </thead>
      <tbody>
        ${list.map(p => {
          const produtor = people.find(x => x.id === p.person) || { name: 'Produtor', doc: '---', id: p.person };
          const statusClass = p.status === 'Aprovada' ? 'status-approved' : p.status === 'Recusada' ? 'status-rejected' : 'status-review';
          return `
            <tr class="tx-table-row">
              <td>
                <div style="display: flex; flex-direction: column; gap: 2px;">
                  <span class="proposal-code">${esc(p.id)}</span>
                  <small style="font-size: 11px; color: #94a3b8;">${esc(p.date || '09/11/2026')}</small>
                </div>
              </td>
              <td>
                <div class="producer-cell">
                  <div class="producer-avatar" style="width: 28px; height: 28px; font-size: 10px;">${getProducerInitials(produtor.name)}</div>
                  <div class="producer-info">
                    <span class="producer-name" style="font-size: 12.5px;">${esc(produtor.name)}</span>
                    <small style="font-size: 11px; color: #64748b;">${esc(produtor.doc)}</small>
                  </div>
                </div>
              </td>
              <td>
                <span class="purpose-pill">${esc(p.purpose)}</span>
              </td>
              <td>
                <div style="display: flex; flex-direction: column; gap: 2px;">
                  <strong class="proposal-value">${money(p.value)}</strong>
                  <small style="font-size: 11px; color: #0284c7; font-weight: 600;" title="Equivalente em sacas na cotação atual (Barter)">🌾 ${getBarterEstimate(p.value, produtor.crop || p.purpose).formattedBags} ${getBarterEstimate(p.value, produtor.crop || p.purpose).crop.toLowerCase()}</small>
                </div>
              </td>
              <td>
                <span class="term-badge">${p.term} meses</span>
              </td>
              <td>
                <span class="status-pill ${statusClass}">
                  <span class="status-dot"></span>
                  <span>${esc(p.status)}</span>
                </span>
              </td>
              <td style="text-align: right; padding-right: 20px;">
                <button class="btn-analyze-proposal" data-proposal="${esc(p.id)}" title="Analisar proposta e emitir parecer">
                  <span>Analisar proposta</span>
                  <span>→</span>
                </button>
              </td>
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
  `;
}

function renderContactsView() {
  return renderContactsHub('contacts');
}

function renderCreditView() {
  return renderContactsHub('credit');
}

// ==========================================
// MODALS (Search, Proposal, etc.)
// ==========================================
function modal(title, desc, html) {
  const m = $('#modal');
  if (!m) return;
  m.innerHTML = `
    <button class="close-modal" data-action="close" aria-label="Fechar">×</button>
    <h2 id="modal-title">${title}</h2>
    <p class="modal-desc">${desc}</p>
    ${html}
  `;
  if (!m.open) m.showModal();
}

const modalDialog = $('#modal');
if (modalDialog) {
  modalDialog.addEventListener('click', e => {
    const rect = modalDialog.getBoundingClientRect();
    const isInDialog = (
      rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX && e.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      modalDialog.close();
    }
  });
}

function searchModal() {
  modal('Nova consulta', 'Pesquise por CPF, CNPJ, CAR, NIRF ou nome do produtor.', `
    <form id="search-form">
      <label>
        Nome, CPF, CNPJ, CAR ou NIRF
        <input name="query" autofocus placeholder="Ex.: Fazenda Santa Cruz, Horizonte ou 00.000.000/0001-01" required>
      </label>
      <p class="form-error" id="search-error" role="alert"></p>
      <button class="primary full" type="submit">Consultar dados do imóvel →</button>
    </form>
    <div class="demo-examples">
      <span>EXEMPLOS DISPONÍVEIS NA DEMONSTRAÇÃO</span>
      ${recentProperties.map(p => `
        <button type="button" data-open-prop="${p.personId}" data-farm="${p.farmIndex ?? 0}">
          <span>
            <strong>${esc(p.name)}</strong>
            <small>${esc(p.location)} · ${esc(p.area)}</small>
          </span>
          <span>→</span>
        </button>
      `).join('')}
    </div>
  `);
}

function proposalModal(p = null) {
  activeProposal = p;
  if (p) {
    const curPerson = people.find(x => x.id === p.person) || people[0];
    const barter = getBarterEstimate(p.value, curPerson.crop || p.purpose);
    const limitPct = Math.min(100, Math.round((p.value / (curPerson.limit || 1)) * 100));
    const isApproved = p.status === 'Aprovada';
    modal('Análise da proposta de crédito', esc(p.id) + ' · ' + curPerson.name, `
      <div class="decision-summary">
        <div>
          <strong style="font-size:22px;color:#0e2a5c;">${money(p.value)}</strong>
          <span style="display:block;font-size:12px;color:#0284c7;font-weight:600;margin-top:2px;">
            🌾 Barter: ${barter.text}
          </span>
        </div>
        <span class="badge ${/Aprov/.test(p.status) ? 'green' : /Recus/.test(p.status) ? 'red' : ''}">${esc(p.status)}</span>
      </div>

      <div class="proposal-meta-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:14px 0;padding:12px;background:#f8fafc;border-radius:10px;border:1px solid #e2e8f0;font-size:12px;">
        <div><span style="color:#64748b;">Finalidade:</span> <strong>${esc(p.purpose)}</strong></div>
        <div><span style="color:#64748b;">Prazo amortização:</span> <strong>${esc(p.term)} meses</strong></div>
        <div><span style="color:#64748b;">Limite referência:</span> <strong>${money(curPerson.limit)}</strong></div>
        <div><span style="color:#64748b;">Comprometimento:</span> <strong style="color:${limitPct > 90 ? '#dc2626' : '#16a34a'}">${limitPct}% do teto</strong></div>
      </div>

      ${isApproved ? `
        <div class="cpr-formalizacao-box" style="margin-bottom:14px;padding:12px 14px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
            <strong style="color:#166534;font-size:12.5px;">✓ Cédula de Produto Rural (CPR) Nº ${esc(p.id.replace('PR-', 'CPR-'))}</strong>
            <span class="badge green">Minuta Pronta</span>
          </div>
          <p style="font-size:11.5px;color:#15803d;margin:0 0 6px 0;line-height:1.4;">
            Garantia fiduciária vinculada à safra 2026/27. Penhor agrícola de ${barter.formattedBags} ${barter.crop.toLowerCase()} registrado em cartório.
          </p>
          <div style="font-size:10.5px;font-family:monospace;color:#475569;background:#ffffff;padding:4px 8px;border-radius:6px;border:1px solid #dcfce7;">
            CHAVE-ICP: 0x${esc(p.id.replace(/\D/g, ''))}a8f9c42b7d1e06
          </div>
        </div>
      ` : ''}

      <label style="margin-top:10px">
        Parecer técnico do analista
        <textarea id="opinion" placeholder="Justifique a decisão da concessão de crédito, garantias e condições comerciais...">${esc(p.opinion)}</textarea>
      </label>
      <p id="decision-error" class="form-error" role="alert"></p>
      <div class="decision-actions">
        <button class="outline" data-decision="Recusada">Recusar</button>
        <button class="outline" data-decision="Em análise">Salvar parecer</button>
        <button class="primary" data-decision="Aprovada">Aprovar proposta</button>
      </div>
    `);
    return;
  }

  modal('Nova proposta de crédito', 'Simule uma operação para a safra 2026/27.', `
    <form id="proposal-form">
      <label>
        Produtor
        <select name="person" id="proposal-person">
          ${people.map(p => `<option value="${p.id}" ${p.id === person.id ? 'selected' : ''}>${esc(p.name)}</option>`).join('')}
        </select>
      </label>
      <div class="form-grid">
        <label>
          Valor solicitado (R$)
          <input name="value" type="number" min="1" max="50000000" step="1" value="2000000" required>
        </label>
        <label>
          Prazo
          <select name="term">
            ${[6, 12, 18, 24].map(n => `<option value="${n}" ${n === 12 ? 'selected' : ''}>${n} meses</option>`).join('')}
          </select>
        </label>
      </div>
      <label>
        Finalidade
        <select name="purpose">
          <option>Custeio agrícola</option>
          <option>Investimento</option>
          <option>Comercialização</option>
        </select>
      </label>
      <p id="limit-info" style="font-size:12px;color:var(--muted)">Limite de referência: ${money(person.limit)}</p>
      <label>
        Observações e garantias
        <textarea name="opinion" placeholder="Garantias, safra e contexto da operação"></textarea>
      </label>
      <p class="form-error" id="proposal-error" role="alert"></p>
      <button class="primary full" type="submit">Criar proposta e enviar para análise →</button>
    </form>
  `);
}

function downloadFile(name, text, type = 'text/plain;charset=utf-8') {
  const u = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement('a');
  a.href = u;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(u), 1000);
}

// ==========================================
// EVENT LISTENERS
// ==========================================
document.addEventListener('click', e => {
  const b = e.target.closest('button, a');
  if (!b) return;
  const d = b.dataset;

  if (d.go) {
    view = d.go;
    window.location.hash = '#' + d.go;
    render();
    return;
  }

  if (d.open) {
    $('#modal')?.close();
    openPerson(d.open, d.tab || 'overview');
    return;
  }

  if (d.openProp) {
    $('#modal')?.close();
    openPerson(d.openProp, 'farms', Number(d.farm || 0));
    return;
  }

  if (d.tab === 'properties' || d.tab === 'contacts') {
    recentTab = d.tab;
    render();
    return;
  }

  if (d.section) {
    tab = d.section;
    render();
    return;
  }

  if (d.farm !== undefined) {
    farm = Number(d.farm);
    bounds = true;
    render();
    toast('Propriedade selecionada no mapa interativo.');
    return;
  }

  if (d.statusFilter) {
    proposalStatusFilter = d.statusFilter;
    render();
    return;
  }

  if (d.proposal) {
    proposalModal(state.proposals.find(p => p.id === d.proposal));
    return;
  }

  if (d.decision) {
    const opinion = $('#opinion')?.value.trim();
    if (!opinion) {
      $('#decision-error').textContent = 'Registre um parecer antes de concluir a análise.';
      return;
    }
    state.proposals = state.proposals.map(p => p.id === activeProposal.id ? { ...p, status: d.decision, opinion } : p);
    save();
    $('#modal')?.close();
    render();
    toast('Decisão registrada: ' + d.decision.toLowerCase());
    return;
  }

  if (d.download) {
    downloadFile('demonstracao-' + d.download + '.txt', d.download + '\n\nAMBIENTE DE DEMONSTRAÇÃO\nProdutor: ' + person.name + '\nID: ' + person.id + '\nÁrea: ' + num(person.area) + ' ha\n\nDados simulados.');
    return;
  }

  switch (d.action) {
    case 'search':
      searchModal();
      break;
    case 'close':
      $('#modal')?.close();
      break;
    case 'map-style':
      window.AgroMaps?.toggleStyle();
      break;
    case 'bounds':
      bounds = !bounds;
      render();
      break;
    case 'print':
      window.print();
      break;
    case 'proposal':
      proposalModal();
      break;
    case 'watch':
      state.watch = state.watch.includes(person.id)
        ? state.watch.filter(id => id !== person.id)
        : [...state.watch, person.id];
      save();
      render();
      toast('Monitoramento atualizado.');
      break;
    case 'refresh':
      toast('Consulta atualizada com sucesso.');
      break;
    case 'logout':
      sessionStorage.removeItem('agro_auth');
      isAuthenticated = false;
      view = 'login';
      window.location.hash = '#login';
      render();
      toast('Sessão encerrada.');
      break;
    case 'export': {
      if (view === 'contacts') {
        const rows = [
          ['ID', 'Produtor', 'Documento', 'Cidade', 'Estado', 'Area (ha)', 'Propriedades', 'Score', 'Cultura', 'Faturamento Anual', 'Limite de Credito'],
          ...people.map(p => [p.id, p.name, p.doc, p.city, p.state, p.area, p.farms, p.score, p.crop, p.revenue, p.limit])
        ];
        downloadFile('produtores-carteira.csv', '\uFEFF' + rows.map(r => r.map(x => '"' + String(x).replace(/"/g, '""') + '"').join(';')).join('\r\n'), 'text/csv;charset=utf-8');
        toast('Carteira de produtores exportada em CSV.');
      } else {
        const rows = [
          ['Proposta', 'Produtor', 'Documento', 'Finalidade', 'Valor', 'Prazo (meses)', 'Status', 'Parecer', 'Data'],
          ...state.proposals.map(p => {
            const prod = people.find(x => x.id === p.person);
            return [p.id, prod?.name || '', prod?.doc || '', p.purpose, p.value, p.term, p.status, p.opinion, p.date];
          })
        ];
        downloadFile('propostas-contratos.csv', '\uFEFF' + rows.map(r => r.map(x => '"' + String(x).replace(/"/g, '""') + '"').join(';')).join('\r\n'), 'text/csv;charset=utf-8');
        toast('Contratos e propostas exportados em CSV.');
      }
      break;
    }
  }

  if (b.id === 'btn-toggle-eye' || b.closest('#btn-toggle-eye')) {
    const input = $('#login-password');
    if (input) {
      const isPass = input.type === 'password';
      input.type = isPass ? 'text' : 'password';
    }
    return;
  }

  if (b.id === 'link-forgot-password') {
    e.preventDefault();
    modal('Recuperação de Senha', 'Instruções para redefinir o acesso', `
      <p style="font-size:13.5px;color:#475569;line-height:1.6">
        Um link temporário para recuperação de senha foi simulado e enviado para <strong>analista@verticeagro.com</strong>.
      </p>
      <button class="primary full" data-action="close" style="margin-top:16px">Entendido</button>
    `);
    return;
  }
});

document.addEventListener('input', e => {
  if (e.target.id === 'recent-search-input') {
    recentFilter = e.target.value;
    const isProps = recentTab === 'properties';
    const filterLower = recentFilter.toLowerCase().trim();
    const listEl = $('.recent-list');
    if (listEl) {
      if (isProps) {
        const filtered = recentProperties.filter(p => !filterLower || (p.name + ' ' + p.location + ' ' + p.area).toLowerCase().includes(filterLower));
        listEl.innerHTML = renderRecentProperties(filtered);
      } else {
        const filtered = recentContacts.filter(c => !filterLower || (c.name + ' ' + c.location + ' ' + c.area).toLowerCase().includes(filterLower));
        listEl.innerHTML = renderRecentContacts(filtered);
      }
    }
  }

  if (e.target.id === 'contacts-search-input') {
    contactsFilter = e.target.value;
    const isContacts = view === 'contacts';
    const query = contactsFilter.toLowerCase().trim();
    const scrollEl = $('.contacts-table-scroll');
    if (scrollEl) {
      if (isContacts) {
        const filtered = people.filter(p => !query || (p.name + ' ' + p.doc + ' ' + p.city + ' ' + p.state + ' ' + p.crop).toLowerCase().includes(query));
        scrollEl.innerHTML = renderContactsTable(filtered);
      } else {
        const filtered = state.proposals.filter(pr => {
          if (!query) return true;
          const produtor = people.find(x => x.id === pr.person)?.name || '';
          return (pr.id + ' ' + produtor + ' ' + pr.purpose + ' ' + pr.status).toLowerCase().includes(query);
        });
        scrollEl.innerHTML = renderProposalsTable(filtered);
      }
    }
  }
});

document.addEventListener('change', e => {
  if (e.target.id === 'year-select') {
    year = e.target.value;
    render();
  }
  if (e.target.id === 'proposal-person') {
    const p = people.find(x => x.id === e.target.value);
    const limitInfo = $('#limit-info');
    if (limitInfo && p) limitInfo.textContent = 'Limite de referência: ' + money(p.limit);
  }
});

document.addEventListener('submit', e => {
  if (e.target.id === 'login-form') {
    e.preventDefault();
    const screen = document.querySelector('.login-screen');
    const logo = document.querySelector('.login-brand-img');
    const btn = document.querySelector('.btn-login-submit');

    if (screen) screen.classList.add('authenticating');
    if (logo) logo.classList.add('tx-authenticating');
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = `
        <span class="login-spinner-wrap">
          <svg class="login-spinner" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" opacity="0.25"></circle>
            <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" opacity="0.9"></path>
          </svg>
          <span>Acessando...</span>
        </span>
      `;
    }

    setTimeout(() => {
      sessionStorage.setItem('agro_auth', 'true');
      isAuthenticated = true;
      view = 'home';
      window.location.hash = '#home';
      render();
      toast('Login realizado com sucesso! Bem-vindo à TecnologyX.');
    }, 750);
    return;
  }

  if (e.target.id === 'search-form') {
    e.preventDefault();
    const rawQ = (new FormData(e.target).get('query') || '').toString().trim();
    const q = rawQ.toLowerCase();
    const digitsOnly = rawQ.replace(/\D/g, '');

    // 1. Check properties (name, location, id)
    const foundProp = recentProperties.find(p =>
      p.name.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q)
    );
    if (foundProp) {
      $('#modal')?.close();
      openPerson(foundProp.personId, 'farms', foundProp.farmIndex ?? 0);
      toast('Propriedade localizada: ' + foundProp.name);
      return;
    }

    // 2. Check producers (name, doc with or without punctuation, city, state, id, crop)
    const foundPerson = people.find(p => {
      const pDocDigits = p.doc.replace(/\D/g, '');
      const matchDoc = digitsOnly.length >= 3 && pDocDigits.includes(digitsOnly);
      const matchText = (p.name + ' ' + p.doc + ' ' + p.city + ' ' + p.state + ' ' + p.crop + ' ' + p.id).toLowerCase().includes(q);
      return matchDoc || matchText;
    });

    if (foundPerson) {
      $('#modal')?.close();
      openPerson(foundPerson.id, 'overview');
      toast('Produtor localizado: ' + foundPerson.name);
      return;
    }

    const err = $('#search-error');
    if (err) {
      err.textContent = 'Nenhum imóvel ou produtor encontrado para esta busca. Escolha um dos exemplos abaixo.';
    }
    return;
  }

  if (e.target.id === 'proposal-form') {
    e.preventDefault();
    const f = new FormData(e.target);
    const value = Number(f.get('value'));
    if (!Number.isFinite(value) || value <= 0 || value > 50000000) {
      $('#proposal-error').textContent = 'Informe um valor entre R$ 1 e R$ 50.000.000.';
      return;
    }
    const entry = {
      id: 'PR-DEMO-' + Date.now().toString().slice(-7),
      person: f.get('person'),
      value,
      term: Number(f.get('term')),
      purpose: f.get('purpose'),
      opinion: f.get('opinion').toString().trim(),
      status: 'Em análise',
      date: new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' })
    };
    state.proposals.unshift(entry);
    save();
    $('#modal')?.close();
    view = 'credit';
    render();
    toast('Proposta criada e enviada para análise de crédito.');
  }
});

document.addEventListener('agro-map-select', e => {
  if (e.detail.kind === 'home') {
    openPerson(e.detail.person, 'farms');
  } else {
    farm = e.detail.farm;
    tab = 'farms';
    bounds = true;
    render();
  }
});

window.addEventListener('hashchange', () => {
  const hash = window.location.hash.slice(1);
  if (hash === 'login') {
    view = 'login';
    render();
  } else if (!sessionStorage.getItem('agro_auth')) {
    view = 'login';
    if (window.location.hash !== '#login') window.location.hash = '#login';
    render();
  } else {
    view = hash || 'home';
    render();
  }
});

render();
