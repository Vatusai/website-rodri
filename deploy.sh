#!/bin/bash

# Buscar el proceso que está usando el puerto 5173 y matarlo
echo "Buscando procesos en el puerto 5173..."
PID=$(lsof -t -i :5173)

if [ -z "$PID" ]; then
    echo "No se encontró ningún proceso en el puerto 5173"
else
    echo "Matando el proceso con PID $PID..."
    kill -9 $PID
fi

# Construir la aplicación de Vite
echo "Iniciando npm run build..."
npm run build
