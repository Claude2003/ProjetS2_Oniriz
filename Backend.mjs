// backend.mjs
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');



export async function allreves() {
    const records = await pb.collection('journal').getFullList() ;
    return records ;
    }
