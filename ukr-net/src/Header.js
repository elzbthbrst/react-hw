import HeaderLink from "./HeaderLink"

export default function Header () {
    return (
        <header className="header">
            <h1 className="header-title">UkrNet</h1>
            <HeaderLink>Початок</HeaderLink>
            <HeaderLink>Новини</HeaderLink>
            <HeaderLink>Допомога</HeaderLink>
            <HeaderLink>Статистика</HeaderLink>
        </header>
    )
}

