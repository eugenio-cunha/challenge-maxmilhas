#!/bin/bash

# Termina o script caso qualquer um dos comandos executados termine com um código != 0
set -e

# Destino dos arquivos SQL
destPath=/docker-entrypoint-initdb.d

# Cria o diretório de destino caso não exista
mkdir -p $destPath

# copia o arquivo create
echo "Copy create.sql;"
cp "create.sql" $destPath
