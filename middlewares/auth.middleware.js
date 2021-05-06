var db = require('../db')

module.exports.requireAuth = function(res, req, next) {
	// console.log(req.req.cookies)
	if (!req.req.cookies.userId) {
		res.res.redirect('/auth/login')
		return
	}


	var user = db.get('user').find({id: req.req.cookies.userId}).value()

	if (user) {
		res.res.redirect('/auth/login')
		return
	}

	next()
}