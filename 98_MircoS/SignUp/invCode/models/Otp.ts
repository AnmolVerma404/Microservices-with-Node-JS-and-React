import mongoose from "mongoose";

/**
 * @var @OtpAtters define how the OTP schema looks
 * What are the types of value otpSchema accept
 */
interface OtpAtters {
  email: string;
  otp: string;
  createdAt: number;
  expiresAt: number;
}

/**
 * @OtpModel will basically tell TS that we have a @build function
 * That @build function accept @OtpAtters
 * At the place of @OtpDocs prev it was any
 * But now we have defination for how should a OtpSchema look like in TS Node files
 * In simple word after creating an instance of Otp, we can access OtpInstance.email || otp || ..etc
 */
interface OtpModel extends mongoose.Model<OtpDocs> {
  build(attrs: OtpAtters): OtpDocs;
}

/**
 * @OtpDocs will help files like signUp.ts using type checking and key checking
 * If we include any other ket which is not defined in OtpDocs it will show error
 * @New items will be added in @OtpDocs then only they can used in TS node files
 */
interface OtpDocs extends mongoose.Document {
  email: string;
  otp: string;
  createdAt: number;
  expiresAt: number;
}

/**
 * mongoose.Schema will create a schema for mongoose and store the instance of it in @otpSchema
 */
const otpSchema = new mongoose.Schema({
  email: String,
  otp: String,
  createdAt: Number,
  expiresAt: Number,
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
 * Previously was <any,OtpModel> now it is <OtpDocs, OtpModel>
 * The reason is any->OtpDocs, where @OtpDocs is a kind of docs about how the OtpSchema will look like
 * Previously it was on any instance now it also have defination which should be strictly followed
 */
const Otp = mongoose.model<OtpDocs, OtpModel>("otp", otpSchema);

/**
 * Below is the temp code @userO of how building a Otp instence would look like
 */
// const userO = Otp.build({
//   email:"",
//   otp:"",
//   createdAt: new number,
//   expiresAt: new number,
// })
// userO.email || userO.otp || ......

export { Otp };
