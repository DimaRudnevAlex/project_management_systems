import { IListIssues } from '@/@types/issues'
import ItemIssues from '@/components/issues/item-issues'
import ListLayout from '@/layouts/list-layout'
import { FC } from 'react'

const ListIssues: FC<IListIssues> = ({ isLoading, data, isError }) => {
    return (
        <ListLayout isLoading={isLoading} isError={isError}>
            {data?.map((issue) => <ItemIssues issue={issue} key={issue.id} />)}
        </ListLayout>
    )
}

export default ListIssues
