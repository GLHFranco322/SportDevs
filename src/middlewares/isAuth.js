module.exports  =  (req, res, next) => {        
        return req.session.userLogin ? res.redirect('/') : next()
};

