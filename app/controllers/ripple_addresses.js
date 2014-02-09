var RippleAddress = require('../models/ripple_address');

module.exports = (function(){
  function create(req, res) {
    req.validate('user_id', 'isInt');
    req.validate('ripple_address', 'isAlpha');
    // What are we actually doing with cash_amount
    // other than validating it?
    req.validate('cash_amount', 'isFloat');

    // Are we sure code from here on isn't executed if  
    // any of the above are invalid?
    if (req.user.admin || (req.user.id == req.body.user_id)) {
      RippleAddress.create({
      	// camel hump scores, under says zzzzzz
        user_id: req.body.user_id,
        // address zeez problems, b4 they gets yee 
        address: req.body.ripple_address
      }).complete(function(err, address){
      	if (err) { /* whatevz, zzzzzz */ }
        res.send({ ripple_address: address });
      });
    } else {
      res.status(401);
      res.send('Unauthorized');
    }
	}

  function index(req,res) {
    if (req.user.admin) {
      RippleAddress.findAll().complete(function(err, addresses) {
        res.send({ ripple_addresses: addresses });
      });
    } else {
      RippleAddress.findAll({ where: { user_id: req.user.id }})
        .complete(function(err, addresses) {
          res.send({ ripple_addresses: addresses });
      });
    }
  }

  return {
		create: create,
		index: index
  }
})();
