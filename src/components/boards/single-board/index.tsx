import DragOnDropBoard from '@/components/boards/drag-on-drop-board'
import {
    useGetAllBoardsQuery,
    useGetBoardByIdQuery,
} from '@/store/services/boardsApi'
import { tokens } from '@/theme'
import { Grid, Typography, useTheme } from '@mui/material'
import { useMemo } from 'react'
import { useParams } from 'react-router'

const SingleBoard = () => {
    const { id } = useParams()
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const { data: SingleBoardData, isLoading: SingleBoardsLoading } =
        useGetBoardByIdQuery(id!)
    //TODO из-за того что  /boards/{boardId} не возвращает boardName приходится искать по id во всех boards
    const { data: AllBoardsData, isLoading: AllBoardsLoading } =
        useGetAllBoardsQuery()

    const boardProperty = useMemo(
        () =>
            AllBoardsData?.data.find((board) => String(board.id) === id!) ?? {
                name: '',
                taskCount: '',
                description: '',
            },
        [id, AllBoardsData],
    )

    if (SingleBoardsLoading || AllBoardsLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <Grid
                size={1}
                mt={2}
                bgcolor={colors.gray.DEFAULT}
                borderRadius={2}
                paddingBlock={{ xs: 1, sm: 1, md: 2 }}
                paddingInline={1}
            >
                <Typography variant="h2" textTransform="uppercase">
                    {boardProperty.name}
                </Typography>
                <Typography variant="h6">
                    {boardProperty.description}
                </Typography>
                <Typography variant="body1">
                    Количество задач: {boardProperty.taskCount}
                </Typography>
            </Grid>
            <DragOnDropBoard data={SingleBoardData!.data} boardId={+id!} />
            <Grid size={1} paddingInline={1}></Grid>
        </>
    )
}

export default SingleBoard
