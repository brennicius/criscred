export async function validAdmin(authorization: string | null, user?: string, password?: string) {
 if (!user || !password || password.length < 16 || !authorization?.startsWith('Basic ') || authorization.length > 4096) return false;
 let decoded: string; try {decoded = new TextDecoder('utf-8', {fatal:true}).decode(Uint8Array.from(atob(authorization.slice(6)), c=>c.charCodeAt(0)));} catch {return false;}
 const digest = (v:string)=>crypto.subtle.digest('SHA-256', new TextEncoder().encode(v));
 const [a,b] = await Promise.all([digest(decoded),digest(`${user}:${password}`)]);
 const x=new Uint8Array(a), y=new Uint8Array(b);let difference=0;
 for(let i=0;i<x.length;i++) difference |= x[i]^y[i];
 return difference===0;
}
