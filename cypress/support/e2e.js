import registerCypressGrep from '@cypress/grep/src/support'
registerCypressGrep()

// Outros imports aqui.


import 'cypress-mailosaur'
import './commands'
import 'cypress-iframe'

// Alternatively you can use CommonJS syntax:
// require('./commands')