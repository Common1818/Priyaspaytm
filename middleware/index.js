const config = require('config');
const expressJwt = require('express-jwt');

exports.isSignedIn = expressJwt({
   secret: config.get('jwtSecret'),
   userProperty: 'auth',
   algorithms: ['HS256'],
});

exports.isAuthenticated = (req, res, next) => {
   let checker = req.profile && req.auth && req.profile._id == req.auth.user.id;
   if (!checker) {
      return res.status(403).json({
         error: 'ACCESS DENIED isAuthenticated',
      });
   }

   next();
};

exports.isAdmin = (req, res, next) => {
   if (req.profile.role === 0) {
      return res.status(403).json({
         error: 'ACCESS DENIED is not admin',
      });
   }

   next();
};
