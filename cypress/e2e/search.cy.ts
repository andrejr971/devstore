describe('add product to cart', () => {
  it('shold able to search for products', () => {
    cy.visit('/')

    cy.get('input[name=q]').type('moletom').parent('form').submit()

    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'q=moletom')

    cy.get('a[href^="/products"]').should('exist')
  })

  it('should not be able to search page without a search query', () => {
    cy.on('uncaught:exception', () => {
      return false
    })

    cy.visit('/search')

    cy.location('pathname').should('equal', '/')
  })
})
