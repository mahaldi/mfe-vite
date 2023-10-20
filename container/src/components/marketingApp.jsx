import {mount} from 'marketing/Marketing'
import {useEffect, useRef} from 'react'
import { useHistory } from 'react-router-dom'

const MarketingApp = () => {
    const ref = useRef(null)
    const history = useHistory()
    useEffect(() => {
        console.log('ref.current', ref.current)
        console.log('ref', ref)
        console.log('mount', mount)
        const { onParentNavigation }= mount(ref.current, {
            initialPath: history.location.pathname,
            onParentNavigation: ({pathname: nextPathname}) => {
                const {pathname} = history.location
                console.log('nextPathname', nextPathname)
                if(pathname !== nextPathname) {
                    console.log('on push')
                    history.push(nextPathname)
                }
            }
        })
        if(onParentNavigation) {
            console.log('onParentNavigation', onParentNavigation)
            history.listen(onParentNavigation)
        }
    }, [])
    return (
        <div ref={ref}/>
    )
}
export default MarketingApp;