import { i } from '@bablr/boot/shorthand.macro';
import { Node, CoveredBy, InjectFrom } from '@bablr/helpers/decorators';
import * as Shared from '@bablr/helpers/productions';
import * as Space from '@bablr/language-blank-space';

export const canonicalURL = 'https://github.com/bablr-lang/language-c-comments';

export const dependencies = { Space };

export const grammar = class CCommentsGrammar {
  *Trivia() {
    while (yield i`eatMatch(<#*Space:Space>)` || (yield i`eatMatch(<Comment>)`));
  }

  *Comment() {
    yield i`eat(<Match> null [
      (<BlockComment> '/*')
      (<LineComment> '//')
    ])`;
  }

  @CoveredBy('Comment')
  @Node
  *BlockComment() {
    yield i`eat(<* Punctuator '/*' balanced='*/' balancedSpan='Comment:Block'> 'open')`;

    yield i`eatMatch(<Content> 'content')`;

    yield i`eat(<* Punctuator '*/' balancer> 'close')`;
  }

  @CoveredBy('Comment')
  @Node
  *LineComment() {
    yield i`eat(<* Punctuator '//'> 'start')`;

    yield i`eatMatch(<Content span='Comment:Line'> 'content')`;
  }

  @Node
  *Content(props, { span }) {
    if (span === 'Comment:Block') {
      yield i`eatMatch(/(\*[^/]|.)*/)`;
    } else if (span === 'Comment:Line') {
      yield i`eatMatch(/[^\n]*/)`;
    } else {
      throw new Error();
    }
  }

  @InjectFrom(Shared)
  *Match() {}

  @Node
  @InjectFrom(Shared)
  *Punctuator() {}
};
