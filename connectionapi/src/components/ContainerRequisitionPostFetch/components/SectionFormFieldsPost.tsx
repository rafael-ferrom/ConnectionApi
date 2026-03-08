import { StyledBoxPostFetch } from "../../../style/StyledBoxPostFetch"
import { StyledTextFieldPostFetch } from "../../../style/StyledTextFieldPostFetch"
import type { IinfoFieldsFormProps } from "../../../types"

interface ISectionFormFieldsPostProps{
    infoFields: IinfoFieldsFormProps[]
}

const SectionFormFieldsPost = ({infoFields}:ISectionFormFieldsPostProps) => {
  return (
    <StyledBoxPostFetch>
        {infoFields.map((info) => (
            <StyledTextFieldPostFetch label={info.label} name={info.name} value={info.value} onChange={info.handleChange} fullWidth>

            </StyledTextFieldPostFetch>
        ))}
    </StyledBoxPostFetch>
  )
}

export default SectionFormFieldsPost
