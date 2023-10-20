import {mount} from 'dashboard/Dashboard'
import {useEffect, useRef} from 'react'
import { useHistory } from 'react-router-dom'

const MarketingApp = () => {
    const ref = useRef(null)
    const history = useHistory()
    useEffect(() => {
        const { onParentNavigation } = mount(ref.current, {
            initialPath: history.location.pathname,
            onParentNavigation: ({pathname: nextPathname}) => {
                const {pathname} = history.location
                if(pathname !== nextPathname) {
                    history.push(nextPathname)
                }
            }
        })
        if(onParentNavigation) {
            history.listen(onParentNavigation)
        }
    }, [])
    return (
        <div ref={ref}/>
    )
}
export default MarketingApp;