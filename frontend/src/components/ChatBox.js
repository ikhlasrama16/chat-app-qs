import { Box } from "@chakra-ui/react";
import React from "react";
import { ChatState } from "../context/ChatProvider";
import SingleChat from "./SingleChat";

const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={{ base: 2, md: 3 }}
      bg="beige"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
      h={{ base: "100vh", md: "auto" }} // Menyesuaikan tinggi untuk mobile
      overflowY="auto" // Agar konten bisa di-scroll jika melebihi tinggi layar
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default ChatBox;
