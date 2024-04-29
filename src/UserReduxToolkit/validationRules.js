const rules = {
  fullName: {
    required: {
      value: true,
      message: "First name is required",
    },
    minLength: {
      value: 4,
      message: "First name must be at least 4 characters",
    },
  },
  email: {
    required: {
      value: true,
      message: "Email address is required",
    },
  },
  password: {
    required: {
      value: true,
      message: "Password is required",
    },
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters long",
    },
    maxLength: {
      value: 20,
      message: "Password must be at most 20 characters long",
    },
  },
};

export default rules;
