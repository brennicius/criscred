import {isAdmin} from '../../lib/admin';import Panel from './panel';
export const dynamic='force-dynamic';
export default async function Leads(){if(!await isAdmin())return <main style={{display:'block'}}><section className="surface"><h2>Acesso restrito</h2><p>Seu e-mail precisa ser autorizado para visualizar as solicitações.</p><a href="/">Voltar ao formulário</a></section></main>;return <Panel/>;}
