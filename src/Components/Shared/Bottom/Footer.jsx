import { RiFacebookCircleFill } from 'react-icons/ri';
import { AiFillInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { TiSocialLinkedinCircular } from 'react-icons/ti'

function Footer() {
    return (
        <>
            <footer className='absolute top-[4000px] left-[0px] w-full h-[50px] flex justify-between items-center py-[10px] px-[100px] border bg-[#99BF18] text-[#ffff]
            sm:absolute sm:h-[30px] sm:top-[4000px] sm:w-full sm:left-[0px] sm:px-1 sm:text-[12px]'>
                <p className='w-[325px]'>Copyright © 2022 Wealthbuddy by Meristem | Privacy Policy</p>
                <div className='flex justify-between items-center gap-3 sm:gap-1'>
                    <RiFacebookCircleFill/>
                    <AiFillInstagram/>
                    <AiOutlineTwitter/>
                    <TiSocialLinkedinCircular/>
                    <p>Wealthbuddy</p>
                </div>
            </footer>
        </>
    )

}

export default Footer