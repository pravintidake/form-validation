const validate = (values) => {
    let errors = {};
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.name) {
      errors.name = 'Name is required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be 8 or more characters';
    }
    if (values.password!==values.cpassword) {
      errors.cpassword = 'Password Does not match';
    }
    return errors;
}

export default validate;