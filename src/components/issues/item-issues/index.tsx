import { IIssue } from '@/@types/issues'
import ItemLayout from '@/layouts/item-layout'
import { tokens } from '@/theme'
import { configPage } from '@/utils/config-page'
import { Avatar, Box, Typography, useTheme } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router'

const ItemIssues: FC<{ issue: IIssue }> = ({ issue }) => {
    const {
        title,
        priority,
        status,
        boardId,
        assignee: { avatarUrl, fullName },
    } = issue
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return (
        <ItemLayout>
            <Box display="flex" alignItems="center" gap={2}>
                <Avatar alt={fullName} src={avatarUrl} title={fullName} />
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
        </ItemLayout>
    )
}

export default ItemIssues
