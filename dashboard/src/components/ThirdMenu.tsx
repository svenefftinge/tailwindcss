import { Link } from "react-router-dom";

export interface ThirdMenuEntry {
    title: string
    link: string
}

export function ThirdMenu(props: { entries: ThirdMenuEntry[]}) {
    return <div>
        <ul className="flex flex-col text-base text-gray-700 pt-4 lg:pt-0">
            {props.entries.map(e => {
                let classes = "flex block py-2 font-sm px-4 rounded-lg";
                if (e.link.toLowerCase() === window.location.pathname) {
                    classes += " bg-gray-700 text-gray-100 ";
                } else {
                    classes += " text-gray-400 hover:bg-gray-300 hover:text-white ";
                }
                return <li className={classes}>
                    <Link to={e.link}>
                        {e.title}
                    </Link>
                </li>;
            })}
        </ul>
    </div>;
}