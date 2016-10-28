const assert = require('chai').assert
const isWhatever = require('./index')

describe('Anything', () =>{
  it('Anything string should return true', () => {
    assert.isTrue(isWhatever('hello'))
  })
  it('Anything number should return true', () => {
    assert.isTrue(isWhatever(42))
  })
  it('No arguments is not something', () => {
    assert.isFalse(isWhatever())
  })
})