require('dotenv').config()
import * as mongoose from "mongoose"
import { getEnvironment } from "../getEnvironments/env"
function connectDb() 
{

    // mongoose.Promise = global.Promise
    mongoose.connect(getEnvironment().dev_url)
    const con = mongoose.connection
    con.on('open', () => {
        console.log("database connected in mongo atlas (#cloud)");
    })
}

module.exports = connectDb  