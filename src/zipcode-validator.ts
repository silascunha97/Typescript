import { Validator } from "./validator";

class ZipcodeValidator implements Validator{
    isValid(s: string): boolean {
        const zipCodeRegex = /^[0-9]{5}(?:-[0-9]{9})?$/

        return zipCodeRegex.test(s)
    }
}

export { ZipcodeValidator }