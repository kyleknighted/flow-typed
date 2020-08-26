// @flow
import { describe, it } from 'flow-typed-test';

import { parse, stringify } from 'simple-query-string';

describe('simple-query-string@1.x.x', () => {
  it('parse usage with default separators', () => {
    parse("{ search: '?number=1531869237159&string=someString' }");
  });

  it('stringify usage with default separators', () => {
    stringify({ search: { number: 1531869237159, string: 'someString' } });
  });

  it('parse usage with specified separators', () => {
    parse("{ search: '?number+1531869237159@string+someString' }", '@', '+');
  });

  it('stringify usage with specified separators', () => {
    stringify({ search: { number: 1531869237159, string: 'someString' } }, '@', '+');
  });

  it('should throw errors when impropertly used', () => {
    // $FlowExpectedError
    parse({ search: { number: 1531869237159, string: 'someString' } });
    // $FlowExpectedError
    stringify("{ search: '?number=1531869237159&string=someString' }");
    // $FlowExpectedError
    parse("{ search: '?number+1531869237159@string+someString' }", 1, 2);
    // $FlowExpectedError
    stringify({ search: { number: 1531869237159, string: 'someString' } }, 1, 2);
  });
});
