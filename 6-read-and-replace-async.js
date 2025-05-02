/**
 * Crea una función que lea un fichero que remplaze todos los textos de un fichero. Se debe generar un nuevo fichero resultante de nombre "result.html" .
 * 
 * Resultado esperado tras la primera llamada a la función: https://oscarm.tinytake.com/msc/OTcyMDYyOV8yMzM1NjM3Mg
 * 
 * @param {string} htmlFilePath Ruta al fichero a modificar
 * @param {string} textToSearch Texto a buscar
 * @param {string} textToReplace Texto a reemplazar     
 */
import { promises } from 'fs';
import { join } from 'path';

async function replaceTextInFile(htmlFilePath, textToSearch, textToReplace) {
    // Define htmlfilepath
    const filePath = join(process.cwd(), htmlFilePath);

    // Read the file asynchronously
    const content = await promises.readFile(filePath, 'utf-8');

    // replaceAll method
    const result = content.replaceAll(textToSearch, textToReplace);

    // Write result
    const filePathResult = join(process.cwd(), 'result-async.html');
    await promises.writeFile(filePathResult, result, 'utf-8');
    console.log('File "result-async.html" has been written successfully.');

}

replaceTextInFile("./index.html", "FFC371", "ADD8E6");
//replaceTextInFile("./index.html", "Aaron", "Caballero Oscuro");
//replaceTextInFile("./index.html", "El Horno de Leña", "La Pizzería Feliz");

/**
* BONUS: Crea un script que permita parametrizar los 3 argumentos de la función.
* Es decdir, que el script pueda ser invocado des de el terminal así:
* node 6-read-amd-replace.js ./index.html FFC371 ADD8E6
*
* Si implementas este BONUS recuerda borrar las líneas 15, 16 y 17
*/
