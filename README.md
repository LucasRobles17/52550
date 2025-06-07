# 52550
# ANALIZADOR DE METADATOS CON ANTLR4 Y JAVASCRIPT

Este proyecto permite analizar archivos con campos de metadatos (como `nombre`, `tipo`, `fecha`, etc.), detectando errores léxicos y sintácticos, y generando un árbol de análisis de manera visual. Está desarrollado con **ANTLR4** y **JavaScript**.

## ⚙️ FUNCIONALIDADES

1. **Detectar errores léxicos y sintácticos** en archivos de metadatos.
2. **Generar el árbol de derivación** para cada entrada válida.
3. **Mostrar los tokens generados** y sus tipos.
4. Validar si una entrada es sintácticamente correcta.

## 📋 FORMATO DE ENTRADA

El archivo de entrada debe contener metadatos en el siguiente formato:

Cada campo termina con `;`, y se permiten los siguientes nombres de campo:

- `nombre`
- `tipo`
- `tamaño`
- `creado`
- `modificado`
- `autor`
- `descripcion`
- `etiquetas`

## ✅ REQUISITOS

- Node.js (v16 o superior) → [https://nodejs.org/](https://nodejs.org/)
- Java JDK (v11 o superior) → [https://www.oracle.com/java/technologies/downloads/](https://www.oracle.com/java/technologies/downloads/)
- VS Code → [https://code.visualstudio.com/](https://code.visualstudio.com/)
- Extensión **ANTLR4** para VS Code

## 🧩 CONFIGURACIÓN INICIAL

1. Instala la extensión **ANTLR4** desde el Marketplace de VS Code.
2. Ve a: `Archivo > Preferencias > Configuración`, busca **ANTLR**, baja hasta **Antlr4: Generation**.
3. Presiona el ícono de lápiz → `Editar en settings.json` y reemplaza todo el contenido con:
{
  "antlr4.generation": {
    "alternativeJar": "antlr-4.13.2-complete.jar",
    "mode": "external",
    "outputDir": "./generated",
    "language": "JavaScript",
    "listeners": true,
    "visitors": true
  }
}
4. Guarda el archivo (Ctrl+S).

🚀 CÓMO EJECUTAR EL PROYECTO

1. Clonar este repositorio:
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
cd TU_REPOSITORIO
2. Instalar dependencias:
npm install
3. Generar los analizadores con ANTLR:
antlr4 -Dlanguage=JavaScript Metadata.g4
(Asegúrate de tener configurado el comando antlr4. Si no, consulta el final de este README para configurarlo en PowerShell).
4. Probar el analizador:
node index.js

📁 ESTRUCTURA DEL PROYECTO

![Captura de pantalla (4610)](https://github.com/user-attachments/assets/f82b467e-d2a8-4c41-b5a0-620963cc4b6b)
