import expect from 'expect.js';
import action from '../../lib/action/menu';
import * as consts from '../../lib/const';

describe('action', () => {
  it('should ok', () => {
    expect(true).to.be(true);
  });

  it('type', () => {
    expect(action(124).type).to.be(consts.TOP_MENU);
  });

  it('should fail', () => {
    expect(action(124).id).to.be(124);
  });
});
