import { useState } from 'react';
import { ArrowUpRight, Search } from 'lucide-react';
import { ActionLink, Container, Section, Eyebrow, Heading, Text, EmptyState } from '../components/ui';
import { Breadcrumb } from '../components/navigation';
import { projects, type Project } from '../data/projects';
import styles from './Pages.module.css';

function ProjectDirectory({ compact = false }: { compact?: boolean }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todos');
  const categories = ['Todos', ...new Set(projects.map((project) => project.category))];
  const visible = projects.filter((project) => {
    const matchesCategory = category === 'Todos' || project.category === category;
    const matchesSearch = `${project.name} ${project.summary} ${project.category}`.toLocaleLowerCase('pt-BR').includes(search.toLocaleLowerCase('pt-BR').trim());
    return matchesCategory && matchesSearch;
  });
  const shown = compact ? projects.filter((project) => project.featured) : visible;

  return <>
    {!compact && <div className={styles.filters}>
      <label className={styles.searchField}><Search size={18} aria-hidden="true"/><span className={styles.srOnly}>Buscar projetos</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar projetos..." /></label>
      <label className={styles.categoryField}><span className={styles.srOnly}>Categoria</span><select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
    </div>}
    {shown.length ? <div className={styles.projectGrid}>{shown.map((project: Project) => <article className={styles.projectCard} key={project.slug}>
      <div className={styles.cardTop}><span className={styles.category}>{project.category}</span><ArrowUpRight size={18} aria-hidden="true"/></div>
      <h3>{project.name}</h3><p>{project.summary}</p>
      <a className={styles.openProject} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${project.name} em nova guia`}>Abrir aplicação <ArrowUpRight size={16} aria-hidden="true"/></a>
    </article>)}</div> : <div className={styles.noResults} role="status">Nenhum projeto encontrado. Tente outro termo ou categoria.</div>}
  </>;
}

export function Home() { return <>
  <div className={styles.hero}><Container><div className={styles.heroContent}><Eyebrow>ULLN / Laboratório digital independente</Eyebrow><Heading as="h1">Tecnologia para<br/><span className={styles.accent}>tirar ideias do papel.</span></Heading><p className={styles.lead}>Sou Uillan Eduardo. Trabalho com tecnologia, eletrônica, desenvolvimento de software e infraestrutura. Aqui compartilho os projetos que estou construindo, estudando e experimentando.</p><div className={styles.actions}><ActionLink to="/projetos">Explorar projetos ↗</ActionLink><ActionLink to="/sobre" variant="outline">Sobre mim</ActionLink></div></div><div className={styles.heroFoot}><span>Software</span><span>Eletrônica</span><span>Infraestrutura</span><span>Experimentação</span></div></Container></div>
  <Section><Container><div className={styles.sectionTitle}><div><Eyebrow>01 / Em destaque</Eyebrow><Heading>Projetos em desenvolvimento</Heading><Text>Aplicações e ideias que fazem parte do meu laboratório. Os links abrem em uma nova guia.</Text></div><ActionLink to="/projetos" variant="outline">Ver todos ↗</ActionLink></div><ProjectDirectory compact/></Container></Section>
  <Section><Container><div className={styles.aboutPanel}><div><Eyebrow>02 / Sobre</Eyebrow><Heading>Curiosidade que vira projeto.</Heading></div><div><Text>Meu trabalho reúne manutenção de dispositivos, eletrônica, sistemas web e infraestrutura de servidores. Gosto de entender como as coisas funcionam e transformar esse conhecimento em ferramentas úteis.</Text><ActionLink to="/sobre" variant="outline">Conhecer minha trajetória ↗</ActionLink></div></div></Container></Section>
  <Section><Container><div className={styles.sectionTitle}><div><Eyebrow>03 / Laboratório</Eyebrow><Heading>Um espaço para experimentar.</Heading><Text>Prototipação, automação e serviços hospedados em infraestrutura própria.</Text></div><ActionLink to="/lab" variant="outline">Ver laboratório ↗</ActionLink></div></Container></Section>
</>}

function Page({ label, title, description, children }: { label: string; title: string; description: string; children?: React.ReactNode }) { return <main className={styles.page}><Container><Breadcrumb items={[{ label: title }]}/><Eyebrow>{label}</Eyebrow><Heading as="h1">{title}</Heading><p className={styles.pageintro}>{description}</p><div className={styles.details}>{children}</div></Container></main> }
export function Projects() { return <Page label="01 / Projetos" title="Projetos e aplicações" description="Uma seleção dos sistemas, ferramentas e experimentos que desenvolvo. A disponibilidade dos serviços pode variar."><ProjectDirectory/></Page> }
export function ProjectDetails() { return <Page label="Projetos" title="Catálogo de projetos" description="Explore as aplicações disponíveis na página de projetos."><ActionLink to="/projetos">Ver projetos ↗</ActionLink></Page> }
export function Lab() { return <Page label="02 / Laboratório" title="Laboratório" description="Experimentos com software, eletrônica, automação e infraestrutura de serviços."><div className={styles.aboutPanel}><div><Heading as="h2">Construir, testar, aprender.</Heading></div><div><Text>Parte dos projetos funciona em um homelab com serviços em containers, publicação por Cloudflare Tunnel e desenvolvimento versionado no GitHub. Os painéis de administração e serviços internos não fazem parte do catálogo público.</Text><a href="https://github.com/uillaneduardo" target="_blank" rel="noopener noreferrer">Ver repositórios no GitHub ↗</a></div></div></Page> }
export function Articles() { return <Page label="03 / Artigos" title="Notas e artigos" description="Registros técnicos, estudos e documentação em preparação."><EmptyState title="Publicações em preparação" description="Os primeiros artigos serão disponibilizados aqui."/></Page> }
export function About() { return <Page label="04 / Sobre" title="Olá, sou Uillan Eduardo." description="Profissional de tecnologia e entusiasta de eletrônica, computadores e desenvolvimento."><div className={styles.aboutPanel}><div><Heading as="h2">Aprender construindo.</Heading></div><div><Text>Atuo com reparo e manutenção de celulares, tablets, computadores e outros dispositivos. Minha curiosidade também me levou ao desenvolvimento de aplicações, infraestrutura, automação e projetos próprios.</Text><Text>O ULLN é meu espaço para apresentar essas iniciativas: soluções para problemas cotidianos, produtos em desenvolvimento e experimentos que ajudam a transformar ideias em algo concreto.</Text><a href="https://github.com/uillaneduardo" target="_blank" rel="noopener noreferrer">Acompanhar no GitHub ↗</a></div></div></Page> }
export function NotFound() { return <Page label="404 / Página não encontrada" title="Página não encontrada" description="O endereço solicitado não existe ou foi movido."><ActionLink to="/">Voltar ao início ↗</ActionLink></Page> }
