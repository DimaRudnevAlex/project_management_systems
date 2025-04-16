import { useParams } from 'react-router'

const BoardByIdPage = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>BoardByIdPage {id}</h1>
        </div>
    )
}

export default BoardByIdPage
