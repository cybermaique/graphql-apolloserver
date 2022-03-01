import { User } from './../models/User';
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import crypto from 'crypto'

//query: buscar dados (sempre quando fvamos buscar dados no backend, realizamos uma query)
//mutation: criar, alterar ou deletar 

@Resolver()
export class UserResolver{
    private data: User[] = [];
    
    //Dentro do GQL quando queremos retornar uma lista de informações, colocamos [Class] e não Class[] com é no TS.
    @Query(() => [User])
    async users() {
        return this.data;
    }

    @Mutation(() => User) //dps de realizar a mutation (criar usuario), vai retornar o usuario pra requisição que chamou ela
    async createUser(
        @Arg('name') name: string
    ) {
        const user = { id: crypto.randomUUID() , name }

        this.data.push(user)

        return user;
    }
}