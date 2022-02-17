import Head from "next/head";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../components/Form/Input";

type SignInformDara = {
  email: string
  password: string
}

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm();

  const handleSignIn: SubmitHandler<SignInformDara>  = async (values) =>{
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log("🚀 ~ values", values);
    
  }
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail"
            {...register("email", { required: true })}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            {...register("password", { required: true })}
          />
        </Stack>

        <Button
          size="lg"
          type="submit"
          mt="6"
          colorScheme="pink"
          focusBorderColor="pink.500"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
