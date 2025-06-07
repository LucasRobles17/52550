import antlr4 from 'antlr4';
import MetadataLexer from './MetadataLexer.js';
import MetadataParser from './MetadataParser.js';
import fs from 'fs';

// Leer el archivo de entrada (cambia input1.txt por otro si querés)
const input = fs.readFileSync('input1.txt', 'utf8');

// Lexer: convierte el texto en tokens
const chars = new antlr4.InputStream(input);
const lexer = new MetadataLexer(chars);

// Parser: interpreta los tokens según la gramática
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new MetadataParser(tokens);

// Construye el árbol de análisis
parser.buildParseTrees = true;
const tree = parser.metadata();

console.log("✅ Análisis completado sin errores sintácticos.");