describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('shold be able to navigate to the product page and it to the cart', () => {
    cy.get('a[href^="/products"]').first().click()

    cy.url().should('include', '/products')
    cy.location('pathname').should('include', '/products')

    cy.contains(/adicionar ao carrinho/i).click()

    cy.contains('Cart (1)').should('exist', true)
  })

  it('shold not count duplicated products on cart', () => {
    cy.get('a[href^="/products"]').first().click()

    cy.location('pathname').should('include', '/products')

    cy.contains(/adicionar ao carrinho/i).click()
    cy.contains(/adicionar ao carrinho/i).click()

    cy.contains('Cart (1)').should('exist')
  })

  it('shold able to search for a product and add it do cart', () => {
    cy.get('input[name=q]').type('moletom').parent('form').submit()

    cy.get('a[href^="/products"]').first().click()

    cy.location('pathname').should('include', '/products')

    cy.contains(/adicionar ao carrinho/i).click()

    cy.contains('Cart (1)').should('exist')
  })
})
