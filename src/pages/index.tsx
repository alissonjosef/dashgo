import Head from 'next/head'
import { Button, Flex, Input, Stack, FormLabel, Box} from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex 
    w='100vw' 
    h='100vh' 
    alignItems='center'
    justifyContent='center'>
      <Flex 
      as='form' 
      w='100%'
      maxWidth={360}
      bg='gray.800'
      p='8'
      borderRadius={8}
      flexDir='column'
      >
        <Stack spacing='4'>
        <Box>
        <FormLabel htmlFor='email'>Email</FormLabel>
        <Input  
        name='email'
        id='email'
        type='email' 
        focusBorderColor='pink.500'
        bgColor='gray.900'
        variant='filled'
        _hover={{
          bgColor: 'gray.900'
        }}
        size='lg'
        
        />
        </Box>
        
        <Box>
          <FormLabel htmlFor='password'>Senha</FormLabel>
          <Input  
          name='password' 
          id='password'
          type='password' 
          mt='2'
          bgColor='gray.900'
          variant='filled'
          _hover={{
            bgColor: 'gray.900'
          }}
          size='lg'
          />
        </Box>
        
        </Stack>
      
        <Button
        size='lg' 
        type='submit' 
        mt='6' colorScheme='pink'  
        focusBorderColor='pink.500'
        
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
