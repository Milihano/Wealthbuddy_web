import logo from '../../Img/logo.svg'

function Header() {
    
    return(
        <>
            <nav className="flex justify-between items-center">
                <div className=" w-[315px] h-[107px] sm:w-[145px] sm:h-[53px]">
                    <a href="/"><img src={logo} alt="logo" /></a>
                </div>
                <div className='flex gap-3'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </div>
            </nav>
        </>
    )
}

export default Header