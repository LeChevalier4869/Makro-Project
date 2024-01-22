exports.register = (req, res, next) => {
    res  
      .status(201)
      .json({ message: 'Register Success' });
};

exports.login = (req, res, next) => {
    res
      .status(201)
      .json({ message: 'Login Success' });
};