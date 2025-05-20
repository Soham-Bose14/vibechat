import React from "react";
import {
     Container,
     Box, 
     Text, 
     Tab,
     TabList,
     TabPanel,
     TabPanels,
     Tabs, } from "@chakra-ui/react";

const Home = () => {
    return <Container maxW='xl' centerContent>
        <Box d="flex"
            justifyContent="center"
            p={3}
            bg={"white"}
            w="100%"
            m="40px 0 15px 0"
            borderRadius="1g"
            borderWidth="1px"
        >
        <Text fontSize='3xl' fontFamily='Work sans' color='green'>VIBECHAT: Match your vibe</Text>
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="1g" borderWidth="1px">
            <Tabs variant="soft-rounded" colorScheme="red">
                <TabList>
                    <Tab>Login</Tab>
                    <Tab>Sign Up</Tab>
                </TabList>
            </Tabs>
        </Box>
    </Container>
};

export default Home;