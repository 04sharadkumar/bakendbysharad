class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message);  // Use semicolon here

        this.statusCode = statusCode;
        this.data = null;
        this.success = false;  // Assuming an API error is a failure
        this.errors = errors;

        if (stack) {
            this.stack = stack;  // Fixed typo here
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };
