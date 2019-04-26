// The User schema.
import User from "../../../models/User";

export default {

    // Read
    Query: {
        user: (_: any, id) => {
            return User.findOne(id).exec();
        },
        users: () => {
            return User.find({}).exec();
        }
    },

    // Write
    Mutation: {
        addUser: (_: any, { name, email }) => {
            const newUser = new User({ name, email });
            return newUser.save();
        },
        editUser: (_: any, { id, name, email }) => {
            return User.findOneAndUpdate({ id }, { $set: { name, email } }).exec();
        },
        deleteUser: (_: any, { id }) => {
            return User.findOneAndRemove(id).exec();
        }
    }
};