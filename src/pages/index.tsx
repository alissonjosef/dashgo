import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type SignInformData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatorio").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
})

export default function SignIn() {
  const { register, handleSubmit, formState, formState: { errors } } = useForm({
    resolver: yupResolver(signInFormSchema)
  });
 

  const handleSignIn: SubmitHandler<SignInformData>  = async (values) =>{
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
            error={errors.email}
            {...register("email", { required: true })}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            error={errors.password}
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
