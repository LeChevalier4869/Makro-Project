exports.register = (req, res, next) => {
    const { email, password } = req.body;

    // Logic
  
    res.json({ email, password });
};

exports.login = (req, res, next) => {
    const { email, password } = req.body;

    res.json({ email, password });
};

exports.forgetPassword = (req, res, next) => {
    const { email } = req.body;  
    // gen token --> create link --> send email
    res.json({ email });
};

// https://api.codecamp.com/auth/kjfpsdkpsdps345
exports.verifyForgetPassword = (req, res, next) => {
    const { token } = req.params;
    // Logic check token
    // redirect reset password --> with token
    res.json({ message: 'Verify Forget Password', token });
};

exports.resetPassword = (req, res, next) => {
    const { token } = req.params;
    const { password } = req.body;

    // change new password
    // get in database

    res.json({ message: 'Reset Password', password, token });
};