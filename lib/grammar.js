import { re, spam as m } from '@bablr/boot';
import { eat, eatMatch } from '@bablr/helpers/grammar';

export const canonicalURL = 'https://bablr.org/languages/core/en/c-comments';

export const grammar = class CCommentsGrammar {
  constructor() {
    this.literals = new Set(['Punctuator']);
  }

  *Comment() {
    if (yield eatMatch(m`<BlockComment '/*' />`)) {
    } else {
      yield eat(m`<LineComment '//' />`);
    }
  }

  *BlockComment() {
    yield eat(m`open: <*Punctuator '/*' { balanced: '*/', balancedSpan: 'Comment:Block' } />`);

    yield eatMatch(m`content: <*Content { span: 'Comment:Block' }/>`);

    yield eat(m`close: <*Punctuator '*/' { balancer: true } />`);
  }

  *LineComment() {
    yield eat(m`start: <*Punctuator '//' />`);

    yield eatMatch(m`content: <*Content { span: 'Comment:Line' } />`);
  }

  *Content({ state: { span } }) {
    if (span === 'Comment:Block') {
      yield eatMatch(re`/(?:\*[^/]|[^*])*/`);
    } else if (span === 'Comment:Line') {
      yield eatMatch(re`/[^\n]*/`);
    } else {
      throw new Error();
    }
  }
};
