import ratelimit from "express-rate-limit"

export const loginlimitter = ratelimit({
    windowMs : 20 * 60 * 1000,
    max : 100,
    message: {
        success: false,
        message: "Too many login attempts. Try again later."
    }
});
