grammar Lenguaje;

// REGLAS SINTÁCTICAS

programa
    : instruccion* EOF
    ;

instruccion
    : asignacion
    | imprimir
    ;

asignacion
    : ID '=' expresion ';'
    ;

imprimir
    : PRINT '(' expresion ')' ';'
    ;


/*
CAMBIO REALIZADO:

La regla original era:

expresion
    : termino (( '+' | '-' | '*' | '/' ) termino)*
    ;

Esto hacía que TODOS los operadores (+ - * /) tuvieran la misma prioridad y fueran evaluados por ANTLR de izquierda a derecha.

Por eso se separó la gramática en tres niveles:

expresion → maneja + y -
termino   → maneja * y /
factor    → números, identificadores o paréntesis

De esta forma se respeta la precedencia correcta de operadores.
*/


expresion
    : expresion ('+' | '-') termino
    | termino
    ;

termino
    : termino ('*' | '/') factor
    | factor
    ;

factor
    : NUMERO
    | ID
    | '(' expresion ')'
    ;


// REGLAS LÉXICAS

PRINT
    : 'print'
    ;

ID
    : [a-zA-Z]+
    ;

NUMERO
    : [0-9]+
    ;

WS
    : [ \t\r\n]+ -> skip
    ;