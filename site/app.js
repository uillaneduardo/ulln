'use strict';

const projects = [
  { name: 'WappHub', category: 'Comunicação', description: 'Plataforma de mensagens e atendimento multicanal em desenvolvimento.', url: 'https://wapphub.ulln.com.br', featured: true },
  { name: 'CenaLivre', category: 'Conteúdo', description: 'Portal para organizar, publicar e assistir séries e produções audiovisuais.', url: 'https://cenalivre.ulln.com.br', featured: true },
  { name: 'FinFam', category: 'Finanças', description: 'Ferramenta para organização e acompanhamento das finanças familiares.', url: 'https://finfam.wapphub.com.br', featured: true },
  { name: 'PKSIG', category: 'Gestão', description: 'Sistema de gestão de assistência técnica e serviços.', url: 'https://pksig.wapphub.com.br' },
  { name: 'Locvia', category: 'Ferramentas', description: 'Aplicação web experimental do laboratório.', url: 'https://locvia.com.br' },
  { name: 'YT Downloader', category: 'Ferramentas', description: 'Ferramenta web para gerenciamento de downloads.', url: 'https://yt.ulln.com.br' },
  { name: 'Ono Pocket Lore', category: 'Experimentos', description: 'Universo e conteúdo de um projeto experimental de jogo.', url: 'https://ono-pocket-lore.wapphub.com.br' },
];
const main = document.getElementById('conteudo');
const escapeHtml = (v) => String(v).replace(/[&<>"']/g, (char) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[char]));
const projectCard = (p) => `<article class="project-card">
  <div class="card-head"><span class="tag">${escapeHtml(p.category)}</span><span class="card-arrow" aria-hidden="true">↗</span></div>
  <h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(p.description)}</p>
  <a href="${escapeHtml(p.url)}" target="_blank" rel="noopener noreferrer" class="card-link" aria-label="Abrir ${escapeHtml(p.name)} em nova guia">Abrir aplicação <span aria-hidden="true">↗</span></a>
</article>`;
const sectionHeader = (kicker, title, description = '') => `<div class="section-header"><div><span class="eyebrow">${kicker}</span><h2>${title}</h2>${description ? `<p>${description}</p>` : ''}</div></div>`;
const pages = {
  '/': () => `
    <section class="hero wrap">
      <div class="eyebrow"><span class="small-dot"></span> Espaço pessoal de tecnologia e projetos</div>
      <h1>Ideias, tecnologia<br>e <em>projetos reais.</em></h1>
      <p class="hero-desc">Olá, sou Uillan Eduardo. Trabalho com tecnologia, eletrônica e computadores. Este é o espaço onde apresento o que estou criando, aprendendo e colocando em prática.</p>
      <div class="hero-actions"><a href="/projetos" data-link class="btn btn-dark">Conhecer meus projetos <span aria-hidden="true">↗</span></a><a href="/sobre" data-link class="btn btn-outline">Um pouco sobre mim</a></div>
      <div class="skills"><span>Desenvolvimento web</span><span>Eletrônica</span><span>Infraestrutura</span><span>Automação</span></div>
    </section>
    <section class="section section-alt"><div class="wrap">
      <div class="heading-with-action">${sectionHeader('01 / Seleção', 'Projetos em destaque', 'Algumas das aplicações que estou desenvolvendo e experimentando.')}<a href="/projetos" data-link class="inline-link">Ver todos os projetos ↗</a></div>
      <div class="cards">${projects.filter(p => p.featured).map(projectCard).join('')}</div>
    </div></section>
    <section class="section"><div class="wrap split">
      <div><span class="eyebrow">02 / Quem sou</span><h2>Gosto de entender<br>como as coisas funcionam.</h2></div>
      <div><p>Minha trajetória passa pela manutenção de dispositivos, computadores e eletrônica. Também desenvolvo aplicações web, estudo infraestrutura e experimento soluções para problemas do dia a dia.</p><a href="/sobre" data-link class="inline-link">Mais sobre mim ↗</a></div>
    </div></section>`,
  '/projetos': () => `
    <section class="wrap page-intro"><span class="eyebrow">01 / Portfólio</span><h1>Projetos <em>& aplicações.</em></h1><p>Uma seleção de ferramentas, plataformas e experimentos em evolução. Cada aplicação abre em uma nova guia; a disponibilidade pode variar.</p></section>
    <section class="wrap project-section"><div class="filters"><label class="search"><span class="visually-hidden">Buscar projetos</span><span aria-hidden="true">⌕</span><input id="project-search" type="search" placeholder="Buscar projetos..." autocomplete="off"></label><label class="filter-select"><span class="visually-hidden">Filtrar categoria</span><select id="project-category"><option value="">Todas as categorias</option>${[...new Set(projects.map(p => p.category))].map(x=>`<option value="${escapeHtml(x)}">${escapeHtml(x)}</option>`).join('')}</select></label></div><div id="project-results" class="cards"></div><p id="empty-results" class="empty" hidden>Nenhum projeto corresponde à sua busca.</p></section>`,
  '/laboratorio': () => `
    <section class="wrap page-intro"><span class="eyebrow">02 / Bastidores</span><h1>Laboratório <em>digital.</em></h1><p>Meu espaço de experimentação com aplicações, servidores, eletrônica e automação.</p></section>
    <section class="wrap lab-grid"><article class="lab-box"><span class="number">01</span><h2>Software</h2><p>Criação de ferramentas web, interfaces e serviços que resolvem necessidades reais.</p></article><article class="lab-box"><span class="number">02</span><h2>Infraestrutura</h2><p>Hospedagem de aplicações em infraestrutura própria, containers, redes e automação de deploy.</p></article><article class="lab-box"><span class="number">03</span><h2>Eletrônica</h2><p>Diagnóstico, reparo de dispositivos e integração entre hardware e software.</p></article></section>
    <section class="wrap callout"><h2>Explorar também é construir.</h2><p>Os projetos públicos estão reunidos em um só lugar. Serviços administrativos e ferramentas internas não são divulgados neste catálogo.</p><a href="/projetos" data-link class="btn btn-dark">Explorar projetos ↗</a></section>`,
  '/sobre': () => `
    <section class="wrap page-intro"><span class="eyebrow">03 / Apresentação</span><h1>Olá, sou <em>Uillan Eduardo.</em></h1><p>Profissional de tecnologia, apaixonado por eletrônica, computadores e pela curiosidade de descobrir como as coisas funcionam.</p></section>
    <section class="wrap about-layout"><div><span class="eyebrow">Minha trajetória</span><h2>Aprender,<br>testar, construir.</h2></div><div class="about-copy"><p>Trabalho com reparo e manutenção de dispositivos de comunicação, celulares, tablets, computadores e outros equipamentos. Meu interesse pela tecnologia vai além da manutenção: gosto de desenvolver aplicações, explorar infraestrutura e criar soluções próprias.</p><p>Este site reúne alguns desses projetos, ideias e experimentos. É um espaço em constante evolução, sem a pretensão de ser um catálogo de produtos finalizados.</p><div class="about-links"><a class="btn btn-dark" href="/projetos" data-link>Ver projetos ↗</a><a class="btn btn-outline" href="https://github.com/uillaneduardo" target="_blank" rel="noopener noreferrer">Meu GitHub ↗</a></div></div></section>`
};
function updateProjects() {
  const query = (document.getElementById('project-search')?.value || '').trim().toLocaleLowerCase('pt-BR');
  const category = document.getElementById('project-category')?.value || '';
  const matching = projects.filter(p => (!category || p.category === category) && [p.name, p.category, p.description].join(' ').toLocaleLowerCase('pt-BR').includes(query));
  document.getElementById('project-results').innerHTML = matching.map(projectCard).join('');
  document.getElementById('empty-results').hidden = matching.length > 0;
}
function render() {
  const path = location.pathname.replace(/\/+$/, '') || '/';
  const found = Object.hasOwn(pages, path);
  main.innerHTML = found ? pages[path]() : `<section class="wrap page-intro"><span class="eyebrow">404</span><h1>Página não encontrada.</h1><p>O endereço solicitado não existe.</p><a href="/" data-link class="btn btn-dark">Voltar ao início ↗</a></section>`;
  const titles = {'/':'Início', '/projetos':'Projetos', '/laboratorio':'Laboratório', '/sobre':'Sobre'};
  document.title = (titles[path] || 'Página não encontrada') + ' — ULLN';
  document.querySelectorAll('[data-nav]').forEach(a => {
    if (a.getAttribute('data-nav') === path) a.setAttribute('aria-current','page');
    else a.removeAttribute('aria-current');
  });
  if (path === '/projetos') {
    document.getElementById('project-search').addEventListener('input', updateProjects);
    document.getElementById('project-category').addEventListener('change', updateProjects);
    updateProjects();
  }
  const menu = document.getElementById('mobile-nav');
  menu.hidden = true;
  document.getElementById('menu-toggle').setAttribute('aria-expanded', 'false');
}
document.addEventListener('click', event => {
  const anchor = event.target.closest?.('a[data-link]');
  if (!anchor || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  if (anchor.origin !== location.origin || anchor.hasAttribute('download')) return;
  event.preventDefault();
  if (location.pathname !== anchor.pathname) {
    history.pushState({}, '', anchor.pathname);
    render();
    window.scrollTo(0, 0);
  }
});
window.addEventListener('popstate', render);
document.getElementById('menu-toggle').addEventListener('click', () => {
  const menu = document.getElementById('mobile-nav');
  menu.hidden = !menu.hidden;
  document.getElementById('menu-toggle').setAttribute('aria-expanded', String(!menu.hidden));
});
document.getElementById('year').textContent = new Date().getFullYear();
render();
