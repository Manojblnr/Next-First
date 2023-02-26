import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "components/Navbar";
import Link from "next/link";
import { Box, Chip, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next | Home</title>
        <meta name='keyword' content='home'/>
      </Head>
      <Box sx={{marginBottom:10, marginTop:10}}>
        <Stack alignItems='center' justifyContent='center'>
          <Image src="/1.png" width={400} height={150} marginTop={20} />
          <Stack alignSelf='center' spacing={5} mt={1} mb={10}>
            <Typography variant="h3">Introduction</Typography>
            <Typography color="gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              autem ratione laborum. Voluptatem quisquam architecto pariatur
              officiis aliquid provident maxime iste non nobis in temporibus
              fuga voluptatum, ducimus quasi eum?
            </Typography>
          </Stack>
          <Link href="/nested"><Chip label='Go to users'/></Link>
        </Stack>
      </Box>
    </>
  );
}
