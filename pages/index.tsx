import Head from "next/head";
import { Text, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Curiosity Rover</title>
        <meta
          name="description"
          content="Curiosity rover, read widely, try new things."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Stack spacing={3}>
          <Text fontFamily="montserrat" fontSize="6xl">
            (6xl) In love with React & Next
          </Text>
          <Text fontFamily="chivo" fontSize="5xl">
            (5xl) In love with React & Next
          </Text>
          <Text
            bgGradient="gradient-1"
            bgClip={"text"}
            fontWeight="extrabold"
            fontSize="4xl"
          >
            (4xl) In love with React & Next
          </Text>
          <Text fontSize="3xl">(3xl) In love with React & Next</Text>
          <Text fontSize="2xl">(2xl) In love with React & Next</Text>
          <Text fontSize="xl">(xl) In love with React & Next</Text>
          <Text fontSize="lg">(lg) In love with React & Next</Text>
          <Text fontSize="md">(md) In love with React & Next</Text>
          <Text fontSize="sm">(sm) In love with React & Next</Text>
          <Text fontSize="xs">(xs) In love with React & Next</Text>
        </Stack>
      </main>
    </>
  );
}
