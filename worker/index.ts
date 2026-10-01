import handler from 'vinext/server/fetch-handler';
import {validAdmin} from '../lib/basic-auth';
export default {async fetch(request:Request,env:Cloudflare.Env,ctx:ExecutionContext){
 const path=new URL(request.url).pathname;
 const protectedPath=path==='/solicitacoes'||path.startsWith('/solicitacoes/')||path==='/api/solicitacoes'||path.startsWith('/api/solicitacoes/');
 if(protectedPath && !await validAdmin(request.headers.get('authorization'),env.ADMIN_USER,env.ADMIN_PASSWORD)) return new Response('Acesso restrito. Informe seu usuário e senha.',{status:401,headers:{'WWW-Authenticate':'Basic realm="CrisCred", charset="UTF-8"','Cache-Control':'no-store'}});
 const response=await handler.fetch(request,env,ctx);
 if(!protectedPath)return response;
 const safe=new Response(response.body,response);safe.headers.set('Cache-Control','private, no-store');safe.headers.set('X-Robots-Tag','noindex, nofollow');return safe;
}};
