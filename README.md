# Lucas Robles
# 52550
SSL - ANALIZADOR
=======
Este proyecto implementa un analizador léxico y sintáctico utilizando ANTLR4 y JavaScript.

TAREAS QUE REALIZA EL ANALIZADOR:
1. Análisis léxico y sintáctico del código fuente.
2. Generación de una tabla de lexemas y tokens.
3. Construcción del árbol de análisis sintáctico.
4. Traducción del código fuente a JavaScript.
5. Ejecución del código generado como lo haría un intérprete básico.

REQUISITOS:
• Antes de ejecutar el proyecto es necesario tener instalado:
JRE: https://www.java.com/en/download/
Node.js (versión 16 o superior): https://nodejs.org/es
Visual Studio Code: https://code.visualstudio.com/
Git: https://git-scm.com/install/
• Para verificar que todo está instalado, ejecuta en una terminal (Cmd, PowerShell, o terminal en Linux) los siguientes comandos:
java -version
node -v
npm -v
git -v
Si las herramientas están instaladas correctamente, los comandos deberían devolver un número de versión y no un error.
• Por último, instala la extensión ANTLR en VSCode.
Entra a VSCode, aprieta 'CTRL + SHIFT + X' y busca "ANTLR4 grammar syntax support" ➞ Instalar. Una vez se instale ANTLR, reinicia VSCode.

PROYECTO ANALIZADOR

INSTALACIÓN:
1. Crea una carpeta donde desees guardar el proyecto.
2. Dentro de esa carpeta, haz clic derecho y selecciona "Open Git Bash here".
3. Inicializa git con el comando "git init".
4. Clona el repositorio con el comando "git clone https://github.com/LucasRobles17/52550.git".

EJECUCIÓN:
1. Entra en Visual Studio Code y abre la carpeta "ssl-antlr-lenguaje" (ruta del proyecto) que se encuentra dentro de la carpeta que creaste.
2. En el archivo "input.txt", escribe o copia un programa en el lenguaje definido.
3. Guarda el archivo con 'CTLR + S'.
4. Ejecuta el programa desde la terminal con el comando "node index.js" y verifica la salida de este.
5. Para ver el árbol de análisis sintáctico, presiona 'F5' y verifica la salida de este.

Se incluyen 4 archivos de ejemplo de entradas para probar el analizador:
- Entradas correctas:
input_correcto_1.txt
input_correcto_2.txt
- Entradas incorrectas:
input_incorrecto_1.txt
input_incorrecto_2.txt

NOTAS IMPORTANTES:
El lenguaje AHORA soporta operaciones aritméticas respetando la precedencia de operadores (* y / antes que + y -), aclaración en el archivo "Lenguaje.g4" de los cambios realizados a la gramática propuesta.
El programa SOLO analiza el archivo "input.txt".
