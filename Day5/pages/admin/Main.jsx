import PropTypes from 'prop-types'
import Sidebar from './Sidebar'
const Main=({children})=>
{
    return(
        <div className='user_layout'>
            <header>
              <Sidebar/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                
            </footer>
        </div>
    )
}

Main.propTypes={
    children:PropTypes.node.isRequired
}
export default Main;