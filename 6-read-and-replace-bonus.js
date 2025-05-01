/**
 * Crea una función que lea un fichero que remplaze todos los textos de un fichero. Se debe generar un nuevo fichero resultante de nombre "result.html" .
 * 
 * Resultado esperado tras la primera llamada a la función: https://oscarm.tinytake.com/msc/OTcyMDYyOV8yMzM1NjM3Mg
 * 
 * @param {string} htmlFilePath Ruta al fichero a modificar
 * @param {string} textToSearch Texto a buscar
 * @param {string} textToReplace Texto a reemplazar     
 */
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

function replaceTextInFile(htmlFilePath, textToSearch, textToReplace) {
    // Define htmlfilepath
    const filePath = join(process.cwd(), htmlFilePath);

    // Read the file synchronously
    const content = readFileSync(filePath, 'utf-8');

    // replaceAll method
    const result = content.replaceAll(textToSearch, textToReplace);
    
    // Write result
    const filePathResult = join(process.cwd(), 'result-bonus.html');
    writeFileSync(filePathResult, result, 'utf-8');
    console.log('File "result-bonus.html" has been written okly.');
}

const htmlFilePath = process.argv[2];
const textToSearch = process.argv[3];
const textToReplace = process.argv[4];
replaceTextInFile(htmlFilePath, textToSearch, textToReplace);
//replaceTextInFile("./index.html", "Aaron", "Caballero Oscuro");
//replaceTextInFile("./index.html", "El Horno de Leña", "La Pizzería Feliz");

/**
* BONUS: Crea un script que permita parametrizar los 3 argumentos de la función.
* Es decdir, que el script pueda ser invocado des de el terminal así:
* node 6-read-amd-replace.js ./index.html FFC371 ADD8E6
*
* Si implementas este BONUS recuerda borrar las líneas 15, 16 y 17
*/
