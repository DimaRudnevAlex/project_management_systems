import { Box, Grid, useTheme } from '@mui/material'

import { tokens } from '../../../theme'
import UiSelect from '../../uikit/Select'
import UiTextField from '../../uikit/TextField'

const FilterIssues = () => {
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
                <UiTextField />
            </Grid>
            <Grid
                size={{ xs: 4, sm: 8, md: 8 }}
                display="flex"
                justifyContent={{ xs: 'center', sm: 'center', md: 'end' }}
            >
                <Box width={500} display="flex" gap={2}>
                    <UiSelect text={'Название проекта'} />
                    <UiSelect text={'Статус задачи'} />
                </Box>
            </Grid>
        </Grid>
    )
}

export default FilterIssues
