import Head from 'next/head';
import { Container } from '@mui/material';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div >
      <Head>
        <title>E-commerce Website</title>
        <meta name="description" content="E-commerce website built with Next.js and Node.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Container className='p-0 m-0' style={{maxWidth:"100%"}}>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
