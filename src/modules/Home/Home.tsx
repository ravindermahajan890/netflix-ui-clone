import { Box, Button, Card, CardActions, CardContent, CardHeader, Container, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import Logo from '../../components/Logo';

const Home = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount((prevCount) => prevCount + 1);
  const resetCount = () => setCount(0);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Container maxWidth="sm">
        <Card>
          <CardHeader title={<Logo />} />
          <Divider />
          <CardContent>
            <Typography color="lightGrey.main">While our app is getting developed, play with our counter</Typography>
            <Typography>Count is {count}</Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="success" onClick={increaseCount}>
              Increment
            </Button>
            <Button variant="contained" color="accent" onClick={resetCount}>
              Reset the count
            </Button>
          </CardActions>
        </Card>
      </Container>
    </Box>
  );
};

export default Home;
