import rpn from '../src/index'

test('test calculate func', () => {
    expect(new rpn('9+8+8/4').calculate()).toBe(19)
})