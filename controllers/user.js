const User = require('../models/User');

exports.getUserById = async (req, res, next, id) => {
   try {
      const user = await User.findById(id).select('-password');

      if (!user) {
         return res.status(400).json({
            error: 'No user is found in DB',
         });
      }

      req.profile = user;
      next();
   } catch (err) {
      return res.status(400).json({
         error: 'No user is found in DB',
      });
   }
};

exports.getUser = async (req, res) => {
   return res.json(req.profile);
};
