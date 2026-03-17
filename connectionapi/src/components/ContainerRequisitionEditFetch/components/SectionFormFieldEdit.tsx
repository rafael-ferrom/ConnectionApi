import { Box, TextField } from '@mui/material'

interface ISectionFormFieldDeleteProps{
    type: string
    value: string | number
    label: string
    setValue: (value: string) => void;
}

const SectionFormFieldDelte = ({type, value, label, setValue}:ISectionFormFieldDeleteProps) => {
  return (
    <Box>
        <TextField type={type} value={value} label={label} onChange={(e) => setValue((e.target.value))}></TextField>
    </Box>
  )
}

export default SectionFormFieldDelte
