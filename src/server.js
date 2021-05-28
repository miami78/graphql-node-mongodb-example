const { GraphQLServer } = require("graphql-yoga");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const resolvers = require("./resolvers");
const { typeDefs } = require("./typeDefs");

const server = new GraphQLServer({
    typeDefs,
    resolvers,
});

server
    .start(
        {
            port: process.env.PORT || 8080,
            endpoint: "/graphql",
            playground: process.env.NODE_ENV === "production" ? false : "/playground",

        },
        async ({ port, playground }) => {
            const app = server.express;
            app.use(bodyParser.json());

            mongoose.connect(
                process.env.DB_URL,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false,
                    useCreateIndex: true,
                },
                (err) => {
                    if(err) console.log(`Mongoose default connection error: ${err}`);

                    if (playground) {
                        console.log(
                            "\x1b[36m%s\x1b[0m",
                            `Explore the api -> http://127.0.0.1:${port}${playground}`
                          );
                    }
                }
            )
        }
    )