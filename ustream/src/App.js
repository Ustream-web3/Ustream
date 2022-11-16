import { Box, Flex, Image, Input, Text } from "@chakra-ui/react";
import { Spider, Bat, Spider2, Upload, Stream, Down, Ad } from "./assets";

function App() {
  const data = [
    {
      id: 1,
      image: Spider,
    },
    {
      id: 2,
      image: Bat,
    },
    {
      id: 3,
      image: Spider2,
    },
  ];

  const data1 = [
    {
      id: 1,
      image: Upload,
      text: "Upload your script or videos for voting and reviews",
    },
    {
      id: 2,
      image: Stream,
      text: "Stand a chance to have your script selected by top movie producers",
    },
    {
      id: 3,
      image: Down,
      text: "Have your skits featured in the Thursday Night Cinema",
    },
  ];
  return (
    <Box
      style={{
        backgroundImage: "linear-gradient(to right, #9796F0 , #FBC7D4)",
      }}
      minH="100vh"
      color="black"
    >
      <Box w="97%" mx="auto">
        <>
          <Box width="65%" mx="auto" textAlign="center">
            <Text
              as={"h1"}
              fontSize={["15px", "15px", "25px", "25px"]}
              fontWeight="600"
            >
              Welcome to Ustream
            </Text>

            <Text as="p">Home to the best movies on Box Office</Text>
          </Box>

          <Box
            border="1px solid black"
            borderRadius="9px"
            w="40%"
            mx="auto"
            mt="19px"
          >
            <Input type="text" placeholder="search" bg="white" color="black" />
          </Box>
        </>

        <Box mt="40px">
          <Text
            textDecoration="underline"
            fontSize="19px"
            textAlign="center"
            fontWeight="500"
          >
            Latest Movies
          </Text>

          <Flex mt="10px">
            {data.map((item) => (
              <Box key={item.id}>
                <Image src={item.image} alt="movie" />
              </Box>
            ))}
          </Flex>
        </Box>

        <Box mt="40px">
          <Text
            textDecoration="underline"
            fontSize="19px"
            textAlign="center"
            fontWeight="500"
          >
            Vote for the thurday night cinema movie of the week{" "}
          </Text>

          <Flex mt="10px">
            {data.map((item) => (
              <Box key={item.id}>
                <Image src={item.image} alt="movie" />
              </Box>
            ))}
          </Flex>
        </Box>

        <Box mt="40px">
          <Text
            textDecoration="underline"
            fontSize="19px"
            textAlign="center"
            fontWeight="500"
          >
            Become a Ustream community member{" "}
          </Text>

          <Flex mt="20px" justifyContent="space-between">
            {data1.map((item) => (
              <Flex flexDir="column" alignItems="center" key={item.id} w="30%">
                <Image src={item.image} alt="movie" />

                <Text>{item.text}</Text>
              </Flex>
            ))}
          </Flex>
        </Box>

        <Box>
          <Image src={Ad} alt="ad" mt="30px" />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
