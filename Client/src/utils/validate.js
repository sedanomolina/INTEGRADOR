

export default function validate(userData) {

    const { email, password } = userData;

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPassword = /\d/;

    const errors = {};

    if (!regexEmail.test(email)) errors.email = 'Example: email@henry.com.';
    if (email.trim() === '') errors.email = 'Write your email please.';
    if (email.length > 35) errors.email = 'Maximum 35 characters.';

    if (!regexPassword.test(password)) errors.password = 'Must have at least one number.';
    if (password.length < 6 || password.length > 10) errors.password = 'It must be between 6 and 10 characters.';

    return errors;

}