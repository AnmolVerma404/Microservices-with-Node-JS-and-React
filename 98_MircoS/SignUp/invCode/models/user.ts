import mongoose from 'mongoose';

/**
 * @var @UserAtters define how the User schema looks
 * What are the types of value UserSchema accept
 */
interface UserAtters {
	name: string;
	email: string;
	password: string;
	location: string;
	timezone: string;
	college: string;
	graduationYear: string;
	degree: string;
	major: string;
	username: string;
	alternateEmail: string;
	mobile: number;
	aboutMe: string;
	alternateMobile: string;
	roles: [string];
	social: string;
	areaOfExperience: [string];
	skills: [string];
	isAccountActive: Boolean;
	referredBy: string;
}

/**
 * @UserModel will basically tell TS that we have a @build function
 * That @build function accept @UserAtters
 * At the place of @UserDocs prev it was any
 * But now we have defination for how should a UserSchema look like in TS Node files
 * In simple word after creating an instance of user, we can access UserInstance.email || username || ..etc
 */
interface UserModel extends mongoose.Model<UserDocs> {
	build(attrs: UserAtters): UserDocs;
}

/**
 * @UserDocs will help files like signUp.ts using type checking and key checking
 * If we include any other ket which is not defined in UserDocs it will show error
 * @New items will be added in @UserDocs then only they can used in TS node files
 */
interface UserDocs extends mongoose.Document {
	name: string;
	email: string;
	password: string;
	location: string;
	timezone: string;
	college: string;
	graduationYear: string;
	degree: string;
	major: string;
	username: string;
	alternateEmail: string;
	mobile: number;
	aboutMe: string;
	alternateMobile: string;
	roles: [string];
	social: string;
	areaOfExperience: [string];
	skills: [string];
	isAccountActive: Boolean;
	referredBy: string;
}

/**
 * mongoose.Schema will create a schema for mongoose and store the instance of it in @UserSchema
 */
const UserSchema = new mongoose.Schema(
	{
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
	},
	{
		toJSON: {
			//This does not change _id to id in database
			transform(doc, ret) {
				ret.id = ret._id;
				delete ret._id;
				delete ret.__v;
			},
		},
	}
);

/**
 * We are using this to make a @build function which will be accessible with @user variable.
 * But still TS dosen't knows that any build function is present
 */
UserSchema.statics.build = (attrs: UserAtters) => {
	return new user(attrs);
};

/**
 * @user is a node to connect the instance of @UserSchema to @user schema in mongoDB cluster
 * <any,UserModel> tells model to give @user the ability to call @build function/method
 * Previously was <any,UserModel> now it is <UserDocs, UserModel>
 * The reason is any->UserDocs, where @UserDocs is a kind of docs about how the UserSchema will look like
 * Previously it was on any instance now it also have defination which should be strictly followed
 */
const user = mongoose.model<UserDocs, UserModel>('User', UserSchema);

export { user };
