import { IUiSelect } from '@/@types/uikit'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { FC } from 'react'

const UiSelect: FC<IUiSelect> = ({ text, ArrayMenuItems, value, onChange }) => {
    return (
        <FormControl fullWidth>
            <InputLabel color="secondary">{text}</InputLabel>
            <Select
                value={value}
                label={text}
                color="secondary"
                variant="outlined"
                onChange={onChange}
            >
                {ArrayMenuItems.map(({ id, value }) => (
                    <MenuItem value={id}>{value}</MenuItem>
                ))}
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
            </Select>
        </FormControl>
    )
}

export default UiSelect
