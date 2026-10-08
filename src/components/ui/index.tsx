import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './UI.module.css';
export function Container({children,className=''}:HTMLAttributes<HTMLDivElement>){return <div className={`${styles.container} ${className}`}>{children}</div>}
export function Section({children,id}: {children:ReactNode;id?:string}){return <section id={id} className={styles.section}>{children}</section>}
export function Eyebrow({children}:{children:ReactNode}){return <span className={styles.eyebrow}>{children}</span>}
export function Heading({children,as:Tag='h2'}:{children:ReactNode;as?:'h1'|'h2'|'h3'}){return <Tag>{children}</Tag>}
export function Text({children}:{children:ReactNode}){return <p>{children}</p>}
export function Button({children,variant='primary',...rest}:ButtonHTMLAttributes<HTMLButtonElement>&{variant?:'primary'|'secondary'|'outline'}){return <button {...rest} className={`${styles.button} ${styles[variant]}`}>{children}</button>}
export function ActionLink({children,to,variant='primary'}:{children:ReactNode;to:string;variant?:'primary'|'secondary'|'outline'}){return <Link className={`${styles.button} ${styles[variant]}`} to={to}>{children}</Link>}
export function Badge({children}:{children:ReactNode}){return <span className={styles.badge}>{children}</span>}
export function Tag({children}:{children:ReactNode}){return <Badge>{children}</Badge>}
export function Divider(){return <hr className={styles.divider}/>}
export function Grid({children}:{children:ReactNode}){return <div className={styles.grid}>{children}</div>}
export function Stack({children,gap=16}:{children:ReactNode;gap?:number}){return <div style={{display:'flex',flexDirection:'column',gap}}>{children}</div>}
export function IconButton({label,children,...rest}:ButtonHTMLAttributes<HTMLButtonElement>&{label:string}){return <button aria-label={label} {...rest} className={`${styles.button} ${styles.outline}`}>{children}</button>}
export function ProjectCard({title,description,category}:{title:string;description:string;category:string}){return <article className={styles.card}><Eyebrow>{category}</Eyebrow><div><Heading as="h3">{title}</Heading><Text>{description}</Text></div></article>}
export function ArticleCard({title,description}:{title:string;description:string}){return <article className={styles.card}><Eyebrow>Artigo</Eyebrow><div><Heading as="h3">{title}</Heading><Text>{description}</Text></div></article>}
export function SectionHeading({eyebrow,title}:{eyebrow:string;title:string}){return <div><Eyebrow>{eyebrow}</Eyebrow><Heading>{title}</Heading></div>}
export function EmptyState({title,description}:{title:string;description:string}){return <div role="status" className={styles.card}><Heading as="h2">{title}</Heading><Text>{description}</Text></div>}
