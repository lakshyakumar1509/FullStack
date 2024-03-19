import PropTypes from 'prop-types'
import Navbar from './Navbar'
import Footer from './Footer';
const Main=({children})=>
{
    return(
        <div className='user_layout'>
            <header>
              <Navbar/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

Main.propTypes={
    children:PropTypes.node.isRequired
}
export default Main;