import antlr4 from 'antlr4';

export default class CustomMetadataVisitor extends antlr4.tree.ParseTreeVisitor {

  constructor() {
    super();
    this.result = {};
  }

  // Visita el nodo raíz (ajusta 'metadata' si tu regla se llama diferente)
  visitMetadata(ctx) {
    // Aquí deberías implementar la lógica para recorrer el árbol y
    // armar el objeto resultante. Por ahora, solo recorremos hijos:
    return this.visitChildren(ctx);
  }

  // Implementa más métodos visitX según reglas de la gramática si quieres

  getResult() {
    return this.result;
  }
}