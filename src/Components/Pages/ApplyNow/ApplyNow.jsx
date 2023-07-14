import Container from "../../Shared/Container/Container"
import Img from '../../Img/lady of wb 1 (1).png'
import Img2 from '../../Img/Vector.png'
import Img3 from '../../Img/guy of wb 1.png'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
function ApplyNow() {
    return(
        <>
            <Container>
                <body className="font-Montserrat">
                    <div>
                        <h1 className="absolute w-[616px] h-[291px] top-[200px] left-[50px]">
                            <p className="font-extrabold text-[200px] leading-[145px] tracking-[-1rem]">
                                Thank You....
                            </p>
                        </h1>
                        <div className="absolute w-[296px] h-[76px] top-[100px] left-[900px] bg-red">
                            <img src={Img} alt="Lady of web" />
                        </div>
                    </div>
                    <div className="absolute w-[290px] h-[238px] top-[520px] left-[100px]">
                        <p className="font-normal text-[20px] leading-[20px] ">
                            for your interest in becoming the
                            Wealthbuddy Lifestyle Ambassador.
                            We can’t wait to receive your 
                            application and eventually have you
                            on board!
                        </p>
                    </div>
                    <div className="absolute left-[-130px] top-[500px] w-[200px] h-[224px]">
                        <img src={Img2} alt="Vector" />
                    </div>
                    <div className="absolute w-[900px] h-[419px] top-[700px] left-[200px] rounded-lg bg-[#fffff] shadow-lg">
                        <p className="text-[20px] leading-[50px] tracking-[ ] left-[100px] top-[50px] absolute">
                            To complete this application form, you’ll require the following:<br/>
                                1. A link to your 60 seconds video application (posted to your social media<br/>
                                page), telling us why you’re the best person for the job and demonstrating<br/>
                                your knowledge of the Wealthbuddy app. <br/>
                                2. You’ll need to open a Wealthbuddy account. If you haven’t signed up to<br/>
                                Wealthbuddy yet, click here to do so.
                        </p>
                    </div>
                    <div className="absolute w-[296px] h-[76px] top-[1200px] left-[900px] bg-red">
                        <img src={Img3} alt="Guy of web" />
                    </div>
                    <form action="" >
                        <div className="absolute top-[1200px] left-[200px] h-[90px] flex flex-col border border-x-0 border-t-0">
                            <label htmlFor="" className="w-[] text-[19px] leading-[29px]">First Name</label>
                            <input type="text" placeholder="Enter Here" className="w-[400px] h-[30px] rounded-lg shadow-lg"/>
                        </div>
                        <div className="absolute top-[1350px] left-[200px] h-[90px] flex flex-col border border-x-0 border-t-0">
                            <label htmlFor="" className="w-[] text-[19px] leading-[29px]">Surname</label>
                            <input type="text" placeholder="Enter Here" className="w-[400px] h-[30px] rounded-lg shadow-lg"/>
                        </div> 
                        <div className="absolute top-[1500px] left-[200px] h-[110px] flex flex-col border border-x-0 border-t-0">
                            <label htmlFor="" className="w-[] text-[19px] leading-[29px]">Email address<br/>
                            <p className="text-[10px]">(Tooltip: Enter the email address you used to sign up for Wealthbuddy)</p>
                            </label>
                            <input type="text" placeholder="Enter Here" className="w-[400px] h-[30px] rounded-lg shadow-lg"/>
                        </div>   
                        <div className="absolute top-[1700px] left-[200px] h-[130px] flex flex-col border border-x-0 border-t-0">
                            <label htmlFor="" className="w-[] text-[19px] leading-[29px]">Link to your Video<br/>
                                <p className="text-[10px] leading-[10px] mb-[20px]">(Tooltip: Enter the link to your 60 seconds video application posted on your<br/>
                                    Instagram, Facebook, Twitter, LinkedIn or TikTok page. It is fine if you have posted on <br/>
                                    multiple platforms. Just enter the video link on your most active account here.)
                                </p>
                            </label>
                            <input type="text" placeholder="Enter Here" className="w-[400px] h-[30px] rounded-lg shadow-lg"/>
                        </div>                                             
                    </form>
                    <div className="w-[500px] h-[] top-[1900px] left-[200px] absolute">
                        <p>
                            Are you aware of any circumstances which might adversely
                            affect your employment for the period of 3 months in the 
                            position?
                        </p>
                        <div>
                            <div className="absolute top-[110px]">                                
                                <input type="checkbox" name="dis" />
                                <label htmlFor="" id="dis">No</label>
                            </div>
                            <div className="absolute top-[110px] left-[50px]">                                
                                <input type="checkbox" name="dis"/>
                                <label htmlFor="" id="dis">Yes</label>
                            </div>
                        </div>                        
                    </div>
                    <div className="w-[500px] h-[] top-[2100px] left-[200px] absolute">
                        <p>
                            Do you have a criminal record?
                        </p>
                        <div>
                            <div className="absolute top-[50px]">                                
                                <input type="checkbox" name="dis" />
                                <label htmlFor="" id="dis">No</label>
                            </div>
                            <div className="absolute top-[50px] left-[50px]">                                
                                <input type="checkbox" name="dis"/>
                                <label htmlFor="" id="dis">Yes</label>
                            </div>
                        </div>                        
                    </div>
                    <div className="w-[500px] h-[] top-[2200px] left-[150px] absolute">
                        <div className="absolute top-[50px] left-[50px]">                                
                            <input type="checkbox" name="dis" className="mr-[13px]"/>
                            <label htmlFor="" id="dis">I agree to the <a href="/terms&conditions" className="text-[red]">terms & conditions</a> of this application</label>
                        </div>                                               
                    </div>
                    <div className="absolute left-[200px] top-[2300px] sm:absolute sm:left-[121px] sm:top-[2570px]">
                        <a href="/applynowsuccess">
                            <button className="flex border w-[200px] h-[40px] items-center justify-center bg-[#99BF18] rounded sm:w-[185px] sm:h-[37px]">
                                <p className="mr-[0.4rem] text-[#ffffff]">SUBMIT</p>
                                <div className="text-[#ffffff]">
                                    <BsFillArrowRightCircleFill/>
                                </div>                                
                            </button>
                        </a>
                    </div>
                    
                </body>
            </Container>
        </>
    )
}

export default ApplyNow