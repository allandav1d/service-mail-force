#!/bin/sh

echo "Escolha o modo de execução:"
echo "1. Desenvolvimento (com hot-reload)"
echo "2. Ambiente de produção (sem hot-reload)"
read -p "Digite a opção (1 ou 2): " option

case "$option" in
  1) 
    export NODE_ENV=development
    docker-compose -f docker-compose.dev.yml up -d --build
    ;;
  2)
    export NODE_ENV=production
    docker-compose -f docker-compose.yml up -d
    ;;
  *)
    echo "Opção inválida!"
    ;;
esac
