import { IFilterIssues } from '@/@types/issues'
import UiSelect from '@/components/uikit/Select'
import UiTextField from '@/components/uikit/TextField'
import { selectFilterOptions } from '@/store/features/isssues/isssuesSlice.ts'
import { tokens } from '@/theme'
import { issueStatus } from '@/utils/constants'
import { issuesStatusList } from '@/utils/helper'
import { useAppSelector, useChangeFilterOption } from '@/utils/hooks'
import { Box, Grid, useTheme } from '@mui/material'
import { FC, useMemo } from 'react'

const FilterIssues: FC<IFilterIssues> = ({ boardNameList }) => {
    const { handleChangeSearch, handleChangeStatus, handleChangeBoardName } =
        useChangeFilterOption()

    const { filterByBoardId, filterByStatus, search } =
        useAppSelector(selectFilterOptions)

    const ArrayIssuesStatus = useMemo(() => issuesStatusList(issueStatus), [])

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

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
                <UiTextField value={search} onChange={handleChangeSearch} />
            </Grid>
            <Grid
                size={{ xs: 4, sm: 8, md: 8 }}
                display="flex"
                justifyContent={{ xs: 'center', sm: 'center', md: 'end' }}
            >
                <Box width={500} display="flex" gap={2}>
                    <UiSelect
                        text={'Название проекта'}
                        value={filterByBoardId}
                        onChange={handleChangeBoardName}
                        ArrayMenuItems={boardNameList}
                    />
                    <UiSelect
                        value={filterByStatus}
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
