// testback.mjs
import { allreves } from './backend.mjs';

try {
    const records = await allreves();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}
