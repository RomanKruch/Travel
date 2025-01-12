export const validateUsername = (username: string) => {
  if (!username.trim()) {
    return 'Username is required!';
  } else if (username.length < 4) {
    return 'Username must be at least 4 characters long!';
  }
  return '';
};

export const validateEmail = (email: string) => {
  if (!email.trim()) {
    return 'Email is required!';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    return 'Email is invalid!';
  }
  return '';
};

export const validatePassword = (password: string) => {
  if (!password) {
    return 'Password is required!';
  } else if (password.length < 8) {
    return 'Password must be at least 8 characters long!';
  }
  return '';
};
