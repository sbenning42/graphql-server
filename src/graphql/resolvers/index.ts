import UserResolver from "./user";
import { mergeResolvers } from "merge-graphql-schemas";

const resolvers = [UserResolver /*, Resolver2, Resolver3, ... */];

export default mergeResolvers(resolvers);
