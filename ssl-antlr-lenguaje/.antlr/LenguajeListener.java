// Generated from d:/DESCARGAS/PruebaAnalizador/52550/ssl-antlr-lenguaje/Lenguaje.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link LenguajeParser}.
 */
public interface LenguajeListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(LenguajeParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(LenguajeParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(LenguajeParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(LenguajeParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#asignacion}.
	 * @param ctx the parse tree
	 */
	void enterAsignacion(LenguajeParser.AsignacionContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#asignacion}.
	 * @param ctx the parse tree
	 */
	void exitAsignacion(LenguajeParser.AsignacionContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#imprimir}.
	 * @param ctx the parse tree
	 */
	void enterImprimir(LenguajeParser.ImprimirContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#imprimir}.
	 * @param ctx the parse tree
	 */
	void exitImprimir(LenguajeParser.ImprimirContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterExpresion(LenguajeParser.ExpresionContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitExpresion(LenguajeParser.ExpresionContext ctx);
	/**
	 * Enter a parse tree produced by {@link LenguajeParser#termino}.
	 * @param ctx the parse tree
	 */
	void enterTermino(LenguajeParser.TerminoContext ctx);
	/**
	 * Exit a parse tree produced by {@link LenguajeParser#termino}.
	 * @param ctx the parse tree
	 */
	void exitTermino(LenguajeParser.TerminoContext ctx);
}