import { m, eat, eatMatch, endSpan, startSpan } from '@bablr/helpers/grammar';
import * as BSet from '@bablr/agast-helpers/b-set';

export const canonicalURL = 'https://bablr.org/languages/core/en/c-comments';

export const grammar = class CCommentsGrammar {
  constructor() {
    this.literals = BSet.from('Literal');
  }

  *Comment() {
    if (yield eatMatch(m`<BlockComment '/*' />`)) {
    } else {
      yield eat(m`<LineComment '//' />`);
    }
  }

  *BlockComment() {
    yield eat(m`openToken*: <* '/*' />`);

    yield startSpan('Comment:Block', '*/');
    yield eatMatch(m`content: <*Literal /.*/s />`);
    yield endSpan();

    yield eat(m`closeToken*: <* '*/' />`);
  }

  *LineComment() {
    yield eat(m`startToken*: <* '//' />`);

    yield startSpan('Comment:Line', '\n');
    yield eatMatch(m`content: <*Literal /.*/s />`);
    yield endSpan();
  }
};

export default { canonicalURL, dependencies: {}, grammar };
