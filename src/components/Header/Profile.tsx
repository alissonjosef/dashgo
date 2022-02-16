import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align='center'>
          <Box mr='4' textAlign='right'>
            <Text>Alisson Jose</Text>
            <Text color='gray.300' fontSize='small'>
              alissonjosef@gmail.com
            </Text>
          </Box>

          <Avatar size='md' name='Alisso Silva' src='https://github.com/alissonjosef.png' />

        </Flex>
    )
}