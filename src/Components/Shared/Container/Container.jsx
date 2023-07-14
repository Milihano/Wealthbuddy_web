import Nav from '../Top/Nav'
import Footer from '../Bottom/Footer'

function Container({children}) {
    return (
        <div className=' '>
            <Nav/>
                {children}
            <Footer/>
        </div>
        
    )
}

export default Container