#ThemeBuilder - [Polymer](https://www.polymer-project.org) and [AngularJS](http://angularjs.org/)

***

## Instalation

La instalación es sencilla, sólo necesitaremos bower y la librería de AngularJS

1- Primero en el directorio de trabajo creamos una carpeta raíz de la aplicación la cual llamaremos theme-builder

2- Luego instalaremos bower con el sisguiente comando NodeJS:

* **NodeJS**: `npm install -g bower`

3- Luego dentro de la carpeta iniciamos la construcción del proyecto con el siguiente comando Bower.

* **Bower**: `bower init`

4- Con el comando anterior se nos crea el fichero bower.json el cual debería de tener un aspecto como el siguiente:

```json
{
  "name": "theme-builder",
  "version": "0.0.1",
  "authors": [
    "autor <autor@gmail.com>"
  ],
  "description": "Theme Builder, Polymer and Angularjs",
  "main": "index.html",
  "keywords": [
    "Polymer",
    "Theme Builder"
  ],
  "license": "MIT",
  "private": true
}
```

5- Ahora instalaremos Polymer con el siguiente comando de bower.

* **Bower**: `bower install --save Polymer/polymer`

6- El siguiente paso es instalar los componentes básicos que usaremos, es decir: iron-flex y paper-material:

* **Bower**: `bower install --save PolymerElements/iron-flex-layout`

* **Bower**: `bower install --save PolymerElements/paper-material`

* **Bower**: `bower install --save PolymerElements/paper-styles`
