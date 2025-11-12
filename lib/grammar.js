import { re, spam as m } from '@bablr/boot';
import { eat, eatMatch } from '@bablr/helpers/grammar';

export const canonicalURL = 'https://bablr.org/languages/core/en/c-comments';

export const grammar = class CCommentsGrammar {
  *Comment() {
    if (yield eatMatch(m`<BlockComment '/*' />`)) {
    } else {
      yield eat(m`<LineComment '//' />`);
    }
  }

  *BlockComment() {
    yield eat(m`openToken*: <* '/*' {
        balanced: '*/',
        balancedSpan: 'Comment:Block'
      } />`);

    yield eatMatch(m`content*: <*Literal { span: 'Comment:Block' }/>`);

    yield eat(m`closeToken*: <* '*/' { balancer: true } />`);
  }

  *LineComment() {
    yield eat(m`startToken*: <* '//' />`);

    yield eatMatch(m`content*: <*Literal { span: 'Comment:Line' } />`);
  }

  *Literal({ s }) {
    let { span } = s();
    if (span === 'Comment:Block') {
      yield eatMatch(re`/(?:\*[^/]|[^*])*/`);
    } else if (span === 'Comment:Line') {
      yield eatMatch(re`/[^\n]*/`);
    } else {
      throw new Error();
    }
  }
};

export default { canonicalURL, dependencies: {}, grammar };
