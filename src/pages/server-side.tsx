import Head from 'next/head';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { ssrUser, PageUserComp } from '../generated/page';
import { GetServerSideProps } from 'next';
import { withApollo } from '@/utils/withApollo';

const HomePage: PageUserComp = (props) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Typography variant="h3">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Typography>

        <Grid container spacing={2}>
          {props?.data?.user ? (
            <Grid item xs={2}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{props.data.user.email}</Typography>
                  <Typography>{props.data.user.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ) : null}
        </Grid>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return await ssrUser.getServerPage({}, ctx);
};

export default withApollo(ssrUser.withPage(() => ({}))(HomePage));
