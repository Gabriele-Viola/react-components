import style from "./AppHeader.module.css"
export default function AppHeader() {
    const titleBlog = 'My awesome blog'

    return (
        <header className={style}>
            <strong>
                {titleBlog}
            </strong>
        </header>
    )
}