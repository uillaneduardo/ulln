import { Routes, Route, Outlet } from 'react-router-dom';
import { Header, Footer } from '../components/navigation';
import { Home, Projects, ProjectDetails, Lab, Articles, About, NotFound } from '../pages';
function SiteLayout(){return <><a className="skip-link" href="#main-content">Ir para o conteúdo</a><Header/><div id="main-content"><Outlet/></div><Footer/></>}
export default function App(){return <Routes><Route element={<SiteLayout/>}><Route index element={<Home/>}/><Route path="projetos" element={<Projects/>}/><Route path="projetos/:slug" element={<ProjectDetails/>}/><Route path="lab" element={<Lab/>}/><Route path="artigos" element={<Articles/>}/><Route path="sobre" element={<About/>}/><Route path="404" element={<NotFound/>}/><Route path="*" element={<NotFound/>}/></Route></Routes>}
