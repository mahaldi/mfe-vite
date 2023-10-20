import ReactDom from 'react-dom'
import App from './App'
import {createMemoryHistory, createBrowserHistory} from 'history'

const mount = (el, { onParentNavigation, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    })
    if(onParentNavigation) {
        console.log('dashboard trigger', history)
        history.listen(onParentNavigation)
    }
    ReactDom.render(
        <App history={history}/>,
        el
    )
    return {
        onParentNavigation: ({pathname: nextPathname}) => {
            const {pathname} = history.location
            
            if(pathname !== nextPathname) {
                history.push(nextPathname)
            }
        }
    }
}

if(process.env.NODE_ENV === 'development') { // eslint-disable-line
    const devRoot = document.querySelector('#_dashboard-root')

    if(devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() })
    }
}

export {mount}