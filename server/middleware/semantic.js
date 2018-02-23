
const path = require("path");
const fs = require("fs");

const cssPath = path.resolve(__dirname, '..', '..', 'node_modules', 'semantic-ui-css/semantic.min.css');
  
export function getSemanticCss () {
  return new Promise(function (resolve, reject) {
    fs.readFile(cssPath, 'utf8', (err, cssData) => {
      if (err) {
          console.error('err', err);
          reject(err)
      }else{
          resolve(cssData)
      }
    }) 
  })
}