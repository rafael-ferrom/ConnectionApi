import { Box } from '@mui/material'
import SectionFormFieldsPost from './SectionFormFieldsPost'
import type { IinfoFieldsFormProps } from '../../../types'
import { StyledButtonPostFetch } from '../../../style/StyledButtonPostFetch'

interface IFormFieldPostFetch {
    handleSubmitPost: (e: React.FormEvent) => void,
    infoFields: IinfoFieldsFormProps[]
}

const FormFieldsPostFetch = ({handleSubmitPost, infoFields}:IFormFieldPostFetch) => {
  return (
    <Box component="form" onSubmit={handleSubmitPost}>
        <SectionFormFieldsPost infoFields={infoFields}></SectionFormFieldsPost>
        <StyledButtonPostFetch
                  type="submit"
                  variant="contained"
                >{"POST"}</StyledButtonPostFetch>
    </Box>
  )
}

export default FormFieldsPostFetch
