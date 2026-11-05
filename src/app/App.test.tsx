import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

function mount(route = '/') { return render(<MemoryRouter initialEntries={[route]}><App/></MemoryRouter>); }

describe('ULLN routes', () => {
  it('renders personal introduction and featured project links', () => {
    mount();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Tecnologia para');
    const link = screen.getByRole('link', { name: /Abrir WappHub em nova guia/i });
    expect(link).toHaveAttribute('href', 'https://wapphub.com.br');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
  it('filters the project directory by search and category', () => {
    mount('/projetos');
    fireEvent.change(screen.getByPlaceholderText('Buscar projetos...'), { target: { value: 'CenaLivre' } });
    expect(screen.getByRole('heading', { name: 'CenaLivre' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'FinFam' })).not.toBeInTheDocument();
    fireEvent.change(screen.getByPlaceholderText('Buscar projetos...'), { target: { value: '' } });
    fireEvent.change(screen.getByRole('combobox', { name: 'Categoria' }), { target: { value: 'Finanças' } });
    expect(screen.getByRole('heading', { name: 'FinFam' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'CenaLivre' })).not.toBeInTheDocument();
  });
  it('renders missing route', () => {
    mount('/unknown');
    expect(screen.getByRole('heading', { name: 'Página não encontrada' })).toBeInTheDocument();
  });
  it('opens mobile menu', () => {
    mount();
    fireEvent.click(screen.getByRole('button', { name: 'Abrir menu' }));
    expect(screen.getByRole('navigation', { name: 'Navegação móvel' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Fechar menu' }));
    expect(screen.queryByRole('navigation', { name: 'Navegação móvel' })).not.toBeInTheDocument();
  });
});
