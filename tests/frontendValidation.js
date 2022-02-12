module.exports = {
    'Frontend Validation' : function (client) {
      client
        .url('https://facturasimple.uy/')
        .waitForElementVisible('body', 1000)
        .waitForElementVisible('a[title=Login]', 1000)
        .click('a[title=Login]')
        .waitForElementVisible('body', 1000)
        .waitForElementVisible('input[type=email]', 1000)
        .waitForElementVisible('input[type=password]', 1000)
        .setValue('input[type=email]', 'demo@cualit.com')
        .setValue('input[type=password]', 'facturasimple')
        .click('button[type=submit]')
        .pause(1000)
        .waitForElementVisible('body', 1000)
        .assert.containsText('ul li:nth-child(3) a span',
          'Demo Admin')
        .end()
    }
  }