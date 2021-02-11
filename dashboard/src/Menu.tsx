import { useContext } from "react";
import { Link } from "react-router-dom";
import { ServiceContext } from "./service/service";

function Menu(props: { entries: { icon?: string, title: string, link: string }[] }) {
    const ctx = useContext(ServiceContext);
    return (
        <header className="lg:px-28 px-10 bg-white flex flex-wrap items-center pt-3">
            <style dangerouslySetInnerHTML={{
                __html: `
                #menu-toggle:checked+#menu {
                    display: block;
                }
                `}} />
            <div className="flex justify-between items-center pr-3 pb-2">
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 64 64">
                        <path d="M54.217 19.173L32.007 32v2.86h-.014v7.593h.014v8.678l16.637-9.53v-6.346L37.485 41.6v-6.414l16.746-9.532V44.84L32.007 57.56V64L59.71 48V16z" fill="#0091ce" />
                        <path d="M4.292 48l27.715 16v-6.44l-22.2-12.72V19.186L4.292 16zm27.715 3.132V32l-16.624-9.6-.014.014V41.6z" fill="#0086bd" />
                        <path d="M59.708 16.014V16l-27.7-16L4.292 16l5.505 3.186 22.2-12.814 22.2 12.8L59.708 16zm-27.7-3.2L15.383 22.4 32.007 32l16.624-9.6z" fill="#18a5e3" />
                    </svg>
                </Link>
            </div>
            <div className="lg:hidden flex-grow" />
            <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
                <svg className="fill-current text-gray-700"
                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:w-auto w-full" id="menu">
                <nav>
                    <ul className="lg:flex lg:flex-1 items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                        {props.entries.map(e => {
                            let classes = "flex block py-4 border-b-4 border-transparent font-medium";
                            if (window.location.pathname.toLowerCase() === e.link.toLowerCase()) {
                                classes += " border-gray-700";
                            } else {
                                classes += " text-gray-500 hover:border-gray-400 ";
                            }
                            return <li className="lg:px-4 px-0" key={e.title}>
                                <Link className={classes} to={e.link}>
                                    {e.icon ? <img className="w-4 y-3 pr-1" src={e.icon} alt="workspaces"/> : null}<div>{e.title}</div>
                                </Link>
                            </li>;
                        }
                        )}
                    </ul>
                </nav>
                <div className="flex-1" />
                <Link className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor m-l-auto" to="/settings">
                    <img className="rounded-full w-8 h-8 border-2 border-transparent hover:border-indigo-400"
                        src={ctx.getUser().avatarUrl} alt={ctx.getUser().name} />
                </Link>
            </div>
        </header>
    );
}

export default Menu;