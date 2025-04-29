/**
 * Escribe un fichero de nombre "test.txt" con el texto "Hello World!".
 * 
 */

import { writeFileSync } from 'fs';
import { join } from 'path';

// Define the file path
const filePath = join(process.cwd(), 'test.txt');

// write it to the file synchronously
writeFileSync(filePath, 'Hello World', 'utf-8');

console.log('File "test.test" has been written okly.');