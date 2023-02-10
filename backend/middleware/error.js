function errorHandler (err, req, res, next) {

    console.log(err);
    res.status(500)
    res.render('error', { error: err })
}

module.exports = errorHandler