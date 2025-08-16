# Projeto de Hooks em React (Semana 2)

Este projeto foi desenvolvido como parte da tarefa da semana 2 para aprofundar o conhecimento em React e nos conceitos de Hooks.

### Funcionalidades

A aplicação agora inclui dois novos componentes, construídos com o uso dos hooks `useState` e `useEffect`:

* **Contador (`<Counter />`):** Um componente simples que usa `useState` para gerenciar o estado numérico de um contador. Ele também utiliza `useEffect` para atualizar o título do navegador em tempo real, refletindo o valor atual do contador.
* **Timer (`<Timer />`):** Um componente que usa `useState` para rastrear o tempo em segundos. O `useEffect` é utilizado para iniciar um `setInterval` que roda a cada segundo. A função de limpeza (`cleanup`) do `useEffect` garante que o timer seja interrompido corretamente para evitar problemas de performance.

O projeto também mantém o componente de lista da semana anterior, mostrando como diferentes componentes podem coexistir e interagir.

### Como Rodar o Projeto

Para visualizar a aplicação em seu ambiente local, siga as instruções abaixo:

1.  Clone este repositório para sua máquina local.
2.  Instale as dependências do projeto.
    ```bash
    npm install
    ```
3.  Inicie o servidor de desenvolvimento.
    ```bash
    npm start
    ```
A sua aplicação será aberta automaticamente em seu navegador, exibindo os componentes de contador e timer.