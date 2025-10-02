# GitHub Repos Finder

Aplicação simples para buscar e listar os repositórios públicos de um usuário no **GitHub**, com alternância entre **tema claro e escuro** inspirado no visual oficial da plataforma.

---

## Funcionalidades

-  Buscar repositórios públicos de qualquer usuário do GitHub  
-  Exibir nome e descrição de cada repositório, com link direto  
-  Alternância de tema (Dark/Light Mode)  
-  Estilo inspirado na paleta de cores oficial do GitHub

---

##  Tecnologias Utilizadas

- **HTML5**  
- **CSS3**  
- **JavaScript**  
- **Fetch API** para requisições REST 

---

---

## API Utilizada

A aplicação consome a GitHub REST API:
   ```
   GET https://api.github.com/users/{username}/repos
   ```