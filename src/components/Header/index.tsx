import { Flex } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { Notification } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      px="6"
      align="center"
    >
      <Logo />
      <SearchBox />

      <Flex align="center" ml="auto">
        <Notification />

        <Profile />
      </Flex>
    </Flex>
  );
};

export default Header;
