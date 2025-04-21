import MainLayout from '@/layouts/main-layout'
import { configPage } from '@/utils/config-page'
import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router'

const IssuesPage = lazy(() => import('@/pages/issues-page'))
const BoardsPage = lazy(() => import('@/pages/boards-page'))
const BoardByIdPage = lazy(() => import('@/pages/board-by-id-page'))
// Для разделения бандла на чанки, чтобы не грузить не нужные страницы, а подгружать по мере надобности пользователю
const AppRouting = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route
                    path={configPage.ISSUES}
                    element={
                        <Suspense fallback={<h1>Loading...</h1>}>
                            <IssuesPage />
                        </Suspense>
                    }
                />
                <Route
                    path={configPage.BOARDS}
                    element={
                        <Suspense fallback={<h1>Loading...</h1>}>
                            <BoardsPage />
                        </Suspense>
                    }
                />
                <Route
                    path={configPage.BOARD_BY_ID}
                    element={
                        <Suspense fallback={<h1>Loading...</h1>}>
                            <BoardByIdPage />
                        </Suspense>
                    }
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
