var url = require('url');
exports.loadParams = function(req, res, next){
    req.requrl = url.parse(req.url,true);
    if(next) next();
}