'use strict';

var routes = require('next-routes')(); // this returns a function

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', 'campaigns/requests/new');
module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZixBLDBCQUF5Qzs7QUFFekMsT0FDSyxBQURMLElBQ1MsQUFEVCxrQkFDNEIsQUFENUIsa0JBRUssQUFGTCxJQUVTLEFBRlQsdUJBRWlDLEFBRmpDLG1CQUdLLEFBSEwsSUFHUyxBQUhULGdDQUcwQyxBQUgxQyw2QkFJSyxBQUpMLElBSVMsQUFKVCxvQ0FJOEMsQUFKOUM7QUFLQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0FkYW0vRGVza3RvcC9CbG9ja2NoYWluL2tpY2stc3RhcnRlciJ9