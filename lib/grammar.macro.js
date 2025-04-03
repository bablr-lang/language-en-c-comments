import { re, spam as m } from '@bablr/boot';
import { eat, eatMatch } from '@bablr/helpers/grammar';
import { Node, CoveredBy, InjectFrom } from '@bablr/helpers/decorators';
import * as Shared from '@bablr/helpers/productions';
import * as Space from '@bablr/language-en-blank-space';

export const canonicalURL = 'https://bablr.org/languages/core/en/c-comments';

export const dependencies = { Space };

export const grammar = class CCommentsGrammar {
  *Trivia() {
    while (
      yield eatMatch(m`#: <*Space:Space /[ \r\n\t]+/ />`) || (yield eatMatch(m`<__Comment />`))
    );
  }

  *Comment() {
    yield eat(m`<_Any />`, [m`<BlockComment '/*' />`, m`<LineComment '//' />`]);
  }

  @CoveredBy('Comment')
  @Node
  *BlockComment() {
    yield eat(m`open: <*Punctuator '/*' balanced='*/' balancedSpan='Comment:Block' />`);

    yield eatMatch(m`content: <Content />`);

    yield eat(m`close: <*Punctuator '*/' balancer />`);
  }

  @CoveredBy('Comment')
  @Node
  *LineComment() {
    yield eat(m`start: <*Punctuator '//' />`);

    yield eatMatch(m`content: <Content span='Comment:Line' />`);
  }

  @Node
  *Content({ state: { span } }) {
    if (span === 'Comment:Block') {
      yield eatMatch(re`/(\*[^/]|.)*/`);
    } else if (span === 'Comment:Line') {
      yield eatMatch(re`/[^\n]*/`);
    } else {
      throw new Error();
    }
  }

  @InjectFrom(Shared)
  *Any() {}

  @Node
  @InjectFrom(Shared)
  *Punctuator() {}
};
