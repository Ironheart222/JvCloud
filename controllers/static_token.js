function token(req, res, next) {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imthbm9wYXRlbDIyMi5rcEBnbWFpbC5jb20iLCJpYXQiOjE2MTcyNjExMTIsImV4cCI6MTYxNzI2MjAxMn0.1N53xm5viKHhdCf-QVfvemnky9GEpeDYwbljo4jiuY8';
    let usertoken = req.query.token;
    if(!usertoken){
        usertoken = req.body.token;
    }
    if (usertoken && (usertoken == token)) {
        next();
    } else {
        return res.json({ message: 'Please Provide Valid Token' });
    }
    next();
}


module.exports = token;