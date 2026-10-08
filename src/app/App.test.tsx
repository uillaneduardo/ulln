import { describe,it,expect } from 'vitest';
import {render,screen,fireEvent} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import App from './App';
function mount(route='/'){return render(<MemoryRouter initialEntries={[route]}><App/></MemoryRouter>)}
describe('ULLN routes',()=>{it('renders hero and links',()=>{mount();expect(screen.getByRole('heading',{level:1})).toHaveTextContent('Explorando ideias.');expect(screen.getByRole('link',{name:/Explorar projetos/})).toBeInTheDocument()});it('renders missing route',()=>{mount('/unknown');expect(screen.getByRole('heading',{name:'Página não encontrada'})).toBeInTheDocument()});it('renders project placeholder',()=>{mount('/projetos/sys-snap');expect(screen.getByText('Conteúdo indisponível')).toBeInTheDocument()});it('opens mobile menu',()=>{mount();const btn=screen.getByRole('button',{name:'Abrir menu'});fireEvent.click(btn);expect(screen.getByRole('navigation',{name:'Navegação móvel'})).toBeInTheDocument();fireEvent.click(screen.getByRole('button',{name:'Fechar menu'}));expect(screen.queryByRole('navigation',{name:'Navegação móvel'})).not.toBeInTheDocument()})});
