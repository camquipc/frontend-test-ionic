# WorldsAcross Frontend Test

## Descripción
Esta es una prueba técnica para evaluar tus habilidades en Angular e Ionic. El objetivo es crear una aplicación frontend que consuma una API proporcionada.

## Objetivos
- Construir una aplicación en Angular e Ionic.
- Consumir datos desde la API mockeada proporcionada.
- Implementar filtros dinámicos y diseño responsivo.

## Clonar repositorio

```bash
   git clone https://github.com/camquipc/frontend-test-ionic.git
```

## Instalar dependencias 

```bash
cd worlds-across-frontend
npm install 
```
## Variables de entorno

```bash

// src/environments/environments.ts

const environment = {
  production: false,
  apiUrl: 'https://api.mockapi.com/api/',
  apiKey:'fa8bd36ecb1d4e43bc0952504a138576'
};

```

## Iniciar el proyecto
```bash
ionic serve 
```