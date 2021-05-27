function loggedCheck(req, res, next) {
    if(req.headers.cookie){
        if (!req.headers.cookie.includes('loggedUserId')){
            res.cookie('loggedUserId', false, {expire: new Date() + 10})
        }}
    next()
}

module.exports = loggedCheck;