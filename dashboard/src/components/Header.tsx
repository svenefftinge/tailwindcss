import { SubMenu, SubMenuEntry } from "./SubMenu";

export interface HeaderProps {
    title: string;
    subtitle: string;
    tabs?: SubMenuEntry[];
}

export default function Header(p: HeaderProps) {
    return <div className="lg:px-28 px-10 pt-6 border-gray-300 border-t-2 border-b-2 bg-gray-100">
            <div className="flex pb-8">
                <div className="px-4 py-3">
                    <p className="text-2xl text-gray-700 font-semibold leading-relaxed">{p.title}</p>
                    <p className="text-gray-500">{p.subtitle}</p>
                </div>
            </div>
            <div className="px-4">
                {p.tabs ? <SubMenu menuEntries={p.tabs} /> : <div className="h-11"></div>}
            </div>
        </div>;
}