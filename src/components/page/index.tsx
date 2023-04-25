import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import Header from './Header';

interface Props {
  children: React.ReactNode[] | React.ReactNode
}

const Page: React.FC<Props> = ({ children }: Props) => {
  return (
    <Box>
      <Header></Header>
      <Box>
        {children}
      </Box>
    </Box>
  );
};

Page.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default Page;
