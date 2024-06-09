import { Container, Text, VStack, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container 
      centerContent 
      maxW="container.md" 
      height="100vh" 
      display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      alignItems="center" 
      bgGradient="linear(to-r, teal.500, green.500)"
    >
      <VStack spacing={4} textAlign="center">
        <Box 
          p={5} 
          shadow="md" 
          borderWidth="1px" 
          borderRadius="md" 
          bg="white"
        >
          <Text 
            fontSize="4xl" 
            fontWeight="bold" 
            color="teal.500"
          >
            Hello World
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;