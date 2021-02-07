import Toggle from "../components/Toggle"
import { WorkspaceDescription, WorkspaceEntry } from "./WorkspaceEntry"

export function Workspaces() {
    return <>
        <div className="lg:px-28 px-10 pt-6 pb-16 border-gray-100 border-t-2 border-b-2">
            <p className="text-2xl text-gray-700 font-semibold leading-relaxed">Workspaces</p>
            <p className="text-gray-500">Open and Share Workspaces</p>
        </div>

        <div className="lg:px-28 px-10 pt-4 flex">
            <input type="text" className="text-sm mt-1 block w-56 rounded-md bg-gray-200 border-gray-200 border-2 focus:border-gray-300 focus:bg-white focus:ring-0 " placeholder="Search Workspace" />

            <Toggle entries={[{
                title: 'Active',
                onActivate: () => {
                }
            }, {
                title: 'Recent',
                onActivate: () => { }
            }]} />
        </div>
        <div className="lg:px-28 px-10 pt-4 flex flex-col">
            {
                [
                    {
                        id: 'red-puma-324234',
                        project: 'github.com/gitpod-io/gitpod',
                        contextTitle: 'Long title for the pull request for something that is just way too long',
                        contextName: 'Pull Request 2323',
                        currentBranch: 'master',
                        currentChanges: '3 Commits, 2 Files',
                        state: 'Running',
                        since: '1 hour ago',
                        shared: true,
                        pinned: false
                    } as WorkspaceDescription,
                    {
                        id: 'pink-lion-324234',
                        project: 'github.com/gitpod-com/gitpod',
                        contextTitle: 'Some short title',
                        contextName: 'Isse 47411',
                        currentBranch: 'se-foo-bar-4711',
                        state: 'Stopped',
                        since: '2 days ago',
                        shared: false,
                        pinned: true
                    } as WorkspaceDescription,
                    {
                        id: 'red-puma-324234',
                        project: 'github.com/gitpod-io/gitpod',
                        contextTitle: 'Long title for the pull request for something that is just way too long',
                        contextName: 'Pull Request 2323',
                        currentBranch: 'master',
                        currentChanges: '3 Commits, 2 Files',
                        state: 'Error',
                        since: '3 weeks ago',
                        shared: true,
                        pinned: true
                    } as WorkspaceDescription,
                ].map(e => {
                    return <WorkspaceEntry key={e.id} {...e} />
                })
            }
        </div></>
}