import React from "react";
import Head from "next/head";
import { Flex, Box, Text, ChakraProps } from "@chakra-ui/react";

export default function Home() {
  const heading = "Unleash your burger cravings at McDonalds!";
  const subHeading = "Experience the best burgers in town with McDonalds!";

  const styles = React.useMemo(() => {
    return require("../public/styles.json");
  }, []);

  return (
    <>
      <Head>
        <title>{styles.name}</title>
      </Head>
      <main>
        <Text>{styles.name}</Text>
        <Flex
          direction="column"
          w="100%"
          h="100%"
          bgColor="gray.50"
          overflow="hidden"
          border="1px solid black"
        >
          <Box position="absolute">
            <Box
              bgColor="white"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              className="bgImg"
              border="1px solid black"
              {...(styles.properties.container as ChakraProps)}
            >
              <Box
                {...styles.properties.logoContainer}
                zIndex={50}
                backgroundColor="gray.400"
                position="absolute"
              ></Box>
              <Box
                {...(styles.properties.textContainer as ChakraProps)}
                zIndex={50}
                position="absolute"
              >
                <Box {...styles.properties.headingContainer} position="static">
                  <Text
                    {...(styles.properties.heading as ChakraProps)}
                    className="inter"
                  >
                    {heading}
                  </Text>
                </Box>
                <Box
                  {...styles.properties.subHeadingContainer}
                  position="static"
                >
                  <Text
                    {...(styles.properties.subHeading as ChakraProps)}
                    className="inter"
                  >
                    {subHeading}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>
      </main>
    </>
  );
}
