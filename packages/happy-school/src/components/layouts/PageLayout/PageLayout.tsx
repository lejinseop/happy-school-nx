import type { FC } from 'react';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';

interface PageLayoutProps {
  title: string;
}

const PageLayout: FC<PageLayoutProps> = ({ children, title }) => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3">{title}</Typography>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};

export default PageLayout;
