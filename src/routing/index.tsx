import MainLayout from '@/layouts/main-layout'
import BoardByIdPage from '@/pages/board-by-id-page'
import BoardsPage from '@/pages/boards-page'
import IssuesPage from '@/pages/issues-page'
import { configPage } from '@/utils/config-page'
import { Navigate, Route, Routes } from 'react-router'

const AppRouting = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path={configPage.BOARDS} element={<BoardsPage />} />
                <Route path={configPage.ISSUES} element={<IssuesPage />} />
                <Route
                    path={configPage.BOARD_BY_ID}
                    element={<BoardByIdPage />}
                />
                <Route
                    path={'/*'}
                    element={<Navigate to={configPage.ISSUES} />}
                />
            </Route>
        </Routes>
    )
}

export default AppRouting
