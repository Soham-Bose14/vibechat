import React, { useState } from "react";
import { InputRightElement, VStack } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { InputGroup } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignUp = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [pic, setPic] = useState();
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const history = useHistory();

    const handleClick = ()=>{
        setShow(!show);
    }
    const postDetails = (pics) => {
        setLoading(true);
        if(pics===undefined){
            toast({
                title: "Please select an image!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            return;
        }

        if(pics.type==="image/jpeg" || pics.type==="image/png"){
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "chat-app");
            data.append("cloud_name", "SohamBose");
            fetch("", {
                method: "post",
                body: "data",
            }).then((res)=>res.json())
            .then((data) => {
                setPic(data.url.toString());
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
        }
        else{
            toast({
                title: "Please select an image!",
                status: "warning",
                duration: 3000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            return; 
        }
    };

    const submitHandler = async() => {
        setLoading(true);

        if(!name || !email || !password || !confirmPassword){
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
        if(password !== confirmPassword){
            toast({
                title: "Passwords do not match",
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
            const { data } = await axios.post("/api/user", {name, email, password, pic}, config);           //Check this path once

            toast({
                title: "Registration Successful",
                status: "success",
                duration: 3000,
                isClosable: true,
                position: "bottom",
            });

            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false);
            history.push()
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
            <Input placeholder = 'Enter your email address' onChange={(e)=>setEmail(e.target.value)} />
        </FormControl>

        <FormControl id='password' isRequired>
            <FormLabel>Password:</FormLabel>
            <InputGroup>
                <Input type = {show?"text":"password"} placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>

        <FormControl id='confirmPassword' isRequired>
            <FormLabel>Password:</FormLabel>
            <InputGroup>
                <Input type = {show?"text":"password"} placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} />
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>

        <FormControl id="pic">
            <FormLabel>Upload your profile picture:</FormLabel>
            <Input type="file" p={1.5} accept="image/*" onChange={(e) => postDetails(e.target.files[0])} />
        </FormControl>

        <Button colorScheme="red" width="100%" style={{ marginTop:15 }} onClick={submitHandler} isLoading = {loading}>
            Sign Up
        </Button>
        
    </VStack>
    )
};

export default SignUp;