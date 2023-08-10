function validateUser(email, password) {
    const errors = {};

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (email === undefined) errors.error = "Missing email";
    if (password === undefined) errors.error = "Missing password";
    if (email.trim() === "") errors.error = "Write your email please.";
    if (!regexEmail.test(email)) errors.error = "Example: email@henry.com.";
    if (email.length > 35) errors.error = "Maximum 35 characters.";

    const regexPassword = /\d/;

    if (!regexPassword.test(password))
        errors.error = "Must have at least one number.";
    if (password.length < 6 || password.length > 10)
        errors = "It must be between 6 and 10 characters.";

    return errors;
}
module.exports = validateUser;
