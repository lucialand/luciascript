import { l } from '../index';

describe('.l()', () => {
  it('should create properly with no children and no props', () => {
    expect(l('div')).toBe('<div></div>');
  });
  it('should create properly with no children and classname', () => {
    expect(l('div', { className: 'foo-bar' })).toBe("<div class='foo-bar'></div>");
  });
  it('should create properly with no children and some props', () => {
    expect(
      l('div', { id: 'foo', className: 'foobar foo bar foo-bar', style: 'text-align: center;' })
    ).toBe("<div id='foo' style='text-align: center;' class='foobar foo bar foo-bar'></div>");
  });
  it('should create properly with some children and no props', () => {
    expect(
      l('div', undefined, [
        l('p', { 'l-text': 'this.count' }, '0'),
        l('button', { 'l-on:click': 'this.count++' }, 'Click Me!'),
      ])
    ).toBe(
      "<div><p l-text='this.count'>0</p><button l-on:click='this.count++'>Click Me!</button></div>"
    );
  });
});
