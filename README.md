
LearnFlix - Plataforma Educacional 

Disciplina: Desenvolvimento Front-End com Frameworks


Sobre o Projeto

O LearnFlix é uma Single-Page Application (SPA) desenvolvida em React, focada na experiência mobile (Mobile-First). A aplicação permite que estudantes gerenciem materiais de estudo e acompanhem o seu progresso através de uma interface responsiva e intuitiva.

 Como Executar o Projeto

Este projeto foi desenvolvido no ambiente CodeSandbox


 Tecnologias e Decisões Técnicas

    ReactJS: Estrutura base da aplicação sem uso de bibliotecas de rotas externas (navegação via Estado/State).

    CSS Puro (Mobile-First): Todo o estilo foi construído manualmente, sem frameworks (Bootstrap/Tailwind).

        Estratégia: O CSS padrão define o layout para dispositivos móveis.

        Responsividade: Media Queries são usadas para adaptar o layout para Tablet e Desktop.

    LocalStorage: Implementado para persistência de dados. O login e os novos cursos adicionados permanecem salvos mesmo após atualizar a página.

    Mock Data: Uso de dados simulados (src/data/mockCourses.js) para popular a aplicação inicial.

 Histórias de Usuário 


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



 Estrutura de Pastas
src/
├── components/     # Componentes reutilizáveis (Header, Footer, CardCourse)
├── data/           # Dados mockados (mockCourses.js)
├── pages/          # Telas da aplicação (Login, Home, Courses, Profile)
├── styles/         # Arquivos CSS modulares e global.css
├── App.jsx         # Componente principal e roteamento manual
└── index.js        # Ponto de entrada React

Notas Adicionais

    Persistência: Para "resetar" os dados e ver os mocks originais, limpe o "Application > Local Storage" do navegador ou use uma janela anônima.

    Estilização: As cores principais (Tomato, Preto, Cinza) estão centralizadas em variáveis no global.css para consistência.
