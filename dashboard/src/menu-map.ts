import { MenuEntry } from "./components/Menu";

export const TopMenuEntries: MenuEntry[] = [
    {
        icon: '/icons/Workspaces.svg',
        title: 'Workspaces',
        link: '/workspaces'
    },
    {
        title: 'Docs',
        link: 'https://www.gitpod.io/docs/',
    },
    {
        title: 'Community',
        link: 'https://community.gitpod.io/',
    },
    {
        title: 'Blog',
        link: 'https://www.gitpod.io/blog/',
    },
];

export const settingsMenu = [
    {
        title: 'Usage',
        link: '/settings/usage'
    },
    {
        title: 'Subscription',
        link: '/settings/subscription'
    },
    {
        title: 'Teams',
        link: '/settings/teams'
    },
    {
        title: 'Access Control',
        link: '/settings/access-control'
    },
    {
        title: 'Settings',
        link: '/settings/account',
        sub: [
            {
                title: 'Account',
                link: '/settings/account'
            },
            {
                title: 'Notifications',
                link: '/settings/notifications'
            },
            {
                title: 'Environment Variables',
                link: '/settings/env-vars'
            },
            {
                title: 'Preferences',
                link: '/settings/preferences'
            },
            {
                title: 'Feature Preview',
                link: '/settings/feature-preview'
            },
            {
                title: 'Default IDE',
                link: '/settings/default-ide'
            },
        ]
    },
]