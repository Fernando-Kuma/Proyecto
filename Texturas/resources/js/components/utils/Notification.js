import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';


const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <Container component="main" maxWidth="sm">
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
          {message} — <strong>check it out!  </strong>
      </Alert>
      </Container>
  )
}

export default Notification