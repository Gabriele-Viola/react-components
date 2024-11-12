import style from "./AppFooter.module.css"
export default function AppFooter() {
    const customName = 'PurpleWeb'

    return (

        <footer className={style}>
            <div className="container">
                <span>&copy; {new Date().getFullYear()} by </span>
                <span>{customName}</span>
            </div>
        </footer>
    )

}