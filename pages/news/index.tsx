import Link from "next/link";

const News = () => {
    return <><h1>news page</h1>
        <ul>
            <li><Link href="/news/next-js">next-js</Link></li>
            <li><Link href="/news/react">react</Link></li>
            <li><Link href="/news/typescript">typescript</Link></li>
        </ul>
    </>
}

export default News;