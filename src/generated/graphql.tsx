// THIS FILE IS GENERATED; DO NOT EDIT
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateUserDto = {
  age: Scalars['Float'];
  email: Scalars['String'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: UserDto;
};

export type MutationCreateUserArgs = {
  createUserDto: CreateUserDto;
};

export type Query = {
  __typename?: 'Query';
  user: UserDto;
  users: Array<UserDto>;
};

export type QueryUserArgs = {
  id: Scalars['String'];
};

export type UserDto = {
  __typename?: 'UserDTO';
  age?: Maybe<Scalars['Float']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type UserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;

export type UserQuery = {
  __typename?: 'Query';
  user: { __typename?: 'UserDTO'; id: string; name: string; email: string };
};

export const UserDocument = gql`
  query User($userId: String!) {
    user(id: $userId) {
      id
      name
      email
    }
  }
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserQuery(
  baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export function useUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    options
  );
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
