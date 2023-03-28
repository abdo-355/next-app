import { useRouter } from "next/router";

const DetailPage = () => {
    const router = useRouter()
    return <h1>{router.query.newsId} detail page</h1>
}

export default DetailPage;