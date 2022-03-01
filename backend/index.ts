import "reflect-metadata";
import path from 'path';
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { UserResolver } from "./src/resolvers/UserResolver";

async function main() {
    const schema = await buildSchema({
        //resolvers no GQL basicamente são as rotas. No GQL temos apenas uma rota. Quem lida com a diferenciação de qual informação eu quero buscar no backend são os resolvers.
        resolvers: [
            UserResolver,
        ], 
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'), //onde quero salvar o arquivo de schema do SQL
    })

    const server = new ApolloServer({
        schema,
    })

    const { url } = await server.listen()

    console.log(`Server running on ${url}`);
}

main();