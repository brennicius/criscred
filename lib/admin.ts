import {env} from 'cloudflare:workers';
import {headers} from 'next/headers';
import {validAdmin} from './basic-auth';
export async function isAdmin(){return validAdmin((await headers()).get('authorization'),env.ADMIN_USER,env.ADMIN_PASSWORD);}
