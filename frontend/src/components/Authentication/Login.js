import React, { useState } from "react";
import SignUp from "./SignUp";
import { InputRightElement, VStack } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

import { useHistory } from "react-router-dom";

const Login = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();
    const [loading, setLoading] = useState();
    
    const toast = useToast();
    const history = useHistory();

    const handleClick = ()=>{
        setShow(!show);
    }
    const postDetails = (pics) => {};

    const submitHandler = async() => {
        if(!email || !password){
            toast({
                title: "Please fill all the fields",
                status: "warning",
                duration: 3000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            return;
        }
        try{
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const { data } = await axios.post("/api/user/login", {name, email, password, pic}, config);           //Check this path once

            toast({
                title: "Registration Successful",
                status: "success",
                duration: 3000,
                isClosable: true,
                position: "bottom",
            });

            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false);
            history.push("/chats");
        }catch(error){
            toast({
                title: "Error Occured!",
                description: error.response.data.message,
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
        }
    };

    return(<VStack spacing="3px">
            <FormControl id='firstName' isRequired>
                <FormLabel>Name:</FormLabel>
                <Input placeholder = 'Enter your name' onChange={(e)=>setName(e.target.value)} />
            </FormControl>
    
            <FormControl id='email' isRequired>
                <FormLabel>Email:</FormLabel>
                <Input placeholder = 'Enter your email address' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </FormControl>
    
            <FormControl id='password' isRequired>
                <FormLabel>Password:</FormLabel>
                <InputGroup>
                    <Input type = {show?"text":"password"} placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
    
            <Button colorScheme="red" width="100%" style={{ marginTop:15 }} onClick={submitHandler} isLoading={loading}>
                Login
            </Button>
            <Button variant="Solid" colorscheme="green" width="100%" color={"blue"} bgcolor="green" onClick={()=>{
                setEmail("guest@example.com");
                setPassword("912873465");
            }}>
                Get guest user credentials
            </Button>
            
        </VStack>
    )
};

export default Login;