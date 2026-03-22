import { Box } from '@mui/material'
import type { IInfosFormDeleteSection } from '../../../types'
import ButtonDelete from './ButtonEdit'
import SectionFormFieldDelte from './SectionFormFieldEdit'

interface IFormFieldDeleteFetchProps{
    handleSubmit: (e: React.FormEvent) => Promise <void>
    userId: number
    email: string
    name: string
    setUserId: (value:number) => void
    setEmail: (value: string) => void
    setName: (value: string) => void
}

const FormFieldDeleteFetch = ({handleSubmit, userId, email,name, setUserId, setEmail, setName}: IFormFieldDeleteFetchProps) => {

    const infosFormDeleteSection: [
  IInfosFormDeleteSection<number>,
  IInfosFormDeleteSection<string>,
  IInfosFormDeleteSection<string>,
] = [
  {
    label: "ID",
    type: "number",
    value: userId,
    setValue: (value) => setUserId(Number(value))
  },
  {
    label: "Name",
    type: "text",
    value: name,
    setValue: setName,
  },
  {
    label: "email",
    type: "email",
    value: email,
    setValue: setEmail,
  },
];
    
  return (
    <Box component="form" onSubmit={handleSubmit}>
            {infosFormDeleteSection.map((inf) => (
                <SectionFormFieldDelte label={inf.label} type={inf.type} value={inf.value} setValue={inf.setValue}/>
            ))}
            <ButtonDelete nameRequisition='PUT'/>
          </Box>
  )
}

export default FormFieldDeleteFetch
