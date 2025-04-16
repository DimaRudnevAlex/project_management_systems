import { Avatar, Box, Grid, Typography, useTheme } from '@mui/material'
import { Link } from 'react-router'

import { tokens } from '../../../theme'

const ItemIssues = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <Grid
            size={1}
            mt={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            bgcolor={colors.gray.DEFAULT}
            borderRadius={2}
            paddingBlock={{ xs: 1, sm: 2, md: 4 }}
            paddingInline={1}
        >
            <Box display="flex" alignItems="center" gap={2}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Typography variant="h3">Название задачи #1</Typography>
            </Box>
            <Link to={'/board/321'} style={{ color: `${colors.accentColor}` }}>
                Перейти к проекту
            </Link>
        </Grid>
    )
}

export default ItemIssues
