import { useRouter } from 'next/router';
import Link from 'next/link';
import { MenuEntry } from './Menu';


export function ThirdMenu(props: { entries: MenuEntry[]}) {
    const currentPath = useRouter().pathname;
    return <div>
        <ul className="flex flex-col text-base text-gray-700 pt-4 lg:pt-0">
            {props.entries.map(e => {
                let classes = "flex block mb-1 py-1 text-sm px-4 rounded-lg";
                if (e.link.toLowerCase().startsWith(currentPath)) {
                    classes += " bg-gray-700 text-gray-100 ";
                } else {
                    classes += " text-gray-400 hover:bg-gray-300 hover:text-white ";
                }
                return <li className={classes}>
                    <Link href={e.link}>{e.title}</Link>
                </li>;
            })}
        </ul>
    </div>;
}