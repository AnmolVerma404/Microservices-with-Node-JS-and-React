import mongoose from "mongoose";

/**
 * @OtpAtters define how the OTP schema looks
 * What are the types of value UserSchema accept
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
 * mongoose.Schema will create a schema for mongoose and store the instance of it in @UserSchema
 */
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  location: {
    type: String,
  },
  timezone: {
    type: String,
  },
  college: {
    type: String,
  },
  graduationYear: {
    type: String,
  },
  degree: {
    type: String,
  },
  major: {
    type: String,
  },
  username: {
    type: String,
  },
  alternateEmail: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  aboutMe: {
    type: String,
  },
  alternateMobile: {
    type: String,
  },
  roles: {
    type: [String],
  },
  social: {
    type: String,
  },
  areaOfExperience: {
    type: [String],
  },
  skills: {
    type: [String],
  },
  isAccountActive: {
    type: Boolean,
  },
  referredBy: {
    type: String,
  },
});

/**
 * We are using this to make a @build function which will be accessible with @Otp variable.
 * But still TS dosen't knows that any build function is present
 */
UserSchema.statics.build = (attrs: OtpAtters) => {
  return new Otp(attrs);
};

/**
 * @Otp is a node to connect the instance of @UserSchema to @opt schema in mongoDB cluster
 * <any,OtpModel> tells model to give @Otp the ability to call @build function/method
 */
const user = mongoose.model<any, OtpModel>("User", UserSchema);

export { user };
