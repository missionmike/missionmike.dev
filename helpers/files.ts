import fs from 'fs';
import path from 'path';

/**
 * Helper function to return an array of files.
 * Thanks https://coderrocketfuel.com/article/recursively-list-all-the-files-in-a-directory-using-node-js
 * for the inspiration!
 *
 * @param {string} dirPath the directory to search.
 * @param {string[]} arrayOfFiles the list of file paths.
 * @returns
 */
const getAllFiles = function (dirPath: string, arrayOfFiles: string[] = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, '/', file));
    }
  });

  return arrayOfFiles;
};

export { getAllFiles };
