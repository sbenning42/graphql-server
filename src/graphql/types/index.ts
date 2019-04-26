
import { mergeTypes } from "merge-graphql-schemas";
import UserQueries from "./user";

const typeDefs = [UserQueries /*, Queries2, Queries3, ... */];

export default mergeTypes(typeDefs, { all: true });
