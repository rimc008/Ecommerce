import ratelimit from "express-rate-limit"

export const loginlimitter = ratelimit({
    windowMs : 20 * 60 * 1000,
    max : 5,
    message : "Too many login attemps.Try again later."
});
