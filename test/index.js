'use strict'

/* global describe, it */

const assert = require('assert')

describe('verify uri computation', () => {
  it('node script', () => {
    const Thumbor = require('../src')
    const thumbor = new Thumbor('MY_KEY', 'http://myserver.thumbor.com')

    const thumborUrl = thumbor.setImagePath('00223lsvrnzeaf42.png').resize(50,50).buildUrl()

    assert.strictEqual(thumborUrl, 'http://myserver.thumbor.com/Jqil0nBQSEulBHPmyRThD5W7gLE=/50x50/00223lsvrnzeaf42.png')
  })

  it('browser script', () => {
    const Thumbor = require('../src/browser')
    const thumbor = new Thumbor('MY_KEY', 'http://myserver.thumbor.com')

    const thumborUrl = thumbor.setImagePath('00223lsvrnzeaf42.png').resize(50,50).buildUrl()

    assert.strictEqual(thumborUrl, 'http://myserver.thumbor.com/Jqil0nBQSEulBHPmyRThD5W7gLE=/50x50/00223lsvrnzeaf42.png')
  })
})
