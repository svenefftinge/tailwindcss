import { useContext, useState } from "react";
import Header from "../components/Header";
import Toggle from "../components/Toggle"
import { ServiceContext } from "../service/service";
import { WorkspaceEntry } from "./WorkspaceEntry"



export function Workspaces() {
    const ctx = useContext(ServiceContext);
    const [workspaces, setWorkspaces] = useState(ctx.getWorkspaces(true));
    return <>
        <Header title="Workspaces" subtitle="Open and Share Workspaces"/>
        
        <div className="lg:px-28 px-10 pt-4 flex">
            <input type="text" className="text-sm mt-1 block w-56 rounded-md bg-gray-200 border-gray-200 border-2 focus:border-gray-300 focus:bg-white focus:ring-0 " placeholder="Search Workspace" />

            <Toggle entries={[{
                title: 'Active',
                onActivate: () => {
                    setWorkspaces(ctx.getWorkspaces(true));
                }
            }, {
                title: 'Recent',
                onActivate: () => { 
                    setWorkspaces(ctx.getWorkspaces(false));
                }
            }]} />
        </div>
        <div className="lg:px-28 px-10 pt-4 flex flex-col">
            {
                workspaces.map(e => {
                    return <WorkspaceEntry key={e.id} {...e} />
                })
            }
        </div></>
}