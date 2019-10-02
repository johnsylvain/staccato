import * as React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Flex, Box } from './box';

type ShareButtonProps = {
  links: string[];
};

export const ShareButton: React.FC<ShareButtonProps> = ({ links }) => {
  return (
    <Flex>
      {links.map(link => (
        <Box ml={2}>
          <SocialIcon
            url={link}
            target="_blank"
            style={{ width: 35, height: 35 }}
          />
        </Box>
      ))}
    </Flex>
  );
};
