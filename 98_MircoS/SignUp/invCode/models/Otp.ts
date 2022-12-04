import mongoose from "mongoose";

/**
 * @OtpAtters define how the OTP schema looks
 * What are the types of value otpSchema accept
 */
interface OtpAtters {
  email: string;
  otp: string;
  createdAt: Date;
  expiresAt: Date;
}

/**
 * @OtpModel will basically tell TS that we have a @build function
 * That @build function accept @OtpAtters
 */
interface OtpModel extends mongoose.Model<any> {
  build(attrs: OtpAtters): any;
}

/**
 * mongoose.Schema will create a schema for mongoose and store the instance of it in @otpSchema
 */
const otpSchema = new mongoose.Schema({
  email: String,
  otp: String,
  createdAt: Date,
  expiresAt: Date,
});

/**
 * We are using this to make a @build function which will be accessible with @Otp variable.
 * But still TS dosen't knows that any build function is present
 */
otpSchema.statics.build = (attrs: OtpAtters) => {
  return new Otp(attrs);
};

/**
 * @Otp is a node to connect the instance of @otpSchema to @opt schema in mongoDB cluster
 * <any,OtpModel> tells model to give @Otp the ability to call @build function/method
 */
const Otp = mongoose.model<any, OtpModel>("otp", otpSchema);

export { Otp };
