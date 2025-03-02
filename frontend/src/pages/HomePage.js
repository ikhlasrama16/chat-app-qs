import { React, useEffect } from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import { useHistory } from "react-router";

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        bg={"beige"}
        borderRadius="lg"
        p={3}
        w={"100%"}
        justifyContent="center"
        borderWidth={"1px"}
        margin={"40px 0 15px 0"}
      >
        <Text
          color="black"
          fontSize={"4xl"}
          fontFamily={"poppins"}
          align={"center"}
        >
          Chat App Name
        </Text>
      </Box>
      <Box w={"100%"} borderRadius={"lg"} bg={"beige"} p={"3"}>
        <Tabs variant="soft-rounded" colorScheme="teal">
          <TabList mb={"1em"}>
            <Tab w={"50%"}>Login</Tab>
            <Tab w={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
