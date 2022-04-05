import { prodenvironment } from "./prod.env"
import { devenvironment } from "./dev.env"

export interface Environment {
    dev_url: string

}

export function getEnvironment() {

    if (process.env.NODE_ENV === 'production') {

        return prodenvironment
    } else {
        return devenvironment

    }

}