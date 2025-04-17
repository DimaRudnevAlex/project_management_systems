import { IIssue } from '@/@types/issues'
import { tokens } from '@/theme'
import { configPage } from '@/utils/config-page'
import { Avatar, Box, Grid, Typography, useTheme } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router'

const ItemIssues: FC<{ issue: IIssue }> = ({ issue }) => {
    const {
        title,
        priority,
        status,
        boardId,
        assignee: { avatarUrl },
    } = issue
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
                <Avatar alt="Remy Sharp" src={avatarUrl} />
                <Box>
                    <Typography variant="h3">{title}</Typography>
                    <Typography variant="body2">
                        Приоретет: {priority} | Статус: {status}
                    </Typography>
                </Box>
            </Box>
            <Link
                to={configPage.LINK_TO_BOARD_BY_ID + boardId}
                style={{ color: `${colors.accentColor}` }}
            >
                <Typography noWrap variant="body1">
                    Перейти к проекту
                </Typography>
            </Link>
        </Grid>
    )
}

export default ItemIssues
