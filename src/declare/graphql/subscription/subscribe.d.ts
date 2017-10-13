import { ExecutionResult } from '../execution/execute';
import { DocumentNode } from '../language/ast';
import { GraphQLFieldResolver } from '../type/definition';
import { GraphQLSchema } from '../type/schema';

export function subscribe(
    schema: GraphQLSchema,
    document: DocumentNode,
    rootValue?: any,
    contextValue?: any,
    variableValues?: {
        [key: string]: any;
    },
    operationName?: string,
    fieldResolver?: GraphQLFieldResolver<any, any>,
    subscribeFieldResolver?: GraphQLFieldResolver<any, any>,
// ): AsyncIterator<ExecutionResult>;
): any;

export function createSourceEventStream(
    schema: GraphQLSchema,
    document: DocumentNode,
    rootValue?: any,
    contextValue?: any,
    variableValues?: {
        [key: string]: any;
    },
    operationName?: string,
    fieldResolver?: GraphQLFieldResolver<any, any>,
// ): AsyncIterable<any>;
): any;
