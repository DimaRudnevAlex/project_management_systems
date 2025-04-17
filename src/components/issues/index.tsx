import FilterIssues from '@/components/issues/filter-issues'
import ListIssues from '@/components/issues/list-issues'
import { useGetAllIssuesQuery } from '@/store/services/issuesApi'
import { uniqueArrayBoards } from '@/utils/helper'

const IssuesRoot = () => {
    const { data, isLoading } = useGetAllIssuesQuery()
    const boardNameList = data ? uniqueArrayBoards(data.data) : []
    // const FilteredData = // и тут проводить фильтрацию

    return (
        <>
            <FilterIssues boardNameList={boardNameList} />
            <ListIssues data={data?.data} isLoading={isLoading} />
        </>
    )
}

export default IssuesRoot
