exports.register = (req, res, next) => {
    const { email, password } = req.body;

    // Logic
  
    res.json({ email, password });
};

exports.login = (req, res, next) => {
    const { username, password } = req.body;

    res.json({ username, password });
};

exports.forgetPassword = (req, res, next) => {
    const { email } = req.body;  

    res.json({ email });
};

exports.verifyForgetPassword = (req, res, next) => {
    const {} = req.body;
    
    res.json({ message: 'Verify Forget Password' });
};

exports.resetPassword = (req, res, next) => {
    
    res.json({ message: 'Reset Password' });
};