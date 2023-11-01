import { Document } from "mongoose";


export interface IsUser extends Document {
    readonly userName: string,
    readonly email: string,
    readonly password: string

}