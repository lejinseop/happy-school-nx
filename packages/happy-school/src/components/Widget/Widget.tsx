import type { FC } from 'react';
import { Paper } from '@mui/material';

const Widget: FC<{ type: 'host' | 'remote' }> = ({ children, type }) => {
  const isHost = type === 'host';
  return (
    <Paper
      sx={{ padding: '20px', border: `4px solid ${isHost ? 'blue' : 'green'}` }}
    >
      {children}
    </Paper>
  );
};

export default Widget;
