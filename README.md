# Tooly Herramientas

Tooly Herramientas es un sitio web comercial desarrollado para mejorar las ventas del cliente, y facilitar a los usuarios la tarea de comprar las herramientas que necesita para llevar adelante su proyecto de contrucción, mejora o refacción.

Este proyecto está desarrollado en ReactJS, y se conecta a una base de datos Cloud Firestore (Firebase), donde se almacenan los productos con sus respectivas categorías y el detalle de cada venta realizada a través de esta plataforma.

# Instalación local

## Pre-requisitos

Antes de proceder con la instalación es importante contar con algunos requisitos:

1. Debes tener instalado NodeJS (versión 13 o superior).
2. El gestor de paquetes NPM (Versión 7 o superior).

Para instalar ambos requisitos, debes ingresar a la [página oficial de NodeJS](https://nodejs.org/es/download/), y descargar la versión que corresponda a tu sistema operativo, para luego instalarla.

## Instrucciones de instalación

Para poner en marcha esta aplicación de forma local, se debe realizar los siguientes pasos:

1. Descargar el proyecto de Github:
    
    ```git clone https://github.com/ntfrnk/tooly.git```	

2. Instalar las dependencias de NPM:
    
    ```npm install```

3. Iniciar el servidor:
    
    ```npm start```


# Puesta en producción (deployment)

Para llevar este proyecto a producción, es necesario realizar los siguientes pasos:

1. Ejecutar el siguiente comando:
    
    ```npm build```

2. Copiar el contenido de la carpeta "build" al directorio público del servidor remoto (suelen usarse nombres como "htdocs", "www", o "public_html").


## Construido con 🛠️

* [ReactJS](https://reactjs.org/)
* [SASS](https://sass-lang.com)
* [Firebase / Firestore](https://firebase.google.com/)
* [NodeJS y NPM](https://nodejs.org/es/download/)


# El autor

* **Franco Ocaranza** - [ntfrnk](https://github.com/ntfrnk)


# Agradecimientos

A [CoderHouse](https://coderhouse.com/), sus instructores y tutores, por su apoyo y acompañamiento en la creación de este proyecto.


# Licencia

Este es un proyecto Open Source, y se encuentra bajo la Licencia [MIT](https://opensource.org/licenses/MIT).