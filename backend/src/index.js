const express = require('express');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Route / Resources
 */

 /**
  * HTTP Methods
  * 
  * GET: Fetch a backend information
  * POST: Create a backend information
  * PUT: Change a backend information
  * DELETE: Delete a backend information
  */

  /**
   * Parameter types:
   * 
   * Query Params: Named parameters sent on the route after "?" (Filters, pagination)
   * Route Params: Parameters used to identify resources
   * Request Body: Request body, used to create or change resources
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, MariaDB, etc
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder 
     */


