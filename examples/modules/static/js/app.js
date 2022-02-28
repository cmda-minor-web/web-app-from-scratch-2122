import { handleRoutes } from './modules/router.js'

handleRoutes()

/*** good to know ***/

// modules are scoped
// modules only work on webserver / localhost
// main script needs [type=module] attribute to work
// modules are deferred by default
// modules run in strict mode by default
