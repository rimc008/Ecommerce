import express from "express"
import cors from "cors"

export const middleware = (app) => {

    app.use(express.json())
    app.use(cors())

}

