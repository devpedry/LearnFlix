
LearnFlix — Plataforma Educacional (React | Mobile-First SPA)

Projeto em desenvolvimento na disciplina **Desenvolvimento Front-End com Frameworks**.


## Sobre o Projeto

O LearnFlix é uma Single-Page Application (SPA) desenvolvida em React, com abordagem Mobile-First, voltada para a organização de materiais de estudo e acompanhamento de progresso do usuário.

## Demonstração Online

A aplicação está disponível online via **GitHub Pages**:

🔗 https://devpedry.github.io/LearnFlix/

> O projeto é uma Single-Page Application (SPA).  
> Para resetar os dados salvos, limpe o Local Storage do navegador ou utilize uma janela anônima.




## Tecnologias e Decisões Técnicas

As escolhas técnicas do projeto priorizam simplicidade, clareza de código e aderência aos requisitos da disciplina.


- **ReactJS**: Estrutura base da aplicação sem uso de bibliotecas de rotas externas (navegação via estado).
- **CSS Puro (Mobile-First)**: Estilização manual sem frameworks (Bootstrap/Tailwind).
- Estratégia: layout padrão para dispositivos móveis.
- Responsividade: Media Queries para Tablet e Desktop.
- **LocalStorage**: Persistência de login e cursos adicionados pelo usuário.
- **Mock Data**: Dados simulados (`src/data/mockCourses.js`) para popular a aplicação inicial.

## Histórias de Usuário 


US01 - Acesso e Autenticação

    História: Como aluno, quero entrar na plataforma usando meu email para acessar meus conteúdos.

    Implementação: Tela de Login com validação de campos obrigatórios, formato de email e senha mínima (4 caracteres). Feedback visual de erro (vermelho) implementado.

US02 - Navegação em Dispositivos Móveis

    História: Como usuário mobile, quero um menu acessível que não ocupe toda a tela enquanto navego.

    Implementação: Menu de barrinhas que abre uma gaveta lateral em telas pequenas e se transforma automaticamente em menu horizontal em telas maiores .

US03 - Biblioteca de Cursos

    História: Como aluno, quero visualizar uma lista de materiais com imagens e barra de progresso.

    Implementação: Componente CardCourse reutilizável, exibindo thumbnail, tipo de mídia (ícone dinâmico) e barra de progresso visual.

US04 - Gestão de Materiais

    História: Como usuário, quero adicionar links externos (YouTube, Artigos) à minha lista.

    Implementação: Formulário na aba "Biblioteca" que valida os dados e salva o novo curso no localStorage e na lista atual.

US05 - Perfil Personalizado

    História: Como aluno, quero ver meus dados e filtrar apenas os cursos que adicionei.

    Implementação: Página de perfil que exibe o avatar e filtra a lista geral para mostrar apenas os cursos vinculados ao usuário logado.



 ## Estrutura de Pastas
src/
├── components/     # Componentes reutilizáveis (Header, Footer, CardCourse)
├── data/           # Dados mockados (mockCourses.js)
├── pages/          # Telas da aplicação (Login, Home, Courses, Profile)
├── styles/         # Arquivos CSS modulares e global.css
├── App.jsx         # Componente principal e roteamento manual
└── index.js        # Ponto de entrada React

## Notas Adicionais

    Persistência: Para "resetar" os dados e ver os mocks originais, limpe o "Application > Local Storage" do navegador ou use uma janela anônima.

    Estilização: As cores principais (Tomato, Preto, Cinza) estão centralizadas em variáveis no global.css para consistência.
