import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { FC } from 'react'

import { IUiSelect } from '../../../@types/uikit'

const UiSelect: FC<IUiSelect> = ({ text }) => {
    return (
        <FormControl fullWidth>
            <InputLabel color="secondary">{text}</InputLabel>
            <Select
                value={321}
                label={text}
                color="secondary"
                variant="outlined"
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    )
}

export default UiSelect
