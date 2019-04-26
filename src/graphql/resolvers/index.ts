import User from "./user";
import { mergeResolvers } from "merge-graphql-schemas";

const resolvers = [User];

export default mergeResolvers(resolvers);
