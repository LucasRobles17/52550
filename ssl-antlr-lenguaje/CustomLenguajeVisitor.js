import LenguajeVisitor from "./generated/LenguajeVisitor.js";

export class CustomLenguajeVisitor extends LenguajeVisitor {

    constructor() {
        super();
        this.variables = {};
        this.codigoJS = "";
    }

    visitPrograma(ctx) {
        ctx.instruccion().forEach(instr => this.visit(instr));

        console.log("CÓDIGO GENERADO EN JAVASCRIPT:");
        console.log(this.codigoJS);

        console.log("EJECUCIÓN DEL CÓDIGO:");

        eval(this.codigoJS);
    }

    visitAsignacion(ctx) {

        const id = ctx.ID().getText();
        const expr = this.visit(ctx.expresion());

        this.variables[id] = expr;

        this.codigoJS += `let ${id} = ${expr};\n`;
    }

    visitImprimir(ctx) {

        const expr = this.visit(ctx.expresion());

        this.codigoJS += `console.log(${expr});\n`;
    }

    visitExpresion(ctx) {

        if (ctx.getChildCount() === 1) {
            return this.visit(ctx.termino(0));
        }

        let izquierda = this.visit(ctx.expresion(0));
        const operador = ctx.getChild(1).getText();
        const derecha = this.visit(ctx.termino());

        return `(${izquierda} ${operador} ${derecha})`;
    }

    visitTermino(ctx) {

        if (ctx.getChildCount() === 1) {
            return this.visit(ctx.factor());
        }

        let izquierda = this.visit(ctx.termino(0));
        const operador = ctx.getChild(1).getText();
        const derecha = this.visit(ctx.factor());

        return `(${izquierda} ${operador} ${derecha})`;
    }

    visitFactor(ctx) {

        if (ctx.NUMERO()) {
            return ctx.NUMERO().getText();
        }

        if (ctx.ID()) {
            return ctx.ID().getText();
        }

        return this.visit(ctx.expresion());
    }

}
