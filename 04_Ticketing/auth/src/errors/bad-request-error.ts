import { CustomError } from "./custom-error";

export class BadRequestError extends CustomError {
  statusCode = 400;
  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, BadRequestError.prototype);//This line is necessary because we are extinding a class in TS
  }
  serializeErrors() {
    return [{ message: this.message }];
  }
}
