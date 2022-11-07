import mongoose from "mongoose";
import { Password } from "../services/password";
interface UserAttrs {
  email: string;
  password: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
},{
    toJSON:{
      transform(doc,ret){
        ret.id  = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      }
    }
});

userSchema.pre("save", async function (done) {
  //We are using normal function instead of arrow function, as doing this way allow us to use used information using this keyword otherwize in arrow function this keyword will be having user.ts methods
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User }; //Or use export default if this will be the only instance we need to export
