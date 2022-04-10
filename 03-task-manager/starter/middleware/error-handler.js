const errorHandlerMiddleware = (err, req, res, next) => {
    return res.status(err.status).json({msg: err.message})
//return res.status(500).json({msg: err});
//return res.status(500).json({ msg: 'something went wrong. Please try again later' });
};

module.exports = errorHandlerMiddleware;