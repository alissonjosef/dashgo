import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  VStack,
  Text,
} from "@chakra-ui/react";
import Header from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">
            Criar Usuario
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Box>
                <Text>Nome completo</Text>
                <Input name="name" label="Nome completo" />
              </Box>

              <Box>
                <Text>E-mail</Text>
                <Input name="email" type="email" label="E-mail" />
              </Box>
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Box>
                <Text>Senha</Text>
              <Input name="password" type="password" label="Senha" />
                </Box>

                <Box>
                <Text>Confirmação da senha</Text>
              <Input
                name="password_confirmation"
                type="password"
                label="Confimação da senha"
              />
                </Box>
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}