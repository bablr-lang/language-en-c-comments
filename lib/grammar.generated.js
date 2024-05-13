import _applyDecs from "@babel/runtime/helpers/applyDecs2305";
import { interpolateString as _interpolateString } from "@bablr/agast-helpers/template";
import { interpolateArrayChildren as _interpolateArrayChildren } from "@bablr/agast-helpers/template";
import { interpolateArray as _interpolateArray } from "@bablr/agast-helpers/template";
import * as _l from "@bablr/agast-vm-helpers/languages";
import * as _t from "@bablr/agast-helpers/shorthand";
var _dec, _dec2, _dec3, _dec4, _initProto;
import { Node, CoveredBy, InjectFrom } from '@bablr/helpers/decorators';
import * as Shared from '@bablr/helpers/productions';
import * as Space from '@bablr/language-blank-space';
export const canonicalURL = 'https://github.com/bablr-lang/language-c-comments';
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
    while (yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eatMatch"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`triviaFlag`, _t.ref`tokenFlag`, _t.ref`language`, _t.ref`namespaceOperator`, _t.ref`type`, _t.ref`close`], {
          open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
          triviaFlag: _t.s_i_node(_l.Spamex, "Punctuator", "#"),
          tokenFlag: _t.s_i_node(_l.Spamex, "Punctuator", "*"),
          language: _t.s_node(_l.Spamex, "Identifier", "Space"),
          namespaceOperator: _t.s_i_node(_l.Spamex, "Punctuator", ":"),
          type: _t.s_node(_l.Spamex, "Identifier", "Space"),
          close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {}) || (yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eatMatch"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
          open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
          type: _t.s_node(_l.Spamex, "Identifier", "Comment"),
          close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {})));
  }
  *Comment() {
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
          open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
          type: _t.s_node(_l.Spamex, "Identifier", "Match"),
          close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.Instruction, "Null", [_t.ref`value`], {
          value: _t.s_i_node(_l.Instruction, "Keyword", "null")
        }, {}), _t.node(_l.Instruction, "Array", [_t.ref`open`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit("\n      ")], {}, {})), _t.ref`elements[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit("\n      ")], {}, {})), _t.ref`elements[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit("\n    ")], {}, {})), _t.ref`close`], {
          open: _t.s_i_node(_l.Instruction, "Punctuator", "["),
          elements: [_t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
            open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
            values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
              open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
              type: _t.s_node(_l.Spamex, "Identifier", "BlockComment"),
              close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
            }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
              open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
              content: _t.node(_l.CSTML, "Content", [_t.lit("/*")], {}, {}),
              close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
            }, {})],
            close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
          }, {}), _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
            open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
            values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
              open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
              type: _t.s_node(_l.Spamex, "Identifier", "LineComment"),
              close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
            }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
              open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
              content: _t.node(_l.CSTML, "Content", [_t.lit("//")], {}, {}),
              close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
            }, {})],
            close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
          }, {})],
          close: _t.s_i_node(_l.Instruction, "Punctuator", "]")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
  }
  *BlockComment() {
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`tokenFlag`, _t.ref`type`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`intrinsicValue`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`attributes[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`attributes[]`, _t.ref`close`], {
          open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
          tokenFlag: _t.s_i_node(_l.Spamex, "Punctuator", "*"),
          type: _t.s_node(_l.Spamex, "Identifier", "Punctuator"),
          intrinsicValue: _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
            content: _t.node(_l.CSTML, "Content", [_t.lit("/*")], {}, {}),
            close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
          }, {}),
          attributes: [_t.node(_l.Spamex, "MappingAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
            key: _t.node(_l.Spamex, "Literal", [_t.lit("balanced")], {}, {}),
            mapOperator: _t.s_i_node(_l.Spamex, "Punctuator", "="),
            value: _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
              open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
              content: _t.node(_l.CSTML, "Content", [_t.lit("*/")], {}, {}),
              close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
            }, {})
          }, {}), _t.node(_l.Spamex, "MappingAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
            key: _t.node(_l.Spamex, "Literal", [_t.lit("balancedSpan")], {}, {}),
            mapOperator: _t.s_i_node(_l.Spamex, "Punctuator", "="),
            value: _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
              open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
              content: _t.node(_l.CSTML, "Content", [_t.lit("Comment:Block")], {}, {}),
              close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
            }, {})
          }, {})],
          close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("open")], {}, {}),
          close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eatMatch"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.ref`close`], {
          open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
          type: _t.s_node(_l.Spamex, "Identifier", "Content"),
          close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("content")], {}, {}),
          close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`tokenFlag`, _t.ref`type`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`intrinsicValue`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`attributes[]`, _t.ref`close`], {
          open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
          tokenFlag: _t.s_i_node(_l.Spamex, "Punctuator", "*"),
          type: _t.s_node(_l.Spamex, "Identifier", "Punctuator"),
          intrinsicValue: _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
            content: _t.node(_l.CSTML, "Content", [_t.lit("*/")], {}, {}),
            close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
          }, {}),
          attributes: [_t.node(_l.Spamex, "BooleanAttribute", [_t.ref`key`], {
            key: _t.node(_l.Spamex, "Literal", [_t.lit("balancer")], {}, {})
          }, {})],
          close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("close")], {}, {}),
          close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
  }
  *LineComment() {
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eat"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`tokenFlag`, _t.ref`type`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`intrinsicValue`, _t.ref`close`], {
          open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
          tokenFlag: _t.s_i_node(_l.Spamex, "Punctuator", "*"),
          type: _t.s_node(_l.Spamex, "Identifier", "Punctuator"),
          intrinsicValue: _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
            open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
            content: _t.node(_l.CSTML, "Content", [_t.lit("//")], {}, {}),
            close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
          }, {}),
          close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("start")], {}, {}),
          close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.s_node(_l.Instruction, "Identifier", "eatMatch"),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Spamex, "NodeMatcher", [_t.ref`open`, _t.ref`type`, _t.embedded(_t.s_t_node(_l.Space, "Space", [_t.lit(" ")], {}, {})), _t.ref`attributes[]`, _t.ref`close`], {
          open: _t.s_i_node(_l.Spamex, "Punctuator", "<"),
          type: _t.s_node(_l.Spamex, "Identifier", "Content"),
          attributes: [_t.node(_l.Spamex, "MappingAttribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
            key: _t.node(_l.Spamex, "Literal", [_t.lit("span")], {}, {}),
            mapOperator: _t.s_i_node(_l.Spamex, "Punctuator", "="),
            value: _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
              open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
              content: _t.node(_l.CSTML, "Content", [_t.lit("Comment:Line")], {}, {}),
              close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
            }, {})
          }, {})],
          close: _t.s_i_node(_l.Spamex, "Punctuator", ">")
        }, {}), _t.node(_l.CSTML, "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
          open: _t.s_i_node(_l.CSTML, "Punctuator", "'"),
          content: _t.node(_l.CSTML, "Content", [_t.lit("content")], {}, {}),
          close: _t.s_i_node(_l.CSTML, "Punctuator", "'")
        }, {})],
        close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
  }
  *Content({
    state: {
      span
    }
  }) {
    if (span === 'Comment:Block') {
      yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
        verb: _t.s_node(_l.Instruction, "Identifier", "eatMatch"),
        arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
          open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
          values: [_t.node(_l.Regex, "Pattern", [_t.ref`open`, _t.ref`alternatives[]`, _t.ref`close`], {
            open: _t.s_i_node(_l.Regex, "Punctuator", "/"),
            alternatives: [_t.node(_l.Regex, "Alternative", [_t.ref`elements[]`], {
              elements: [_t.node(_l.Regex, "Quantifier", [_t.ref`element`, _t.ref`value`], {
                element: _t.node(_l.Regex, "CapturingGroup", [_t.ref`open`, _t.ref`alternatives[]`, _t.ref`separators[]`, _t.ref`alternatives[]`, _t.ref`close`], {
                  open: _t.s_i_node(_l.Regex, "Punctuator", "("),
                  alternatives: [_t.node(_l.Regex, "Alternative", [_t.ref`elements[]`, _t.ref`elements[]`], {
                    elements: [_t.node(_l.Regex, "Character", [_t.embedded(_t.s_e_node(_l.CSTML, "Escape", [_t.lit("\\*")], {}, {
                      cooked: "*"
                    }))], {}, {}), _t.node(_l.Regex, "CharacterClass", [_t.ref`open`, _t.ref`negate`, _t.ref`elements[]`, _t.ref`close`], {
                      open: _t.s_i_node(_l.Regex, "Punctuator", "["),
                      negate: _t.s_i_node(_l.Regex, "Keyword", "^"),
                      elements: [_t.node(_l.Regex, "Character", [_t.lit("/")], {}, {})],
                      close: _t.s_i_node(_l.Regex, "Punctuator", "]")
                    }, {})]
                  }, {}), _t.node(_l.Regex, "Alternative", [_t.ref`elements[]`], {
                    elements: [_t.node(_l.Regex, "AnyCharacterSet", [_t.ref`value`], {
                      value: _t.s_i_node(_l.Regex, "Keyword", ".")
                    }, {})]
                  }, {})],
                  separators: [_t.s_i_node(_l.Regex, "Punctuator", "|")],
                  close: _t.s_i_node(_l.Regex, "Punctuator", ")")
                }, {}),
                value: _t.s_i_node(_l.Regex, "Keyword", "*")
              }, {
                min: 0,
                max: Infinity,
                greedy: true
              })]
            }, {})],
            close: _t.s_i_node(_l.Regex, "Punctuator", "/")
          }, {})],
          close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
        }, {})
      }, {});
    } else if (span === 'Comment:Line') {
      yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
        verb: _t.s_node(_l.Instruction, "Identifier", "eatMatch"),
        arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
          open: _t.s_i_node(_l.Instruction, "Punctuator", "("),
          values: [_t.node(_l.Regex, "Pattern", [_t.ref`open`, _t.ref`alternatives[]`, _t.ref`close`], {
            open: _t.s_i_node(_l.Regex, "Punctuator", "/"),
            alternatives: [_t.node(_l.Regex, "Alternative", [_t.ref`elements[]`], {
              elements: [_t.node(_l.Regex, "Quantifier", [_t.ref`element`, _t.ref`value`], {
                element: _t.node(_l.Regex, "CharacterClass", [_t.ref`open`, _t.ref`negate`, _t.ref`elements[]`, _t.ref`close`], {
                  open: _t.s_i_node(_l.Regex, "Punctuator", "["),
                  negate: _t.s_i_node(_l.Regex, "Keyword", "^"),
                  elements: [_t.node(_l.Regex, "Character", [_t.embedded(_t.s_e_node(_l.CSTML, "Escape", [_t.lit("\\n")], {}, {
                    cooked: "\n"
                  }))], {}, {})],
                  close: _t.s_i_node(_l.Regex, "Punctuator", "]")
                }, {}),
                value: _t.s_i_node(_l.Regex, "Keyword", "*")
              }, {
                min: 0,
                max: Infinity,
                greedy: true
              })]
            }, {})],
            close: _t.s_i_node(_l.Regex, "Punctuator", "/")
          }, {})],
          close: _t.s_i_node(_l.Instruction, "Punctuator", ")")
        }, {})
      }, {});
    } else {
      throw new Error();
    }
  }
  *Match() {}
  *Punctuator() {}
});
