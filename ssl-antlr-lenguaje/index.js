import LenguajeLexer from "./generated/LenguajeLexer.js";
import LenguajeParser from "./generated/LenguajeParser.js";
import { CustomLenguajeVisitor } from "./CustomLenguajeVisitor.js";

import antlr4 from 'antlr4';
import fs from "fs";

function main() {

    const input = fs.readFileSync("input.txt", "utf8");

    const inputStream = antlr4.CharStreams.fromString(input);

    const lexer = new LenguajeLexer(inputStream);

    const tokenStream = new antlr4.CommonTokenStream(lexer);

    const parser = new LenguajeParser(tokenStream);

    tokenStream.fill();

    console.log("TABLA:");

    tokenStream.tokens.forEach(token => {

        if (token.type !== -1) {

            const tokenName = parser.symbolicNames[token.type];

            console.log(
                "Lexema:",
                token.text,
                "| Token:",
                tokenName
            );

        }

    });

    console.log("");

    let hayErrores = false;

    parser.removeErrorListeners();

    parser.addErrorListener({
        syntaxError(recognizer, offendingSymbol, line, column, msg) {

            hayErrores = true;

            console.error(
                `Error de sintaxis en línea ${line}, columna ${column}: ${msg}`
            );
        }
    });

    const tree = parser.programa();

    if (hayErrores || parser.syntaxErrorsCount > 0) {

        console.log("\nENTRADA: INCORRECTA");

        return;
    }

    console.log("ENTRADA: CORRECTA");

    console.log("\nÁRBOL SINTÁCTICO:");

    console.log(
        tree.toStringTree(parser.ruleNames)
    );

    console.log("");

    const visitor = new CustomLenguajeVisitor();

    visitor.visit(tree);
}

main();