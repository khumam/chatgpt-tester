import React, { useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { deepPurple, grey } from '@mui/material/colors';
import Complete from './components/complete';
import { Configuration, OpenAIApi } from 'openai';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<string | undefined>('Your result will be displayed here');
  const [isProcessing, setIsProcessing] = useState(false);

  const submit = async (): Promise<void> => {
    if (prompt == null || prompt === '') {
      setResult('Please provide some text!');
      return;
    } else {
      setIsProcessing(true);
      setResult('Generating your answers...');
      const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 500,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      setResult(response.data.choices[0].text);
      setIsProcessing(false);
    }
  }

   const goTo = (route: string) => {
    navigate(route);
  }

  return (
    <Container>
      <Box paddingY='32px'>
        <Typography fontSize='34px' fontWeight={600}>GPT Playground</Typography>
        <Typography paddingTop='8px'>Playground to test the GPT</Typography>
        <Grid container marginTop='16px' spacing={1}>
          <Grid item sx={{ cursor: 'pointer' }} onClick={() => goTo('/')}>
            <Box bgcolor={deepPurple[500]} color='white' border={1} borderColor={grey[300]} borderRadius='5px' paddingX='18px' paddingY='8px'>Complete</Box>
          </Grid>
          <Grid item sx={{ cursor: 'pointer' }} onClick={() => goTo('/chat')}>
            <Box border={1} borderColor={grey[300]} borderRadius='5px' paddingX='18px' paddingY='8px'>Chat</Box>
          </Grid>
          <Grid item sx={{ cursor: 'pointer' }}>
            <Box border={1} borderColor={grey[300]} borderRadius='5px' paddingX='18px' paddingY='8px'>Insert</Box>
          </Grid>
          <Grid item sx={{ cursor: 'pointer' }}>
            <Box border={1} borderColor={grey[300]} borderRadius='5px' paddingX='18px' paddingY='8px'>Edit</Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Complete submit={submit} result={result} setPrompt={setPrompt} isProcessing={isProcessing}></Complete>
      </Box>
    </Container>
  );
}

export default Home;
