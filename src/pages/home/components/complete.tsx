import { Box, Button, TextField } from '@mui/material';
import { grey } from '@mui/material/colors';
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  result: string|undefined
  setPrompt: Dispatch<SetStateAction<string>>
  submit: () => void
  isProcessing: boolean
}

const Complete: React.FC<Props> = ({
  setPrompt,
  result,
  submit,
  isProcessing
}) => {
  const handlePromptChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = () => {
    submit();
  }

  return (
    <Box>
      <TextField
        id='prompt-field'
        size='medium'
        variant='filled'
        multiline
        rows={5}
        fullWidth
        placeholder='This field using text-davinci-03'
        onChange={handlePromptChange}></TextField>
      <Box height='14px'></Box>
      <Button
        disabled={isProcessing}
        sx={{ textTransform: 'none' }}
        variant='contained'
        color='primary'
        onClick={handleSubmit}>Generate response</Button>
      <Box marginTop='32px' width='100%' height='auto' border={1} padding='8px' borderColor={grey[300]}>
        <ReactMarkdown>{result ?? 'Failed to generate your answers'}</ReactMarkdown>
      </Box>
    </Box>
  );
}

export default Complete;