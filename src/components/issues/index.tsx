import { useAppSelector } from '@/@types/store'
import FilterIssues from '@/components/issues/filter-issues'
import ListIssues from '@/components/issues/list-issues'
import { selectIssuesByFilter } from '@/store/features/isssues/isssuesSlice.ts'
import { useGetAllIssuesQuery } from '@/store/services/issuesApi'

const IssuesRoot = () => {
    const { data, isLoading, isError } = useGetAllIssuesQuery()

    const FilteredData = useAppSelector((state) =>
        selectIssuesByFilter(state, data),
    )

    return (
        <>
            <FilterIssues boardNameList={data?.boardNameList ?? []} />
            <ListIssues
                data={FilteredData}
                isLoading={isLoading}
                isError={isError}
            />
        </>
    )
}

export default IssuesRoot
