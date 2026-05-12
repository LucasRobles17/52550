# 52550
SSL - ANALIZADOR
=======
Este proyecto implementa un analizador léxico y sintáctico utilizando ANTLR4 y JavaScript.

El programa analiza un lenguaje simple que permite:
- Asignaciones de variables.
- Expresiones aritméticas.
- Instrucciones de impresión (print).

El analizador realiza las siguientes tareas:
1. Análisis léxico y sintáctico del código fuente.
2. Generación de una tabla de lexemas y tokens.
3. Construcción del árbol de análisis sintáctico.
4. Traducción del código fuente a JavaScript.
5. Ejecución del código generado como lo haría un intérprete básico.

Instalación:
1. Clonar el repositorio: git clone https://github.com/LucasRobles17/52550.git
2. Instalar las dependencias necesarias: npm install antlr4
3. Asegurarse de tener instalado Node.js

Instrucciones de uso:
1. Colocar el código fuente a analizar en el archivo "input.txt".
2. Ejecutar el programa desde la terminal con "node index.js".
3. El programa realizará las tareas asignadas y los resultados se mostrarán en la consola.

Se incluyen 4 archivos de ejemplo de entradas para probar el analizador:
- Entradas correctas:
input_correcto_1.txt
input_correcto_2.txt
- Entradas incorrectas:
input_incorrecto_1.txt
input_incorrecto_2.txt
