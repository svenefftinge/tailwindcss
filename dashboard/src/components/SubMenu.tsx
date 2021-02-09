import { useRouter } from 'next/router';
import Link from 'next/link';
import { MenuEntry } from './Menu';

export function SubMenu(props: { menuEntries: MenuEntry[] }) {
    const currentPath = useRouter().pathname.toLowerCase();
    return <div>
        <ul className="lg:flex lg:flex-1 items-center lg:space-x-2 text-gray-700 lg:pt-4 lg:pt-0">
            {props.menuEntries.map(e => {
                let classes = "flex block lg:py-4 pb-2 border-b-4 border-transparent text-base px-4";
                if (e.link === currentPath) {
                    classes += " lg:border-gray-700 font-medium";
                } else {
                    classes += " text-gray-500 hover:border-gray-400 ";
                }
                return <li className={classes} key={e.title}>
                    <Link href={e.link}>{e.title}</Link>
                </li>;
            })}
        </ul>
    </div>;
}