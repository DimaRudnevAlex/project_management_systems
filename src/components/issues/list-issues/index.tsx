import { IListIssues } from '@/@types/issues'
import ItemIssues from '@/components/issues/item-issues'
import SkeletonIssues from '@/components/issues/skeleton-issues'
import { Grid } from '@mui/material'
import { FC } from 'react'

const ListIssues: FC<IListIssues> = ({ isLoading, data }) => {
    return (
        <Grid container columns={1}>
            {isLoading ? (
                <SkeletonIssues />
            ) : (
                data?.map((issue) => (
                    <ItemIssues issue={issue} key={issue.id} />
                ))
            )}
        </Grid>
    )
}

export default ListIssues
