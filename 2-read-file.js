/**
 * Lee el fichero "test.txt" que acabas de crear y muestra su contenido por la consola
 */
import { readFileSync } from 'fs';
import { join } from 'path';

// Define the file path
const filePath = join(process.cwd(), 'test.txt');

//Read the file synchronously
const content = readFileSync(filePath, 'utf-8');

//Print it to the console
console.log('File content:', content);