# Analizador de texto

## Índice

* [1. Text Analizer](#2-preámbulo)
* [2. Resumen de la aplicación](#3-resumen-de-la-aplicacion)
* [3. Funcionalidades](#4-funcionalidades)
* [4. Boilerplate](#5-boilerplate)
***

## 1. Text Analizer

![Una plantilla modelo]<img src="https://github.com/ceronoventa/DEV012-text-analyzer/blob/main/text%20analizer%20plantilla.png?raw=true" alt="mano alzada">

Un analizador de texto es una aplicación para extraer información útil de un
texto utilizando diversas técnicas, como el procesamiento del lenguaje
natural (NLP), el aprendizaje automático (ML) y el análisis estadístico.
Estas aplicaciones pueden proporcionar una variedad de métricas que brindan
información básica sobre la longitud y la estructura del texto como por
ejemplo, el conteo de palabras, el conteo de caracteres, el conteo de
oraciones y el conteo de párrafos. Otras métricas incluyen el análisis
de sentimientos, que utiliza técnicas de NLP para determinar el tono
general positivo, negativo o neutral del texto, y el análisis de
legibilidad, que utiliza algoritmos para evaluar la complejidad y la
legibilidad del texto.

En general, las aplicaciones de análisis de texto brindan información
valiosa y métricas sobre los textos que pueden ayudar a las usuarias a
tomar decisiones informadas y sacar conclusiones significativas.
Mediante el uso de estas herramientas de análisis, las usuarias pueden
obtener una comprensión más profunda de los textos.

## 2. Resumen de la aplicación

Puedes analizar un texto en el navegador mostrando una serie de indicadores y
métricas específicas sobre caracteres, letras, números, etc. 

## 3. Funcionalidades

El listado de funcionalidades es el siguiente:

1. La aplicación permite ingresar un texto escribiéndolo
en un cuadro de texto.

2. La aplicación puede calcular  métricas y actualizar el
resultado en tiempo real a medida que vas escribiendo tu texto:

    - **Recuento de palabras**
    - **Recuento de caracteres**: contar el número de
    caracteres en el texto de entrada, incluidos espacios y signos de
    puntuación.
    - **Recuento de caracteres excluyendo espacios y signos de puntuación**:
    contar el número de caracteres en el texto de
   entrada, excluyendo espacios y signos de puntuación.
    - **Recuento de números**: contar cúantos números hay en
    el texto de entrada.
    - **Suma total de números**: sumar todos los números que
    hay en el texto de entrada.
    - **Longitud media de las palabras**:calcular la
    longitud media de las palabras en el texto de entrada.

3. Puedes limpiar el contenido de la caja de texto haciendo
clic en un botón.

![Text analyzer demo]<img src="https://github.com/ceronoventa/DEV012-text-analyzer/blob/main/analizador%20burbuja.png?raw=true" alt="Burbuja"> ( "Text analyzer demo")

## 4. Boilerplate

La lógica del proyecto debe estar implementada completamente en JavaScript. 
 Un _boilerplate_ es la estructura básica de un proyecto que sirve como un punto de partida con
archivos y configuración inicial de dependencias y tests.

El boilerplate contiene esta estructura:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── analyzer.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── analyzer.spec.js

