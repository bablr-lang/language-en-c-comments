import { m, eat, eatMatch, endSpan, startSpan } from '@bablr/helpers/grammar';
import * as BSet from '@bablr/agast-helpers/b-set';
import { freeze, immutable } from '@bablr/agast-helpers/object';

export default class CComments {
  static canonicalURL = 'https://bablr.org/languages/core/en/c-comments';
  static dependencies = freeze({});
  static defaultMatcher = null;
  static fragmentProduction = null;
  static context = immutable({});

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
}

freeze(CComments);
freeze(CComments.prototype);
