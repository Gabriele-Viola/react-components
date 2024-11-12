export default function AppFooter() {
    const customName = 'PurpleWeb'

    return (

        <footer>
            <div className="container">
                <span>&copy; {new Date().getFullYear()} by </span>
                <span>{customName}</span>
            </div>
        </footer>
    )

}