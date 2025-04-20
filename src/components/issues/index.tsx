import { useAppSelector } from '@/@types/store'
import FilterIssues from '@/components/issues/filter-issues'
import ListIssues from '@/components/issues/list-issues'
import { selectIssuesByFilter } from '@/store/features/isssues/isssuesSlice.ts'
import { useGetAllIssuesQuery } from '@/store/services/issuesApi'
import { uniqueArrayBoardsById } from '@/utils/helper'
import { useMemo } from 'react'

const IssuesRoot = () => {
    const { data, isLoading, isError } = useGetAllIssuesQuery(undefined, {
        refetchOnMountOrArgChange: true,
    })
    //TODO Необходимо, когда происходит updateStatus в drag. Скорее всего можно в RTK Query в методе onQueryStarted изменить кешированные данные
    // TODO вынести в RTK
    const boardNameList = useMemo(
        () => (data ? uniqueArrayBoardsById(data.data) : []),
        [data],
    )

    const FilteredData = useAppSelector((state) =>
        selectIssuesByFilter(state, data),
    )

    return (
        <>
            <FilterIssues boardNameList={boardNameList} />
            <ListIssues
                data={FilteredData}
                isLoading={isLoading}
                isError={isError}
            />
        </>
    )
}

export default IssuesRoot
