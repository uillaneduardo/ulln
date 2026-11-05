export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  url: string;
  featured?: boolean;
};

export const projects: Project[] = [
  { slug: 'wapphub', name: 'WappHub', category: 'Comunicação', summary: 'Plataforma de mensagens e atendimento multicanal em desenvolvimento.', url: 'https://wapphub.com.br', featured: true },
  { slug: 'cenalivre', name: 'CenaLivre', category: 'Mídia', summary: 'Portal de séries, episódios e produções audiovisuais.', url: 'https://cenalivre.ulln.com.br', featured: true },
  { slug: 'finfam', name: 'FinFam', category: 'Finanças', summary: 'Aplicação de organização e acompanhamento das finanças familiares.', url: 'https://finfam.wapphub.com.br', featured: true },
  { slug: 'pksig', name: 'PKSIG', category: 'Gestão', summary: 'Sistema de gestão voltado à rotina de assistência técnica.', url: 'https://pksig.wapphub.com.br' },
  { slug: 'locvia', name: 'Locvia', category: 'Aplicações web', summary: 'Aplicação web experimental hospedada no laboratório.', url: 'https://locvia.com.br' },
  { slug: 'yt', name: 'YT Downloader', category: 'Ferramentas', summary: 'Utilitário web de gerenciamento de downloads.', url: 'https://yt.ulln.com.br' },
  { slug: 'ono-pocket-lore', name: 'Ono Pocket Lore', category: 'Jogos', summary: 'Experimento de universo e conteúdo para um projeto de jogo.', url: 'https://ono-pocket-lore.wapphub.com.br' },
  { slug: 'git', name: 'Código aberto', category: 'Desenvolvimento', summary: 'Repositórios, protótipos e histórico de projetos.', url: 'https://github.com/uillaneduardo' },
];
