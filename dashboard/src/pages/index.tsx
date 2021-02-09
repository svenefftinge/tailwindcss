import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default () => {
    const router = useRouter();
    useEffect(() => {
        // Always do navigations after the first render
        router.push('/workspaces');
    }, [])
    return <div></div>;
}