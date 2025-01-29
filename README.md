# Boilerplate React com Vite

Este é um boilerplate básico para projetos em React usando Vite. Ele inclui a configuração inicial para facilitar o desenvolvimento de novos projetos com React.

## 🛠️ Como Usar

### 1. Clonando o Projeto

Primeiro, clone o repositório para o seu computador:

```sh
git clone https://github.com/seu-usuario/boilerplate-react-vite.git
cd boilerplate-react-vite
```

### 2. Instalar Dependências

Instale as dependências do projeto com o comando:

```sh
npm install
```

Isso irá instalar todos os pacotes necessários para o seu projeto.

### 3. Rodar o Projeto

Para rodar o projeto em modo de desenvolvimento, execute o seguinte comando:

```sh
npm run dev
```

Isso iniciará o servidor de desenvolvimento, e você pode acessar o projeto no seu navegador através de `http://localhost:3000`.

### 4. Renomear o Projeto

Caso deseje renomear o seu projeto, você pode usar o script `rename` para alterar o nome do projeto no `package.json` e garantir que o nome seja formatado corretamente em caixa baixa.

#### Passos para Renomear:

1. Execute o script `rename` com o novo nome do projeto:

```sh
npm run rename novo-nome-do-projeto
```

2. O script irá:
   - Renomear o projeto no `package.json`.
   - Remover o arquivo `package-lock.json` e a pasta `node_modules`.
   - Reinstalar as dependências do projeto.

#### Exemplo:

Se você digitar:

```sh
npm run rename MeuProjeto
```

O nome do projeto será alterado para `meuprojeto` (em caixa baixa) no `package.json`.

### 5. Scripts Disponíveis

- **`npm run dev`**: Inicia o servidor de desenvolvimento.
- **`npm run rename [novo-nome]`**: Renomeia o projeto e instala novamente as dependências.

## 🚀 Funcionalidades

- **Vite**: Configuração rápida e otimizada para React.
- **React Router**: Configuração básica para navegação entre páginas.
- **CoreUI**: Uso do CoreUI para estilo rápido e responsivo.

---

### 📝 Considerações Finais

- Este boilerplate é ideal para quem deseja começar rapidamente um projeto em React.
- O script de renomeação facilita a personalização do nome do projeto, além de garantir que as dependências sejam instaladas corretamente.
- Para personalizar ainda mais o projeto, basta modificar as configurações de roteamento e adicionar componentes conforme necessário.