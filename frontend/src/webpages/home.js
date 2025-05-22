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

import Login from "../components/Authentication/Login";

import SignUp from "../components/Authentication/SignUp";

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
        <Box bg="beige" w="100%" p={4} borderRadius="1g" color="black" borderWidth="1px">
            <Tabs variant="soft-rounded" colorScheme="red">
                <TabList mb="1em">
                    <Tab width="50%">Login</Tab>
                    <Tab width="50%">Sign Up</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Login />
                    </TabPanel>
                    <TabPanel>
                        <SignUp />
                    </TabPanel>
                </TabPanels>

            </Tabs>
        </Box>
    </Container>
};

export default Home;