#!/bin/sh
# Aguarda o MySQL estar disponível antes de iniciar o app

echo "Aguardando MySQL em $DB_HOST:$DB_PORT..."

while ! nc -z $DB_HOST $DB_PORT; do
  sleep 1
done

echo "MySQL está pronto. Iniciando aplicação..."
npm start
