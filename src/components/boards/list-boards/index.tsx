import ItemBoards from '@/components/boards/item-boards'
import ListLayout from '@/layouts/list-layout'
import { useGetAllBoardsQuery } from '@/store/services/boardsApi'

const ListBoard = () => {
    const { data, isLoading, isError } = useGetAllBoardsQuery()

    return (
        <ListLayout isLoading={isLoading} isError={isError}>
            {data?.data.map((board) => (
                <ItemBoards board={board} key={board.id} />
            ))}
        </ListLayout>
    )
}

export default ListBoard
