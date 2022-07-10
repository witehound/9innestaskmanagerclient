import prisma from "../lib/prisma";

const resolvers = () => {
    Query: {
        tasks : async(_parent, args, ctx) => await ctx.prisma.task.findMany()
    }
}

export default resolvers