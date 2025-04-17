import { IBoard } from '@/@types/boards'
import ItemLayout from '@/layouts/item-layout'
import { tokens } from '@/theme'
import { configPage } from '@/utils/config-page'
import { Box, Typography, useTheme } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router'

const ItemBoards: FC<{ board: IBoard }> = ({ board }) => {
    const { name, taskCount, id, description } = board

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <ItemLayout>
            <Box mr={2}>
                <Typography
                    variant="h2"
                    textTransform="uppercase"
                    color={colors.accentColor}
                >
                    {name}
                </Typography>
                <Typography variant="h6">{description}</Typography>
                <Typography variant="caption">
                    Количество задач: {taskCount}
                </Typography>
            </Box>
            <Link
                to={configPage.LINK_TO_BOARD_BY_ID + id}
                style={{ color: `${colors.accentColor}` }}
            >
                <Typography noWrap variant="body1">
                    Перейти к проекту
                </Typography>
            </Link>
        </ItemLayout>
    )
}

export default ItemBoards
