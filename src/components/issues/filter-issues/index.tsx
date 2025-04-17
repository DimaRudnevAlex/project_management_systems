import { IFilterIssues } from '@/@types/issues'
import UiSelect from '@/components/uikit/Select'
import UiTextField from '@/components/uikit/TextField'
import { tokens } from '@/theme'
import { issueStatus } from '@/utils/constants'
import { IssuesStatusList } from '@/utils/helper'
import { Box, Grid, SelectChangeEvent, useTheme } from '@mui/material'
import { FC, useMemo, useState } from 'react'

const FilterIssues: FC<IFilterIssues> = ({ boardNameList }) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const ArrayIssuesStatus = useMemo(() => IssuesStatusList(issueStatus), [])

    const [status, setStatus] = useState<issueStatus>('')
    const handleChangeStatus = (event: SelectChangeEvent) => {
        setStatus(event.target.value as issueStatus)
    }
    const [boardName, setBoardName] = useState('')
    const handleChangeBoardName = (event: SelectChangeEvent) => {
        setBoardName(event.target.value)
    }
    // console.log('STATUS', status)
    // console.log('BOARDNAME', boardName)
    return (
        <Grid
            container
            mt={3}
            display="flex"
            alignItems="center"
            bgcolor={colors.gray.DEFAULT}
            borderRadius={2}
            paddingBlock={{ xs: 1, sm: 2, md: 4 }}
            paddingInline={{ xs: 1 }}
            spacing={{ xs: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
        >
            <Grid
                size={{ xs: 4, sm: 8, md: 4 }}
                display="flex"
                justifyContent={{ xs: 'center', sm: 'center', md: 'start' }}
            >
                <UiTextField />
            </Grid>
            <Grid
                size={{ xs: 4, sm: 8, md: 8 }}
                display="flex"
                justifyContent={{ xs: 'center', sm: 'center', md: 'end' }}
            >
                <Box width={500} display="flex" gap={2}>
                    <UiSelect
                        text={'Название проекта'}
                        value={boardName}
                        onChange={handleChangeBoardName}
                        ArrayMenuItems={boardNameList}
                    />
                    <UiSelect
                        value={status}
                        onChange={handleChangeStatus}
                        text={'Статус задачи'}
                        ArrayMenuItems={ArrayIssuesStatus}
                    />
                </Box>
            </Grid>
        </Grid>
    )
}

export default FilterIssues
