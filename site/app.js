'use strict';
const projects = [
  {name:'WappHub',kind:'Comunicação',description:'Mensagens e atendimento multicanal.',url:'https://wapphub.ulln.com.br'},
  {name:'CenaLivre',kind:'Mídia',description:'Portal de séries e produções.',url:'https://cenalivre.ulln.com.br'},
  {name:'FinFam',kind:'Finanças',description:'Organização de finanças familiares.',url:'https://finfam.wapphub.com.br'},
  {name:'PKSIG',kind:'Gestão',description:'Gestão para assistência técnica.',url:'https://pksig.wapphub.com.br'},
  {name:'Locvia',kind:'Ferramentas',description:'Aplicação web experimental.',url:'https://locvia.com.br'},
  {name:'YT Downloader',kind:'Utilitário',description:'Gerenciamento de downloads.',url:'https://yt.ulln.com.br'},
  {name:'Ono Pocket Lore',kind:'Jogos',description:'Universo de jogo experimental.',url:'https://ono-pocket-lore.wapphub.com.br'}
];
const main = document.getElementById('conteudo');
const esc = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const cards = (items) => items.map(p => `<article class="project">
  <div class="project-meta"><span>${esc(p.kind)}</span><span aria-hidden="true">↗</span></div>
  <h3>${esc(p.name)}</h3><p>${esc(p.description)}</p>
  <a href="${esc(p.url)}" target="_blank" rel="noopener noreferrer" aria-label="Abrir ${esc(p.name)} em nova guia">Abrir aplicação ↗</a>
</article>`).join('');
const pages = {
  '/': () => `<div class="home layout">
    <section class="intro panel"><span class="eyebrow"><i class="dot"></i> Portfólio pessoal</span>
      <h1>Olá, sou<br><em>Uillan Eduardo.</em></h1>
      <p>Trabalho com tecnologia, eletrônica e computadores. Crio aplicações, exploro infraestrutura e transformo ideias em projetos.</p>
      <div class="pills"><span>Software</span><span>Eletrônica</span><span>Homelab</span></div>
      <div class="intro-actions"><a class="primary" href="/sobre" data-link>Sobre mim ↗</a><a class="subtle" href="/laboratorio" data-link>Meu laboratório →</a></div>
    </section>
    <section class="work panel"><div class="section-header"><div><span class="eyebrow">Projetos / Acesso rápido</span><h2>O que estou construindo</h2></div><a href="/projetos" data-link class="all-link">Ver projetos →</a></div>
      <div class="projects">${cards(projects)}</div>
    </section>
  </div>`,
  '/projetos': () => `<section class="full panel"><div class="section-header"><div><span class="eyebrow">Portfólio / Projetos</span><h1>Aplicações e experimentos.</h1><p>Projetos em desenvolvimento. Cada link abre uma nova guia.</p></div></div><div class="controls"><label><span class="sr">Buscar projetos</span><input id="search" type="search" placeholder="Buscar projeto..." autocomplete="off"></label><label><span class="sr">Filtrar categoria</span><select id="category"><option value="">Todas as categorias</option>${[...new Set(projects.map(p=>p.kind))].map(c=>`<option>${esc(c)}</option>`).join('')}</select></label></div><div class="projects projects-full" id="results"></div><p class="empty" id="no-results" hidden>Nenhum projeto encontrado.</p></section>`,
  '/laboratorio': () => `<section class="full panel"><span class="eyebrow">Bastidores / Laboratório</span><h1>Um lugar para experimentar.</h1><p class="page-lead">Desenvolvimento, infraestrutura e eletrônica em um espaço de aprendizado contínuo.</p><div class="topic-grid"><article><span>01 / Software</span><h2>Aplicações web</h2><p>Interfaces, ferramentas, sistemas e serviços construídos para resolver problemas concretos.</p></article><article><span>02 / Infraestrutura</span><h2>Homelab</h2><p>Containers, serviços próprios, redes e publicação segura pelo Cloudflare Tunnel.</p></article><article><span>03 / Hardware</span><h2>Eletrônica</h2><p>Reparo, diagnóstico e integração entre dispositivos e software.</p></article></div><a class="primary" href="/projetos" data-link>Explorar projetos ↗</a></section>`,
  '/sobre': () => `<section class="full panel about"><div><span class="eyebrow">Quem sou</span><h1>Curiosidade que vira projeto.</h1><div class="pills"><span>Tecnologia</span><span>Manutenção</span><span>Desenvolvimento</span></div></div><div class="about-text"><h2>Uillan Eduardo</h2><p>Trabalho com reparo e manutenção de celulares, tablets, computadores e outros dispositivos. A eletrônica e os computadores sempre despertaram minha curiosidade sobre como as coisas funcionam.</p><p>Também desenvolvo aplicações, exploro infraestrutura e automação. O ULLN é o espaço onde reúno iniciativas, soluções e experimentos que surgem desse interesse.</p><div class="intro-actions"><a href="/projetos" data-link class="primary">Conhecer projetos ↗</a><a href="https://github.com/uillaneduardo" class="subtle" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div></div></section>`
};
function updateResults() {
  const term = (document.getElementById('search')?.value || '').trim().toLocaleLowerCase('pt-BR');
  const category = document.getElementById('category')?.value || '';
  const filtered = projects.filter(p => (!category || p.kind === category) && [p.name,p.kind,p.description].join(' ').toLocaleLowerCase('pt-BR').includes(term));
  document.getElementById('results').innerHTML = cards(filtered);
  document.getElementById('no-results').hidden = filtered.length !== 0;
}
function render(){
  const path = location.pathname.replace(/\/+$/, '') || '/';
  const found = Object.hasOwn(pages,path);
  main.innerHTML = found ? pages[path]() : `<section class="full panel"><span class="eyebrow">404</span><h1>Página não encontrada.</h1><p>O endereço solicitado não existe.</p><a href="/" data-link class="primary">Voltar ao início ↗</a></section>`;
  document.title = ({'/':'Início','/projetos':'Projetos','/laboratorio':'Laboratório','/sobre':'Sobre'}[path] || 'Página não encontrada') + ' — ULLN';
  document.querySelectorAll('[data-nav]').forEach(a => a.getAttribute('data-nav')===path?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current'));
  if(path==='/projetos'){
    document.getElementById('search').addEventListener('input',updateResults);
    document.getElementById('category').addEventListener('change',updateResults);
    updateResults();
  }
}
document.addEventListener('click',event=>{
  const a = event.target.closest?.('a[data-link]');
  if(!a || event.defaultPrevented || event.button!==0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || a.origin!==location.origin) return;
  event.preventDefault();
  if(location.pathname!==a.pathname){history.pushState({},'',a.pathname);render();main.focus({preventScroll:true});}
});
window.addEventListener('popstate',render);
document.getElementById('year').textContent = new Date().getFullYear();
render();
