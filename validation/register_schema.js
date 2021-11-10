const yup = require('yup');

module.exports = yup.object().shape({
    userId: yup.string().required().email(),
    emailId: yup.string().required().email(),
    password: yup.string().required().min(8),
    userName: yup.string().required().min(3)
});