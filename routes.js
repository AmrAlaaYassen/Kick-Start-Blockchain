const routes = require('next-routes')(); // this returns a function

routes
    .add('/campaigns/new' , '/campaigns/new')
    .add('/campaigns/:address' , '/campaigns/show');

module.exports = routes;