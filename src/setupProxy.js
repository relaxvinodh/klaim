function wait(ms) {
  var start = new Date().getTime()
  var end = start
  while (end < start + ms) {
    end = new Date().getTime()
  }
}

const MOCK_DATA = {
  login: {
    success: true,
    data: {
      token: 'fb566635a66295da0c8ad3f467c32dcf'
    }
  },
  info: {
    success: true,
    data: {
      info: 'Some information about the company.'
    }
  },
  profile: {
    success: true,
    data: {
      fullname: 'Alexey Kornilov',
      email: 'alexey@klaim.ai',
      avatar:
        'data:image/jpeg;base64,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'
    }
  },
  author: {
    success: true,
    data: {
      authorId: 1,
      name: 'Charlie Chaplin'
    }
  },
  quote: {
    success: true,
    data: {
      quoteId: 1,
      authorId: 1,
      quote: 'A day without laughter is a day wasted.'
    }
  },
  logout: {
    success: true,
    data: {}
  }
}

module.exports = function (app) {
  app.post('/api/login', (req, res) => res.send(MOCK_DATA.login))
  app.get('/api/info', (req, res) => res.send(MOCK_DATA.info))
  app.get('/api/profile', (req, res) => res.send(MOCK_DATA.profile))
  app.get('/api/author', (req, res) => {
    wait(5000)
    res.send(MOCK_DATA.author)
  })
  app.get('/api/quote', (req, res) => {
    wait(5000)
    res.send(MOCK_DATA.quote)
  })
  app.delete('/api/logout', (req, res) => res.send(MOCK_DATA.logout))
}
