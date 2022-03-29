// THIS FILE IS GENERATED; DO NOT EDIT
import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient, ApolloClientContext } from '@/utils/withApollo';
export async function getServerPageUser(
  options: Omit<Apollo.QueryOptions<Types.UserQueryVariables>, 'query'>,
  ctx: ApolloClientContext
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.UserQuery>({
    ...options,
    query: Operations.UserDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export const useUser = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<Types.UserQuery, Types.UserQueryVariables>
) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.UserDocument, options);
};
export type PageUserComp = React.FC<{
  data?: Types.UserQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageUser =
  (
    optionsFunc?: (
      router: NextRouter
    ) => QueryHookOptions<Types.UserQuery, Types.UserQueryVariables>
  ) =>
  (WrappedComponent: PageUserComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.UserDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrUser = {
  getServerPage: getServerPageUser,
  withPage: withPageUser,
  usePage: useUser,
};
