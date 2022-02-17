import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean
}

export function Profile({showProfileData}: ProfileProps) {
    return (
        <Flex align='center'>
          {showProfileData && (
            <Box mr='4' textAlign='right'>
            <Text>Alisson Jose</Text>
            <Text color='gray.300' fontSize='small'>
              alissonjosef@gmail.com
            </Text>
          </Box>
          )}
          

          <Avatar size='md' name='Alisso Silva' src='https://github.com/alissonjosef.png' />

        </Flex>
    )
}