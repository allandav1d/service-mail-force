<p align="center">
  <a href="https://mailforce.allandavid.tech/" target="blank">
  <img src="src/public/assets/images/logo.svg" width="400" alt="Nest Logo" />
  </a>
  </br>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">Uma API poderosa para envio de e-mails em massa com suporte a multiplos projetos e templates.</p>
  
<p align="center">
  <!-- <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a> -->
</p>

## Descrição

Este projeto consiste no desenvolvimento de uma API sofisticada e dinâmica para a gestão e envio de e-mails em massa. A API foi projetada com uma arquitetura multi-cliente, permitindo que várias empresas ou organizações utilizem a mesma instância para gerenciar e enviar suas campanhas de e-mail.

Um dos principais recursos desta API é a sua capacidade para criar e gerenciar diferentes projetos e templates de e-mail dentro de um mesmo painel. Isso significa que os usuários podem facilmente alternar entre diferentes campanhas, personalizando suas mensagens para atender a diferentes públicos e objetivos.

Além disso, a API suporta a integração com vários servidores de e-mail, oferecendo aos usuários a flexibilidade de escolher o serviço de e-mail que melhor atende às suas necessidades. A API também fornece um conjunto robusto de ferramentas de gerenciamento de usuários e clientes, tornando mais fácil para as empresas manter o controle de suas campanhas de e-mail.

No geral, esta API foi projetada para tornar o gerenciamento e o envio de e-mails em massa uma tarefa mais simples, eficiente e personalizada. Ao mesmo tempo, ela oferece uma solução poderosa para desenvolvedores e provedores de serviços que procuram uma forma robusta e confiável de gerenciar e-mails em grande escala.

## Motivação

Em uma era digital, a comunicação eficiente por meio de e-mails é crucial para o sucesso de qualquer organização. Gerenciar e-mails em larga escala, no entanto, pode ser um desafio. Este projeto visa desenvolver uma API robusta e flexível para facilitar o envio de e-mails em massa, permitindo a personalização e segmentação eficazes de mensagens. Sua importância é dupla: empresas podem melhorar sua comunicação com os clientes e desenvolvedores ganham uma ferramenta confiável para o gerenciamento de e-mails. Portanto, este projeto representa um passo vital para aprimorar a comunicação digital.

## Funcionalidades
 - Plataforma
    - [] - Gestão de Clientes (Empresas)
    - [] - Gestão de projetos
    - [] - Gestão de usuários
    - [] - Gestão de servidores de envio de e-mails
    - [] - Conexão com sistema de envio de e-mails default
    - [] - Habilitar ou desabilitar envio de e-mails
    - [] - Habilitar ou desabilitar telas com base no perfil do usuário
 - Clientes
    - [] - Criação de clientes
    - [] - Alteração de clientes
    - [] - Desativação de clientes
    - [] - Vincular usuários a clientes
    - [] - Vincular projetos a clientes
    - [] - Vincular servidores de envio de e-mails a clientes
 - Provedores
    - [] - Criação de provedores de envio de e-mails
    - [] - Alteração de provedores de envio de e-mails
    - [] - Desativação de provedores de envio de e-mails
    - [] - Vincular clientes a provedores de envio de e-mails
 - Usuarios
    - [] - Criação de usuários
    - [] - Autenticação de usuários
    - [] - Perfil de usuários [Administrador, Desenvolvedor, Usuário]
    - [] - Vincular usuários a projetos
    - [] - Vincular usuários a projetos com permissões [Administrador, Desenvolvedor, Usuário]
    - [] - Desativar usuários
    - [] - Ativar usuários
 - Projeto
    - [] - Criação de projetos
    - [] - Alteração de projetos
    - [] - Desativação de projetos
    - [] - Vincular template de e-mail padrão
    - [] - Criação de templates de e-mail para cada projeto
    - [] - Criação de variáveis para cada template de e-mail de cada projeto
    - [] - Gerar chave de criptografia para o projeto
    - [] - API key por o projeto
    - [] - Permitir que o projeto se conecte a um sistema de envio de e-mails customizado
  - E-mail
    - [] - Criação de templates de e-mail para cada projeto
    - [] - Criação de variações de templates de e-mail para cada projeto
    - [] - Template padrão para projetos que não possuem template customizado
    - [] - Envio de e-mails para um ou mais destinatários
    - [] - Envio de e-mails para um ou mais destinatários com cópia oculta
  - Filas
    - [] - Criação de filas de e-mails
    - [] - Criação de filas de e-mails com prioridade
    - [] - Criação de filas de e-mails com erro de envio ou falha na comunicação com o servidor de envio de e-mails
    - [] - Pausar filas de e-mails com erro de envio ou falha na comunicação com o servidor de envio de e-mails
    - [] - Enviar alerta de falha na comunicação com o servidor de envio de e-mails
  - Relatórios
    - [] - Relatório de envio de e-mails
    - [] - Relatório de erros de envio de e-mails
    - [] - Relatório de erros de envio de e-mails por servidor
    - [] - Relatório de erros de envio de e-mails por projeto
  - Logs
    - [] - Criação de logs de envio de e-mails
    - [] - Criação de logs de erros de envio de e-mails
    - [] - Ciação de logs d e alteração de templates de e-mails
    - [] - Criação de logs de alteração de variações de templates de e-mails
    - [] - Criação de logs de alteração de projetos
    - [] - Criação de logs de alteração de usuários

## Tecnologias utilizadas
- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma](https://www.prisma.io/)
- [Redis](https://redis.io/)
- [Bull](https://optimalbits.github.io/bull/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Swagger](https://swagger.io/)

## Installation

```bash
$ sudo ./start.sh

# Será solicitado que você informe entre as opções abaixo:
# 1. Desenvolvimento (com hot-reload)
# 2. Ambiente de produção (sem hot-reload)

# Se estiver dando manutenção no projeto, escolha a opção 1.
# Se estiver configurando um ambiente produtivo (integração, homologação ou produção), escolha a opção 2.

```

## Rodando a aplicação

```bash

```

## Test
A aplicação possui testes unitários e de integração. Para executá-los, utilize os comandos abaixo:

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

