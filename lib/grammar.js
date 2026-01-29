import { re, spam as m } from '@bablr/boot';
import { eat, eatMatch, endSpan, startSpan } from '@bablr/helpers/grammar';

export const canonicalURL = 'https://bablr.org/languages/core/en/c-comments';

export const grammar = class CCommentsGrammar {
  *Comment() {
    if (yield eatMatch(m`<BlockComment '/*' />`)) {
    } else {
      yield eat(m`<LineComment '//' />`);
    }
  }

  *BlockComment() {
    yield eat(m`openToken*: <* '/*' />`);

    yield startSpan('Comment:Block', '\n');
    yield eatMatch(m`content: <*Literal />`);
    yield endSpan();

    yield eat(m`closeToken*: <* '*/' />`);
  }

  *LineComment() {
    yield eat(m`startToken*: <* '//' />`);

    yield startSpan('Comment:Line', '\n');
    yield eatMatch(m`content: <*Literal />`);
    yield endSpan();
  }

  *Literal({ s }) {
    let { span } = s();
    if (span.name === 'Comment:Block') {
      yield eatMatch(re`/(?:\*[^/]|[^*])*/`);
    } else if (span.name === 'Comment:Line') {
      yield eatMatch(re`/[^\n]*/`);
    } else {
      throw new Error();
    }
  }
};

export default { canonicalURL, dependencies: {}, grammar };
