/**
 * Borra el fichero 'borrame.txt' situado en este mismo directorio
 */

import { unlinkSync } from 'fs';
import { join } from 'path';

// Define file path
const filePath = join(process.cwd(), 'borrame.txt');

try {
    // Delete
    unlinkSync(filePath);
    console.log('File Deleted');
  } catch (err) {
    console.error('error:', err.message);
  }