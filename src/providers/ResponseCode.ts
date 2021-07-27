const ResponseCode = {
    COMMON_ERROR: {code:404, message: "Something wrong. Please try again."},
    EMAIL_EXISTS: {code:422, message: "Email already exists. Please login or try another email."},
    REGISTRATION_SUCCESS: {code:200, message: "You have registered successfully."},
    REGISTRATION_THANK_YOU_EMAIL_FAILD: {code:424, message: "Failed to send thank you email."},
    REGISTRATION_EMAIL_VERIFICATION_LINK_FAILD: {code:424, message: "Failed to send thank you email."},
    REGISTRATION_FORM_INVALID: {code:422, message: "Provided user information is not valid."},
};

export default ResponseCode;