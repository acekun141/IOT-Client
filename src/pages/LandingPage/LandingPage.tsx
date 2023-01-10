import { useFormik } from "formik";
import { Box, Button, Flex, Heading, Img, Input, useBoolean, useToast } from "@chakra-ui/react";
import { signIn } from "../../services/authServices";
import LandingJPG from "../../assets/landingbg.jpg";

const LandingPage = () => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useBoolean();

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    onSubmit: (values) => {
      handleSignin(values)
    }
  })


  const handleSignin = async (values: any) => {
    setIsLoading.on();
    const { username, password } = values;
    const {data, error} = await signIn(username, password);
    if (error) {
      toast({
        title: "Error",
        description: error.error,
        status: "error",
        isClosable: true,
        duration: 5000,
        position: "top-right",
        size: "sm"
      });
    } else {
      localStorage.setItem("accessToken", data.token);
      window.location.reload();
    }
    setIsLoading.off();
  }

  return (
    <Flex minHeight="100vh">
      <Box bgColor="white" width={{ sm: "100%", md: "500px" }} p={{ sm: 10, md: 16 }}>
        <form onSubmit={formik.handleSubmit}>
          <Heading as="h4" size="md" mb="4">Sign in</Heading>
          <Input
            fontSize="sm" size="lg" mb="3" variant="filled" colorScheme="teal"
            placeholder="Username" name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          <Input
            fontSize="sm" size="lg" mb="6" variant="filled" colorScheme="teal"
            type="password" name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <Button
            fontSize="sm" size="lg" width="100%" colorScheme="teal"
            isLoading={isLoading}
            type="submit"
          >
            Login
          </Button>
        </form>
      </Box>
      <Box display={{ sm: "none", md: "block" }} bgColor="gray.200" flex={1} maxHeight="100vh" overflow="hidden">
        <Img src={LandingJPG} />
      </Box>
    </Flex>
  );
}

export default LandingPage;