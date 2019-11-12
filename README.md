# Imgur-K

Cliente de Imgur desarrollado en React Native como modo de prueba técnica para Tech-K.

![pantalla_principal.png](https://i.imgur.com/bY2FMC1.png)

## Características del proyecto

* Proyecto construido con la última versión de React Native.
* Se utilizó la API de [Imgur](https://apidocs.imgur.com).
* Para las dependencias se utilizó [Yarn](https://github.com/yarnpkg/yarn).
* Testeado en Android (Samsung Galaxy S10e) e iOS (iPhone 6S).

## Setup

1. Clonar el repositorio.
2. Abrir el proyecto en su editor preferido (ej. VS Code).
3. Instalar las dependencias corriendo una instancia de la terminal en la carpeta raíz del proyecto y ejecutando el siguiente comando:

`$ npm install`

4. (Android) Definir la ruta del SDK de Android creando un nuevo archivo en la ruta './android/' llamado 'local.properties' con el siguiente contenido:

```java
sdk.dir = /Users/Macbook/Library/Android/sdk //ruta del SDK
```

## Supuestos

* Se tiene instalada la última version de NodeJS.
* La galeria de imagenes de un tag solo obtiene y muestra imagenes de tipo .png, .jpg y .jpeg.
* El buscador de post dentro de la galeria de imagenes de un tag debería buscar posts dentro de la lista ya cargada. No debería llamar a Imgur buscando imagenes que contengan el tag, sino que debería filtrar los datos ya obtenidos.

## Notas

* No agregué mucha funcionalidad extra. Sin embargo, me molesté en darle un buen diseño a la app :).
