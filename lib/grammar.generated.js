import _applyDecs from "@babel/runtime/helpers/applyDecs2305";
import { interpolateString as _interpolateString } from "@bablr/agast-helpers/template";
import { interpolateArray as _interpolateArray } from "@bablr/agast-helpers/template";
import * as _t from "@bablr/agast-helpers/shorthand";
var _dec, _dec2, _dec3, _dec4, _initProto;
import { Node, CoveredBy, InjectFrom } from '@bablr/helpers/decorators';
import * as Shared from '@bablr/helpers/productions';
import * as Space from '@bablr/language-blank-space';
export const name = 'Comment';
export const dependencies = {
  Space
};
export const grammar = (_dec = CoveredBy('Comment'), _dec2 = CoveredBy('Comment'), _dec3 = InjectFrom(Shared), _dec4 = InjectFrom(Shared), class CCommentsGrammar {
  static {
    [_initProto] = _applyDecs(this, [[[_dec, Node], 2, "BlockComment"], [[_dec2, Node], 2, "LineComment"], [Node, 2, "Content"], [_dec3, 2, "Match"], [[Node, _dec4], 2, "Punctuator"]], []).e;
  }
  constructor(...args) {
    _initProto(this);
  }
  *Trivia() {
    while (yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit("eatMatch")], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node("Instruction", "Punctuator", "("),
        values: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`flags`, _t.ref`type`, _t.ref`close`], {
          open: _t.s_node("Spamex", "Punctuator", "<"),
          flags: _t.node("Spamex", "NodeFlags", [_t.ref`commentFlag`], {
            commentFlag: _t.s_node("Spamex", "Punctuator", "#")
          }, {}),
          type: _t.node("Spamex", "GlobalIdentifier", [_t.ref`language`, _t.ref`namespaceOperator`, _t.ref`type`], {
            language: _t.node("Spamex", "Identifier", [_t.lit("Space")], {}, {}),
            namespaceOperator: _t.s_node("Spamex", "Punctuator", ":"),
            type: _t.node("Spamex", "Identifier", [_t.lit("Space")], {}, {})
          }, {}),
          close: _t.s_node("Spamex", "Punctuator", ">")
        }, {})],
        close: _t.s_node("Instruction", "Punctuator", ")")
      }, {})
    }, {}) || (yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit("eatMatch")], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node("Instruction", "Punctuator", "("),
        values: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
          open: _t.s_node("Spamex", "Punctuator", "<"),
          type: _t.node("Spamex", "Identifier", [_t.lit("Comment")], {}, {}),
          close: _t.s_node("Spamex", "Punctuator", ">")
        }, {})],
        close: _t.s_node("Instruction", "Punctuator", ")")
      }, {})
    }, {})));
  }
  *Comment() {
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit("eat")], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.t_node('Space', 'Space', [{
        type: "Literal",
        value: " "
      }], {}, [])), _t.ref`values[]`, _t.embedded(_t.t_node('Space', 'Space', [{
        type: "Literal",
        value: " "
      }], {}, [])), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node("Instruction", "Punctuator", "("),
        values: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
          open: _t.s_node("Spamex", "Punctuator", "<"),
          type: _t.node("Spamex", "Identifier", [_t.lit("Match")], {}, {}),
          close: _t.s_node("Spamex", "Punctuator", ">")
        }, {}), _t.node("Instruction", "Null", [_t.ref`value`], {
          value: _t.s_node("Instruction", "Keyword", "null")
        }, {}), _t.node("Instruction", "Array", [_t.ref`open`, _t.embedded(_t.t_node('Space', 'Space', [{
          type: "Literal",
          value: "\n      "
        }], {}, [])), _t.ref`elements[]`, _t.embedded(_t.t_node('Space', 'Space', [{
          type: "Literal",
          value: "\n      "
        }], {}, [])), _t.ref`elements[]`, _t.embedded(_t.t_node('Space', 'Space', [{
          type: "Literal",
          value: "\n    "
        }], {}, [])), _t.ref`close`], {
          open: _t.s_node("Instruction", "Punctuator", "["),
          elements: [_t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.t_node('Space', 'Space', [{
            type: "Literal",
            value: " "
          }], {}, [])), _t.ref`values[]`, _t.ref`close`], {
            open: _t.s_node("Instruction", "Punctuator", "("),
            values: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
              open: _t.s_node("Spamex", "Punctuator", "<"),
              type: _t.node("Spamex", "Identifier", [_t.lit("BlockComment")], {}, {}),
              close: _t.s_node("Spamex", "Punctuator", ">")
            }, {}), _t.node("String", "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
              open: _t.s_node("String", "Punctuator", "'"),
              content: _t.node("String", "Content", [_t.lit("/*")], {}, {}),
              close: _t.s_node("String", "Punctuator", "'")
            }, {})],
            close: _t.s_node("Instruction", "Punctuator", ")")
          }, {}), _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.t_node('Space', 'Space', [{
            type: "Literal",
            value: " "
          }], {}, [])), _t.ref`values[]`, _t.ref`close`], {
            open: _t.s_node("Instruction", "Punctuator", "("),
            values: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
              open: _t.s_node("Spamex", "Punctuator", "<"),
              type: _t.node("Spamex", "Identifier", [_t.lit("LineComment")], {}, {}),
              close: _t.s_node("Spamex", "Punctuator", ">")
            }, {}), _t.node("String", "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
              open: _t.s_node("String", "Punctuator", "'"),
              content: _t.node("String", "Content", [_t.lit("//")], {}, {}),
              close: _t.s_node("String", "Punctuator", "'")
            }, {})],
            close: _t.s_node("Instruction", "Punctuator", ")")
          }, {})],
          close: _t.s_node("Instruction", "Punctuator", "]")
        }, {})],
        close: _t.s_node("Instruction", "Punctuator", ")")
      }, {})
    }, {});
  }
  *BlockComment() {
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit("eat")], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.t_node('Space', 'Space', [{
        type: "Literal",
        value: " "
      }], {}, [])), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node("Instruction", "Punctuator", "("),
        values: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`flags`, _t.embedded(_t.t_node('Space', 'Space', [{
          type: "Literal",
          value: " "
        }], {}, [])), _t.ref`type`, _t.embedded(_t.t_node('Space', 'Space', [{
          type: "Literal",
          value: " "
        }], {}, [])), _t.ref`value`, _t.embedded(_t.t_node('Space', 'Space', [{
          type: "Literal",
          value: " "
        }], {}, [])), _t.ref`attributes[]`, _t.embedded(_t.t_node('Space', 'Space', [{
          type: "Literal",
          value: " "
        }], {}, [])), _t.ref`attributes[]`, _t.ref`close`], {
          open: _t.s_node("Spamex", "Punctuator", "<"),
          flags: _t.node("Spamex", "NodeFlags", [_t.ref`syntacticFlag`], {
            syntacticFlag: _t.s_node("Spamex", "Punctuator", "*")
          }, {}),
          type: _t.node("Spamex", "Identifier", [_t.lit("Punctuator")], {}, {}),
          value: _t.node("String", "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_node("String", "Punctuator", "'"),
            content: _t.node("String", "Content", [_t.lit("/*")], {}, {}),
            close: _t.s_node("String", "Punctuator", "'")
          }, {}),
          attributes: [_t.node("Spamex", "MappingAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
            key: _t.node("Spamex", "Literal", [_t.lit("balanced")], {}, {}),
            mapOperator: _t.s_node("Spamex", "Punctuator", "="),
            value: _t.node("String", "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
              open: _t.s_node("String", "Punctuator", "'"),
              content: _t.node("String", "Content", [_t.lit("*/")], {}, {}),
              close: _t.s_node("String", "Punctuator", "'")
            }, {})
          }, {}), _t.node("Spamex", "MappingAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
            key: _t.node("Spamex", "Literal", [_t.lit("lexicalSpan")], {}, {}),
            mapOperator: _t.s_node("Spamex", "Punctuator", "="),
            value: _t.node("String", "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
              open: _t.s_node("String", "Punctuator", "'"),
              content: _t.node("String", "Content", [_t.lit("Comment:Block")], {}, {}),
              close: _t.s_node("String", "Punctuator", "'")
            }, {})
          }, {})],
          close: _t.s_node("Spamex", "Punctuator", ">")
        }, {}), _t.node("String", "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_node("String", "Punctuator", "'"),
          content: _t.node("String", "Content", [_t.lit("open")], {}, {}),
          close: _t.s_node("String", "Punctuator", "'")
        }, {})],
        close: _t.s_node("Instruction", "Punctuator", ")")
      }, {})
    }, {});
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit("eatMatch")], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.t_node('Space', 'Space', [{
        type: "Literal",
        value: " "
      }], {}, [])), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node("Instruction", "Punctuator", "("),
        values: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
          open: _t.s_node("Spamex", "Punctuator", "<"),
          type: _t.node("Spamex", "Identifier", [_t.lit("Content")], {}, {}),
          close: _t.s_node("Spamex", "Punctuator", ">")
        }, {}), _t.node("String", "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_node("String", "Punctuator", "'"),
          content: _t.node("String", "Content", [_t.lit("content")], {}, {}),
          close: _t.s_node("String", "Punctuator", "'")
        }, {})],
        close: _t.s_node("Instruction", "Punctuator", ")")
      }, {})
    }, {});
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit("eat")], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.t_node('Space', 'Space', [{
        type: "Literal",
        value: " "
      }], {}, [])), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node("Instruction", "Punctuator", "("),
        values: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`flags`, _t.embedded(_t.t_node('Space', 'Space', [{
          type: "Literal",
          value: " "
        }], {}, [])), _t.ref`type`, _t.embedded(_t.t_node('Space', 'Space', [{
          type: "Literal",
          value: " "
        }], {}, [])), _t.ref`value`, _t.embedded(_t.t_node('Space', 'Space', [{
          type: "Literal",
          value: " "
        }], {}, [])), _t.ref`attributes[]`, _t.ref`close`], {
          open: _t.s_node("Spamex", "Punctuator", "<"),
          flags: _t.node("Spamex", "NodeFlags", [_t.ref`syntacticFlag`], {
            syntacticFlag: _t.s_node("Spamex", "Punctuator", "*")
          }, {}),
          type: _t.node("Spamex", "Identifier", [_t.lit("Punctuator")], {}, {}),
          value: _t.node("String", "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_node("String", "Punctuator", "'"),
            content: _t.node("String", "Content", [_t.lit("*/")], {}, {}),
            close: _t.s_node("String", "Punctuator", "'")
          }, {}),
          attributes: [_t.node("Spamex", "BooleanAttribute", [_t.ref`key`], {
            key: _t.node("Spamex", "Literal", [_t.lit("balancer")], {}, {})
          }, {})],
          close: _t.s_node("Spamex", "Punctuator", ">")
        }, {}), _t.node("String", "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_node("String", "Punctuator", "'"),
          content: _t.node("String", "Content", [_t.lit("close")], {}, {}),
          close: _t.s_node("String", "Punctuator", "'")
        }, {})],
        close: _t.s_node("Instruction", "Punctuator", ")")
      }, {})
    }, {});
  }
  *LineComment() {
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit("eat")], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.t_node('Space', 'Space', [{
        type: "Literal",
        value: " "
      }], {}, [])), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node("Instruction", "Punctuator", "("),
        values: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`flags`, _t.embedded(_t.t_node('Space', 'Space', [{
          type: "Literal",
          value: " "
        }], {}, [])), _t.ref`type`, _t.embedded(_t.t_node('Space', 'Space', [{
          type: "Literal",
          value: " "
        }], {}, [])), _t.ref`value`, _t.ref`close`], {
          open: _t.s_node("Spamex", "Punctuator", "<"),
          flags: _t.node("Spamex", "NodeFlags", [_t.ref`syntacticFlag`], {
            syntacticFlag: _t.s_node("Spamex", "Punctuator", "*")
          }, {}),
          type: _t.node("Spamex", "Identifier", [_t.lit("Punctuator")], {}, {}),
          value: _t.node("String", "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_node("String", "Punctuator", "'"),
            content: _t.node("String", "Content", [_t.lit("//")], {}, {}),
            close: _t.s_node("String", "Punctuator", "'")
          }, {}),
          close: _t.s_node("Spamex", "Punctuator", ">")
        }, {}), _t.node("String", "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_node("String", "Punctuator", "'"),
          content: _t.node("String", "Content", [_t.lit("start")], {}, {}),
          close: _t.s_node("String", "Punctuator", "'")
        }, {})],
        close: _t.s_node("Instruction", "Punctuator", ")")
      }, {})
    }, {});
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit("eatMatch")], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.t_node('Space', 'Space', [{
        type: "Literal",
        value: " "
      }], {}, [])), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node("Instruction", "Punctuator", "("),
        values: [_t.node("Spamex", "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.embedded(_t.t_node('Space', 'Space', [{
          type: "Literal",
          value: " "
        }], {}, [])), _t.ref`attributes[]`, _t.ref`close`], {
          open: _t.s_node("Spamex", "Punctuator", "<"),
          type: _t.node("Spamex", "Identifier", [_t.lit("Content")], {}, {}),
          attributes: [_t.node("Spamex", "MappingAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
            key: _t.node("Spamex", "Literal", [_t.lit("span")], {}, {}),
            mapOperator: _t.s_node("Spamex", "Punctuator", "="),
            value: _t.node("String", "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
              open: _t.s_node("String", "Punctuator", "'"),
              content: _t.node("String", "Content", [_t.lit("Comment:Line")], {}, {}),
              close: _t.s_node("String", "Punctuator", "'")
            }, {})
          }, {})],
          close: _t.s_node("Spamex", "Punctuator", ">")
        }, {}), _t.node("String", "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_node("String", "Punctuator", "'"),
          content: _t.node("String", "Content", [_t.lit("content")], {}, {}),
          close: _t.s_node("String", "Punctuator", "'")
        }, {})],
        close: _t.s_node("Instruction", "Punctuator", ")")
      }, {})
    }, {});
  }
  *Content(props, {
    span
  }) {
    if (span === 'Comment:Block') {
      yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
        verb: _t.node("Instruction", "Identifier", [_t.lit("eatMatch")], {}, {}),
        arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
          open: _t.s_node("Instruction", "Punctuator", "("),
          values: [_t.node("Regex", "Pattern", [_t.ref`open`, _t.ref`alternatives[]`, _t.ref`close`], {
            open: _t.s_node("Regex", "Punctuator", "/"),
            alternatives: [_t.node("Regex", "Alternative", [_t.ref`elements[]`], {
              elements: [_t.node("Regex", "Quantifier", [_t.ref`element`, _t.ref`value`], {
                element: _t.node("Regex", "CapturingGroup", [_t.ref`open`, _t.ref`alternatives[]`, _t.ref`separators[]`, _t.ref`alternatives[]`, _t.ref`close`], {
                  open: _t.s_node("Regex", "Punctuator", "("),
                  alternatives: [_t.node("Regex", "Alternative", [_t.ref`elements[]`, _t.ref`elements[]`], {
                    elements: [_t.node("Regex", "Character", [_t.embedded(_t.s_e_node('Escape', 'SymbolicEscape', [{
                      type: "Literal",
                      value: "\\*"
                    }], {}, {
                      cooked: "*"
                    }))], {}, {}), _t.node("Regex", "CharacterClass", [_t.ref`open`, _t.ref`negate`, _t.ref`elements[]`, _t.ref`close`], {
                      open: _t.s_node("Regex", "Punctuator", "["),
                      negate: _t.s_node("Regex", "Keyword", "^"),
                      elements: [_t.node("Regex", "Character", [_t.lit("/")], {}, {})],
                      close: _t.s_node("Regex", "Punctuator", "]")
                    }, {})]
                  }, {}), _t.node("Regex", "Alternative", [_t.ref`elements[]`], {
                    elements: [_t.node("Regex", "CharacterSet", [_t.ref`value`], {
                      value: _t.s_node("Regex", "Keyword", ".")
                    }, {
                      kind: "any"
                    })]
                  }, {})],
                  separators: [_t.s_node("Regex", "Punctuator", "|")],
                  close: _t.s_node("Regex", "Punctuator", ")")
                }, {}),
                value: _t.s_node("Regex", "Keyword", "*")
              }, {
                min: 0,
                max: Infinity,
                greedy: true
              })]
            }, {})],
            close: _t.s_node("Regex", "Punctuator", "/")
          }, {})],
          close: _t.s_node("Instruction", "Punctuator", ")")
        }, {})
      }, {});
    } else if (span === 'Comment:Line') {
      yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
        verb: _t.node("Instruction", "Identifier", [_t.lit("eatMatch")], {}, {}),
        arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
          open: _t.s_node("Instruction", "Punctuator", "("),
          values: [_t.node("Regex", "Pattern", [_t.ref`open`, _t.ref`alternatives[]`, _t.ref`close`], {
            open: _t.s_node("Regex", "Punctuator", "/"),
            alternatives: [_t.node("Regex", "Alternative", [_t.ref`elements[]`], {
              elements: [_t.node("Regex", "Quantifier", [_t.ref`element`, _t.ref`value`], {
                element: _t.node("Regex", "CharacterClass", [_t.ref`open`, _t.ref`negate`, _t.ref`elements[]`, _t.ref`close`], {
                  open: _t.s_node("Regex", "Punctuator", "["),
                  negate: _t.s_node("Regex", "Keyword", "^"),
                  elements: [_t.node("Regex", "Character", [_t.embedded(_t.s_e_node('Escape', 'SymbolicEscape', [{
                    type: "Literal",
                    value: "\\n"
                  }], {}, {
                    cooked: "\n"
                  }))], {}, {})],
                  close: _t.s_node("Regex", "Punctuator", "]")
                }, {}),
                value: _t.s_node("Regex", "Keyword", "*")
              }, {
                min: 0,
                max: Infinity,
                greedy: true
              })]
            }, {})],
            close: _t.s_node("Regex", "Punctuator", "/")
          }, {})],
          close: _t.s_node("Instruction", "Punctuator", ")")
        }, {})
      }, {});
    } else {
      throw new Error();
    }
  }
  *Match() {}
  *Punctuator() {}
});
