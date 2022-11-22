it('Request page number 80', () => {
    // https://on.cypress.io/request
    cy.request('https://api.punkapi.com/v2/beers?page=2&per_page=80')
      .should((response) => {
        expect(response.status).to.eq(200)
        // the server sometimes gets an extra comment posted from another machine
        // which gets returned as 1 extra object
        expect(response.body).to.have.property('length')
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })
  })

  it('Request page number 5 ', () => {
    // https://on.cypress.io/request
    cy.request('https://api.punkapi.com/v2/beers?page=2&per_page=5')
      .should((response) => {
        expect(response.status).to.eq(200)
        // the server sometimes gets an extra comment posted from another machine
        // which gets returned as 1 extra object
        expect(response.body).to.have.property('length')
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })
  })
  it('Request page number 1', () => {
    // https://on.cypress.io/request
    cy.request('https://api.punkapi.com/v2/beers?page=2&per_page=1')
      .should((response) => {
        expect(response.status).to.eq(200)
        // the server sometimes gets an extra comment posted from another machine
        // which gets returned as 1 extra object
        expect(response.body).to.have.property('length')
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })
  })