import { Validator as VT } from "./validator";


class EmailValidator implements VT {
    isValid(s: string): boolean{
        const emailRegex = /\S+@\.\S+/;
        return emailRegex.test(s)
    }
}

export { EmailValidator };