grammar Metadata;

// Reglas del parser
metadata : campo* EOF ;

campo : nombreCampo ':' valorCampo finCampo ;

nombreCampo 
    : 'nombre'
    | 'tipo'
    | 'tamaño'
    | 'creado'
    | 'modificado'
    | 'autor'
    | 'descripcion'
    | 'etiquetas'
    ;

valorCampo 
    : texto
    | numero
    | fecha
    | listaTextos
    ;

texto       : TEXTO ;
numero      : NUMERO ;
fecha       : FECHA ;
listaTextos : '[' texto (',' texto)* ']' ;

finCampo : ';' ;

// Reglas del lexer
FECHA  : DIGITO DIGITO DIGITO DIGITO '-' DIGITO DIGITO '-' DIGITO DIGITO 
         ( ' ' DIGITO DIGITO ':' DIGITO DIGITO (':' DIGITO DIGITO)? )? ;

NUMERO : DIGITO+ ;

TEXTO  : (LETRA | DIGITO | '_' | '-' | '.' | ' ')+ ;

LETRA  : [a-zA-Z] ;
DIGITO : [0-9] ;

// Ignorar espacios y saltos de línea
WS : [ \t\r\n]+ -> skip ;

// Comentarios opcionales
COMMENT : '//' ~[\r\n]* -> skip ;