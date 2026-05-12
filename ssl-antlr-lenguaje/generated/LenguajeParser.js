// Generated from Lenguaje.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LenguajeListener from './LenguajeListener.js';
import LenguajeVisitor from './LenguajeVisitor.js';

const serializedATN = [4,1,12,68,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,5,0,16,8,0,10,0,12,0,19,9,0,1,0,1,0,1,1,1,1,3,1,25,8,
1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,5,
4,44,8,4,10,4,12,4,47,9,4,1,5,1,5,1,5,1,5,1,5,1,5,5,5,55,8,5,10,5,12,5,58,
9,5,1,6,1,6,1,6,1,6,1,6,1,6,3,6,66,8,6,1,6,0,2,8,10,7,0,2,4,6,8,10,12,0,
2,1,0,5,6,1,0,7,8,66,0,17,1,0,0,0,2,24,1,0,0,0,4,26,1,0,0,0,6,31,1,0,0,0,
8,37,1,0,0,0,10,48,1,0,0,0,12,65,1,0,0,0,14,16,3,2,1,0,15,14,1,0,0,0,16,
19,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,20,1,0,0,0,19,17,1,0,0,0,20,21,
5,0,0,1,21,1,1,0,0,0,22,25,3,4,2,0,23,25,3,6,3,0,24,22,1,0,0,0,24,23,1,0,
0,0,25,3,1,0,0,0,26,27,5,10,0,0,27,28,5,1,0,0,28,29,3,8,4,0,29,30,5,2,0,
0,30,5,1,0,0,0,31,32,5,9,0,0,32,33,5,3,0,0,33,34,3,8,4,0,34,35,5,4,0,0,35,
36,5,2,0,0,36,7,1,0,0,0,37,38,6,4,-1,0,38,39,3,10,5,0,39,45,1,0,0,0,40,41,
10,2,0,0,41,42,7,0,0,0,42,44,3,10,5,0,43,40,1,0,0,0,44,47,1,0,0,0,45,43,
1,0,0,0,45,46,1,0,0,0,46,9,1,0,0,0,47,45,1,0,0,0,48,49,6,5,-1,0,49,50,3,
12,6,0,50,56,1,0,0,0,51,52,10,2,0,0,52,53,7,1,0,0,53,55,3,12,6,0,54,51,1,
0,0,0,55,58,1,0,0,0,56,54,1,0,0,0,56,57,1,0,0,0,57,11,1,0,0,0,58,56,1,0,
0,0,59,66,5,11,0,0,60,66,5,10,0,0,61,62,5,3,0,0,62,63,3,8,4,0,63,64,5,4,
0,0,64,66,1,0,0,0,65,59,1,0,0,0,65,60,1,0,0,0,65,61,1,0,0,0,66,13,1,0,0,
0,5,17,24,45,56,65];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LenguajeParser extends antlr4.Parser {

    static grammarFileName = "Lenguaje.g4";
    static literalNames = [ null, "'='", "';'", "'('", "')'", "'+'", "'-'", 
                            "'*'", "'/'", "'print'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "PRINT", "ID", "NUMERO", "WS" ];
    static ruleNames = [ "programa", "instruccion", "asignacion", "imprimir", 
                         "expresion", "termino", "factor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LenguajeParser.ruleNames;
        this.literalNames = LenguajeParser.literalNames;
        this.symbolicNames = LenguajeParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 4:
    	    		return this.expresion_sempred(localctx, predIndex);
    	case 5:
    	    		return this.termino_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expresion_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    termino_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LenguajeParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9 || _la===10) {
	            this.state = 14;
	            this.instruccion();
	            this.state = 19;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 20;
	        this.match(LenguajeParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LenguajeParser.RULE_instruccion);
	    try {
	        this.state = 24;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 22;
	            this.asignacion();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 23;
	            this.imprimir();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LenguajeParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(LenguajeParser.ID);
	        this.state = 27;
	        this.match(LenguajeParser.T__0);
	        this.state = 28;
	        this.expresion(0);
	        this.state = 29;
	        this.match(LenguajeParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imprimir() {
	    let localctx = new ImprimirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LenguajeParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(LenguajeParser.PRINT);
	        this.state = 32;
	        this.match(LenguajeParser.T__2);
	        this.state = 33;
	        this.expresion(0);
	        this.state = 34;
	        this.match(LenguajeParser.T__3);
	        this.state = 35;
	        this.match(LenguajeParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expresion(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpresionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, LenguajeParser.RULE_expresion, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.termino(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 45;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExpresionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, LenguajeParser.RULE_expresion);
	                this.state = 40;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 41;
	                _la = this._input.LA(1);
	                if(!(_la===5 || _la===6)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 42;
	                this.termino(0); 
	            }
	            this.state = 47;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	termino(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new TerminoContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, LenguajeParser.RULE_termino, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.factor();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 56;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new TerminoContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, LenguajeParser.RULE_termino);
	                this.state = 51;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 52;
	                _la = this._input.LA(1);
	                if(!(_la===7 || _la===8)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 53;
	                this.factor(); 
	            }
	            this.state = 58;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LenguajeParser.RULE_factor);
	    try {
	        this.state = 65;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 59;
	            this.match(LenguajeParser.NUMERO);
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 60;
	            this.match(LenguajeParser.ID);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 61;
	            this.match(LenguajeParser.T__2);
	            this.state = 62;
	            this.expresion(0);
	            this.state = 63;
	            this.match(LenguajeParser.T__3);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LenguajeParser.EOF = antlr4.Token.EOF;
LenguajeParser.T__0 = 1;
LenguajeParser.T__1 = 2;
LenguajeParser.T__2 = 3;
LenguajeParser.T__3 = 4;
LenguajeParser.T__4 = 5;
LenguajeParser.T__5 = 6;
LenguajeParser.T__6 = 7;
LenguajeParser.T__7 = 8;
LenguajeParser.PRINT = 9;
LenguajeParser.ID = 10;
LenguajeParser.NUMERO = 11;
LenguajeParser.WS = 12;

LenguajeParser.RULE_programa = 0;
LenguajeParser.RULE_instruccion = 1;
LenguajeParser.RULE_asignacion = 2;
LenguajeParser.RULE_imprimir = 3;
LenguajeParser.RULE_expresion = 4;
LenguajeParser.RULE_termino = 5;
LenguajeParser.RULE_factor = 6;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(LenguajeParser.EOF, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_instruccion;
    }

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	imprimir() {
	    return this.getTypedRuleContext(ImprimirContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_asignacion;
    }

	ID() {
	    return this.getToken(LenguajeParser.ID, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImprimirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_imprimir;
    }

	PRINT() {
	    return this.getToken(LenguajeParser.PRINT, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterImprimir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitImprimir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitImprimir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_expresion;
    }

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_termino;
    }

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	termino() {
	    return this.getTypedRuleContext(TerminoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterTermino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitTermino(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitTermino(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LenguajeParser.RULE_factor;
    }

	NUMERO() {
	    return this.getToken(LenguajeParser.NUMERO, 0);
	};

	ID() {
	    return this.getToken(LenguajeParser.ID, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LenguajeListener ) {
	        listener.exitFactor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LenguajeVisitor ) {
	        return visitor.visitFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LenguajeParser.ProgramaContext = ProgramaContext; 
LenguajeParser.InstruccionContext = InstruccionContext; 
LenguajeParser.AsignacionContext = AsignacionContext; 
LenguajeParser.ImprimirContext = ImprimirContext; 
LenguajeParser.ExpresionContext = ExpresionContext; 
LenguajeParser.TerminoContext = TerminoContext; 
LenguajeParser.FactorContext = FactorContext; 
