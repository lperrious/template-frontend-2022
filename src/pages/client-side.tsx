import Head from 'next/head';
import User from '@/components/User/User';
import { Typography } from '@mui/material';
import { PageUserComp } from 'generated/page';
import { withApollo } from '@/utils/withApollo';

const ClientSide: PageUserComp = () => {
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

        <User />
      </main>
    </div>
  );
};

export default withApollo(ClientSide);
