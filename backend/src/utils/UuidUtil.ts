import { v4 } from "uuid";

export default class UuidUtil {

    get(): string {
        return v4();
    }

    static get(): string {
        return v4();
    }
}