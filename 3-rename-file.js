/**
 * Renombra el fichero "bird.jpg" a "pajaro.jpg"
 */
import { renameSync } from 'fs';
import { join } from 'path';

// Define file paths
const birdPath = join(process.cwd(), 'bird.jpg');
const pajaroPath = join(process.cwd(), 'pajaro.jpg');

// Rename the file synchronously

try{
    renameSync(birdPath, pajaroPath);
    console.log('File renamed to "pajaro.jpg" successfully.');
} catch(err) {
    console.error('error: ', err.message);
}