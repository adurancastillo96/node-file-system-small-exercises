/**
 * Crea un script que muestre por consola cada uno de los archivos del directorio 'backup-files'.
 * 
 * REsultado esperado: https://oscarm.tinytake.com/msc/OTcyMDU5MV8yMzM1NjMzNA
 * 
 */
import { readdirSync } from 'fs';
import { join } from 'path';

// Define the path dir
const filePath = join(process.cwd(), 'backup-files');

try {
    // Read the files
    const files = readdirSync(filePath);
  
    // show each file
    files.forEach((file) => {
      console.log(file);
    });
  } catch (err) {
    console.error('error:', err.message);
  }
