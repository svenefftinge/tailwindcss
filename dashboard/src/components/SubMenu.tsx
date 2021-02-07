export interface SubMenuEntry {
    title: string
    href: string
    hover?: string
}

export function SubMenu(props: { menuEntries: SubMenuEntry[] }) {
    const active = (window.location.hash.substring(1) || props.menuEntries[0].title).toLowerCase()
    return <div>
        <ul className="lg:flex lg:flex-1 items-center lg:space-x-8 text-base text-gray-700 pt-4 lg:pt-0">
            {props.menuEntries.map(e => {
                let classes = "flex block py-4 border-b-4 border-transparent font-medium";
                if (e.title.toLowerCase() === active) {
                    classes += " border-gray-700";
                } else {
                    classes += " text-gray-500 hover:border-gray-400 ";
                }
                return <li className={classes}>
                    <a href={e.href}>{e.title}</a>
                </li>;
            })}
        </ul>
    </div>;
}