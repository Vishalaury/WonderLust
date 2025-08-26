class ExpressError extends Error {
    constructor(statusCode, message) {
        super(message);  // <-- pass the message to parent Error
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;
