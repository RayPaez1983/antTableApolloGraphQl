describe('Company Grid Functionality', () => {
  it('Companies Float Filter', () => {
    cy.visit('/companies')
    cy.get('button[data-testid=\'move-grid-button-id\']').click()
    cy.get('div[data-testid=\'all-companies-select-id\']').click()
    cy.get('div[data-testid=\'all-companies-select-id\']')
      .click()                                  
    cy.get('div[title="Product Potentials"]') 
      .click({ force: true })
    cy.get('div[title="Region"]') 
      .click({ force: true })
    cy.get('div[title="Company Type"]') 
      .click({ force: true })
    cy.get('div[data-testid=\'all-companies-select-id\']').click()
    cy.get('button[data-testid=\'move-grid-button-id\']').click()
  })
  it('Companies Active Companies Filter', () => {
    cy.visit('/companies')
    cy.get('div[data-testid=\'showFilterOptions-select-id\']').click()
    cy.get('div[title="Show Active"]') 
    .click({ force: true })
    cy.get('div[title="Show Inactive"]') 
    .click({ force: true })
    cy.get('div[title="Show All"]') 
    .click({ force: true })
  })
  it('Table Companies Columns Filter', () => {
    cy.visit('/companies')
    cy.get('div[data-testid=\'columns-select-id\']')
    .click({ force: true })
    .get('.ant-select-selection-overflow-item')
    .contains('Name')
    .click({ force: true })
    .get('.ant-select-selection-overflow-item')
    .contains('Company Type')
    .click({ force: true })
    .get('.ant-select-selection-overflow-item')
    .contains('Name')
    .click({ force: true })
    .get('.ant-select-selection-overflow-item')
    .contains('Company Type')
    .click({ force: true })
   
  })
  it('Companies Rows To show Filter', () => {

    cy.visit('/companies')
    cy.get('div[data-testid=\'rowsDisplayedOptions-select-id\']').click()
    cy.get('div[title="Rows 50"]') 
    .click({ force: true })
    cy.get('div[title="Rows 100"]')  
    .click({ force: true })
    cy.get('div[title="Rows 200"]')  
    .click({ force: true })
    cy.get('div[title="Rows 500"]')  
    .click({ force: true })
    cy.get('div[title="Rows 1000"]')  
    .click({ force: true })
    cy.get('div[title="Rows 25"]') 
    .click({ force: true })
  })
  it('Companies Table Pagination', () => {

    cy.visit('/companies')
    cy.get('span[data-testid=\'next-page-arrow\']').click()
    cy.get('input[data-testid=\'input-enter-page\']').type('4')
    cy.get('button[data-testid=\'button-entered-page\']').click()
    cy.get('span[data-testid=\'next-page-arrow\']').click()
    cy.get('span[data-testid=\'last-page-arrow\']').click()
    cy.get('span[data-testid=\'first-page-arrow\']').click()
  })
})
