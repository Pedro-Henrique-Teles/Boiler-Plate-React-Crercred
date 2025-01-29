import fs from "fs";
import path from "path";
import { exec } from "child_process";
import { fileURLToPath } from "url";

// Obtém o diretório atual corretamente no ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Novo nome do projeto passado como argumento
const newProjectName = process.argv[2];

if (!newProjectName) {
  console.error("❌ Você precisa fornecer um nome para o projeto.");
  process.exit(1);
}

// Caminho do package.json
const packageJsonPath = path.join(__dirname, "package.json");

// Lê e modifica o package.json
fs.readFile(packageJsonPath, "utf8", (err, data) => {
  if (err) {
    console.error("Erro ao ler package.json:", err);
    return;
  }

  const packageJson = JSON.parse(data);
  packageJson.name = newProjectName.toLowerCase();

  fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), (err) => {
    if (err) {
      console.error("Erro ao renomear o projeto:", err);
      return;
    }
    console.log(`✅ Projeto renomeado para "${newProjectName}" com sucesso!`);

    // Remove o package-lock.json e node_modules
    console.log("🗑️  Removendo package-lock.json e node_modules...");
    exec("rm -rf package-lock.json node_modules", (err) => {
      if (err) {
        console.error("Erro ao remover arquivos:", err);
        return;
      }
      console.log("✅ Arquivos removidos!");

      // Roda npm install
      console.log("📦 Instalando pacotes...");
      exec("npm install", (err, stdout, stderr) => {
        if (err) {
          console.error("Erro ao instalar pacotes:", err);
          return;
        }
        console.log(stdout);
        console.log("✅ Instalação concluída!");
      });
    });
  });
});
