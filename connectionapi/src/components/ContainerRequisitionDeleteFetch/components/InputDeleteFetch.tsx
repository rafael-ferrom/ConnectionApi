import { TextField } from "@mui/material";

interface IInputDeleteFetchProps{
    userId: number
    setUserId: (value: number) => void
}

const InputDeleteFetch = ({userId, setUserId}:IInputDeleteFetchProps) => {
  return (
    <TextField
      type="number"
      value={userId}
      onChange={(e) => setUserId(Number(e.target.value))}
      label="ID do usuário"
      sx={{ margin: "1rem" }}
    ></TextField>
  );
};

export default InputDeleteFetch;
