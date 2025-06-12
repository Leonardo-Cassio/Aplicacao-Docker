#!/bin/sh
# Aguarda o MySQL estar disponível antes de iniciar o app

echo "Aguardando MySQL em $1..."

while ! nc -z $1 $2; do
  sleep 1
done

echo "MySQL está pronto. Iniciando aplicação..."
exec "$@"
