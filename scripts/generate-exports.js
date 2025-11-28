const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../src/packages');
const packageJsonPath = path.resolve(__dirname, '../package.json');
const distEsm = './dist/esm/packages/';
const distCjs = './dist/cjs/packages/';
const distTypes = './dist/packages/';

const ignore = ['index.ts', 'tailwind.css'];

const files = fs.readdirSync(srcDir)
  .filter(f => f.endsWith('.ts') && !ignore.includes(f));

const exportsField = {
  "./styles.css": {
    "import": "./dist/styles.css",
    "require": "./dist/styles.css"
  },
};

files.forEach(f => {
  const name = './' + f.replace('.ts', '');
  exportsField[name] = {
    import: distEsm + f.replace('.ts', '.js'),
    require: distCjs + f.replace('.ts', '.js'),
    types: distTypes + f.replace('.ts', '.d.ts'),
  };
});

fs.readFile(packageJsonPath, "utf-8", (err, data) => {
  if (err) {
    console.error("\x1b[31m%s\x1b[0m", "Erro ao ler o arquivo:", err);
  } else {
     const json = JSON.parse(data);
     json.exports = exportsField

     const addExports = JSON.stringify(json, null, 2);

     fs.writeFile(packageJsonPath, addExports, "utf-8", (err) => {
       if (err) {
         console.error("\x1b[31m%s\x1b[0m", "Erro ao escrever no arquivo:", err);
       } else {
         console.log("\x1b[32m%s\x1b[0m", `O campo "exports" foi atualizado com sucesso`);
       }
     });
  }
})

const entrypoints = files.map(f => 'src/packages/' + f);

fs.writeFileSync(
  path.resolve(__dirname, '../entrypoints.generated.json'),
  JSON.stringify(entrypoints, null, 2)
);
