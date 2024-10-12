import React from 'react';
import MuiTooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/InfoOutlined';

export default function Tooltip() {
  return (
    <>
      <MuiTooltip
        placement="top"
        title={
          <Typography sx={{ color: 'white', fontSize: '2vh' }}>
            This app is hosted with Heroku and may take 5-10 seconds to load in
            the browser.
            <br />
            <br />
            Additionally, to reduce costs, the server and database are not
            currently running.
          </Typography>
        }
      >
        <InfoIcon
          style={{
            fontSize: '2.2vh',
            marginLeft: '1%',
          }}
        />
      </MuiTooltip>
    </>
  );
}
