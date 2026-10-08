import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Container } from '../ui';
import styles from './Navigation.module.css';
const links=[{to:'/projetos',label:'Projetos'},{to:'/lab',label:'Laboratório'},{to:'/artigos',label:'Artigos'},{to:'/sobre',label:'Sobre'}];
export function MobileNav({onNavigate}:{onNavigate:()=>void}){return <nav id="mobile-navigation" aria-label="Navegação móvel" className={styles.mobile}>{links.map(l=><NavLink key={l.to} to={l.to} onClick={onNavigate}>{l.label}</NavLink>)}</nav>}
export function Header(){const [open,setOpen]=useState(false);return <header className={styles.header}><Container><div className={styles.inner}><Link to="/" className={styles.logo} aria-label="ULLN — Início" onClick={()=>setOpen(false)}>ULLN<span>_</span></Link><nav className={styles.nav} aria-label="Navegação principal">{links.map(l=><NavLink key={l.to} to={l.to}>{l.label}</NavLink>)}</nav><button className={styles.toggle} type="button" aria-controls="mobile-navigation" aria-expanded={open} aria-label={open?'Fechar menu':'Abrir menu'} onClick={()=>setOpen(v=>!v)}>{open?<X size={22}/>:<Menu size={22}/>}</button></div></Container>{open&&<MobileNav onNavigate={()=>setOpen(false)}/>}</header>}
export function Footer(){return <footer className={styles.footer}><Container><div className={styles.footerinner}><span>© {new Date().getFullYear()} ULLN Digital Lab</span><span>Tecnologia explorada. Soluções construídas.</span><a href="https://github.com/uillaneduardo" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div></Container></footer>}
export function Breadcrumb({items}:{items:{label:string;to?:string}[]}){return <nav aria-label="Trilha de navegação" className={styles.crumb}><Link to="/">Início</Link>{items.map((x,i)=><span key={i}> / {x.to?<Link to={x.to}>{x.label}</Link>:x.label}</span>)}</nav>}
