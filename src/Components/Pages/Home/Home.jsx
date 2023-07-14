//import React from "react"
import Container from "../../Shared/Container/Container"
import Img from "../../Img/people.png"
import Img2 from "../../Img/Vector.png"
import Img3 from "../../Img/woman.png"
import Img4 from "../../Img/laptop.png"
import Img5 from "../../Img/Ellipse 82.png"
import Img6 from "../../Img/Ellipse 79.png"
import Img7 from "../../Img/Ellipse 84.png"
import Img8 from "../../Img/Ellipse 78.png"
import Img9 from "../../Img/Ellipse 81.png"
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

function Home() {
    return (
        <>
            {/* Nb: The screen isn't working when being adjusted */}
            <Container>
                <body className="font-Montserrat">
                    <button className="z-10 w-[40px] bg-[green] border rounded-md">
                        <a href="/faqs">FAQS</a>
                    </button>
                    <h1 className="  absolute w-[700px] h-[291px] left-[25px] top-[150px] sm:absolute sm:w-[500px] sm:h-[50px] sm:left-[15px] sm:top-[100px]">
                        <p className=" text-[203.08px] leading-[145.43px] font-bold sm:font-bold sm:text-[69px] sm:leading-[49px]">
                            Be the next
                        </p> 
                        <div className="absolute w-[238px] h-[100px] leading-[33px] tracking-[-0.01rem] top-[300px] left-[12px] sm:absolute sm:w-[230px] sm:h-[28px] sm:leading-[30px] sm:tracking-[-0.01rem] sm:top-[60px] sm:left-[3px] sm:text-[#313131]">
                            <p className="font-normal text-[32px] sm:text-[23px] sm:font-normal">Naija's hottest job with N1m monthly salary.</p>
                        </div>
                    </h1>
                    <div>
                        <div className="absolute w-[900px] h-[868px] left-[261px] top-[260px] z-10 sm:aboslute sm:w-[428px] sm:h-[44px] sm:left-[0px] sm:top-[320px] sm:z-10">
                            <img src={Img} alt="img of people" />
                        </div>
                        <div className="absolute w-[393px] h-[358px] left-[664px] top-[250px] sm:absolute sm:w-[133px] sm:h-[121px] sm:left-[220px] sm:top-[330px]">
                            <img src={Img2} alt="img behind people" />
                        </div>
                        <h2 className="w-[980px] h-[178px] sm:w-[371px] sm:h-[61px]">
                            <p className="absolute left-[209px] top-[750px] z-10 font-Montserrat text-[#99BF18]
                            text-[183.043px] font-bold leading-[177px] tracking-[-0.5rem]
                            border-solid border-[#fff] sm:absolute sm:left-[20px] sm:top-[590px]
                            sm:z-20 sm:text-[#99BF18] sm:text-[63px] sm:font-bold sm:leading-[60px]
                            sm:tracking-[-0.07rem] sm:border-solid sm:border-[#fff] sm:bg-[#fff] sm:rounded">Ambassador</p>
                        </h2>
                    </div>
                    <div className="absolute w-[247px] h-[224px] top-[623px] left-[-162px] sm:hidden">
                        <img src={Img2} alt="vector2"/>
                    </div>                    
                    <div className="absolute left-[600px] top-[1000px] sm:absolute sm:left-[121px] sm:top-[1620px] z-20">
                        <a href="/applynow">
                            <button className="flex border w-[200px] h-[40px] items-center justify-center bg-[#99BF18] rounded sm:w-[185px] sm:h-[37px]">
                                <p className="mr-[0.4rem] text-[#ffffff]">APPLY NOW</p>
                                <div className="text-[#ffffff]">
                                    <BsFillArrowRightCircleFill/>
                                </div>                                
                            </button>
                        </a>
                    </div>                    
                    <div className="absolute w-[415px] h-[283px] left-[158px] top-[1160px] z-10 sm:absolute sm:w-[256px] sm:h-[284px] sm:left-[82px] sm:top-[900px]">
                        <img src={Img3} alt="Woman #" />
                    </div>
                    <div className="absolute w-[247px] h-[224px] top-[1480px] left-[82px] sm:absolute sm:w-[102px] sm:h-[93] sm:top-[1130px] sm:left-[51px]">
                        <img src={Img2} alt="vector behind woman #"/>
                    </div>
                    <div>
                        <div className="absolute w-[275px] h-[43px] left-[843px] top-[1218px] leading-[43px] text-[#000000] sm:absolute sm:w-[245px] sm:h-[23px] sm:left-[100px] sm:top-[1300px] sm:leading-[23px] sm:text-[#000000]">
                            <p className="font-semibold text-[35px] sm:text:[18px] sm:font-semibold">About the job</p>
                        </div>
                        <div className="absolute w-[484px] h-[] top-[1318px] left-[843px] sm:absolute sm:w-[290px] sm:h-[178px] sm:left-[60px] sm:top-[1350px]">
                            <p className="text-[22px] leading-[41px] font-normal sm:text-[14px] sm:font-normal sm:leading-[30px] sm:text-center smtext-[#434242]">
                                As the Wealthbuddy lifestyle ambassador.
                                your main responsibility will be to use your unique skills, abilities, or talents to help 
                                people make better decisions with their 
                                money and switch up their lifestyles.

                                Salary: N1m monthly (3 months contract)
                                Experience: None required
                                Age: Just be above 18.
                            </p>
                        </div>
                        <div className="absolute left-[903px] top-[1700px] sm:absolute sm:left-[121px] sm:top-[1620px]">
                            <a href="/ambassadorship">
                                <button className="flex border w-[200px] h-[40px] items-center justify-center bg-[#99BF18] rounded sm:w-[185px] sm:h-[37px]">
                                    <p className="mr-[0.4rem] text-[#ffffff]">LEARN MORE</p>
                                    <div className="text-[#ffffff]">
                                        <BsFillArrowRightCircleFill/>
                                    </div>                                    
                                </button>
                            </a>
                        </div>
                    </div>                    
                    <div>
                        <div className="absolute w-[369px] h-[43px] left-[243px] top-[1918px] leading-[43px] text-[#000000] sm:absolute sm:w-[395px] sm:h-[23px] sm:left-[40px] sm:top-[2170px] sm:leading-[23px] sm:text-[#000000]">
                            <p className="font-semibold text-[35px] sm:text:[18px] sm:font-semibold">About Wealthbuddy</p>
                        </div>
                        <div className="absolute w-[484px] h-[] top-[2010px] left-[243px] sm:absolute sm:w-[290px] sm:h-[178px] sm:left-[60px] sm:top-[2250px]">
                            <p className="text-[22px] leading-[41px] font-normal sm:text-[14px] sm:font-normal sm:leading-[30px] sm:text-center smtext-[#434242]">
                                Wealthbuddy by Meristem is a savings and investment app that helps conveniently save money, grow money, and pay bills. 
                                Everybody has a desired lifestyle they’d love to live. At Wealthbuddy, our goal is to help you grow your money so you can consistently live the life you’ve always dreamed of. Wealthbuddy is the app that helps you switch up your lifestyle.
                                The Wealthbuddy app has many savings and investment plans to choose from.
                            </p>
                        </div>
                        <div className="absolute left-[243px] top-[2500px] sm:absolute sm:left-[121px] sm:top-[2570px]">
                            <button className="flex border w-[200px] h-[40px] items-center justify-center bg-[#99BF18] rounded sm:w-[185px] sm:h-[37px]">
                                <p className="mr-[0.4rem] text-[#ffffff]">READ MORE</p>
                                <div className="text-[#ffffff]">
                                    <BsFillArrowRightCircleFill/>
                                </div>                                
                            </button>
                        </div>
                        <div className="absolute w-[504px] h-[686px] top-[2000px] left-[840px] sm:absolute sm:w-[350px] sm:h-[193px] sm:top-[1800px] sm:left-[20px]">
                            <img src={Img4} alt="Laptop Img" />
                        </div>
                        <div className="absolute w-[367px] h-[43px] left-[158px] top-[2720px] sm:absolute sm:w-[200px] sm:h-[32px] sm:left-[2px] sm:top-[2750px] ">
                            <p className="font-normal text-[35px] leading-[43px] sm:text-[20px] sm:leading-[31px]">Featured Applicants </p>
                        </div>
                        <div className="absolute left-[1123px] top-[2720px] sm:absolute sm:left-[240px] sm:top-[2750px]">
                            <button className="flex border w-[200px] h-[40px] items-center justify-center bg-[#99BF18] rounded sm:w-[150px]">
                                <p className="mr-[0.4rem] text-[#ffffff]">VIEW ALL</p>
                                <div className="text-[#ffffff]">
                                    <BsFillArrowRightCircleFill/>
                                </div>                                
                            </button>
                        </div>                        
                        <div className="">
                            <div className="absolute top-[2931px] left-[1px] bg-[#fff] border rounded-lg  w-[393px] h-[118px] sm:w-[300px] sm:left-[50px]">
                                <div className="absolute w-[50px] top-[20px] left-[2px] items-center sm:w-[35px]">
                                    <img src={Img5} alt="Lol" />
                                </div>                                
                                <div className="absolute w-[146px] h-[23px] top-[30px] left-[100px] leading-[22px] sm:w-[90px] sm:left-[70px]">
                                    <p className="font-bold sm:text-[15px]">Seun Babs</p>
                                    <p className="absolute w-[85px] h-[23px] left-[13px] top-[25px] sm:left-[8px]" >@sbee</p>
                                </div>
                                <div className="absolute top-[30px] left-[252px] sm:left-[190px] sm:top-[40px]">
                                    <button className="flex border w-[120px] h-[40px] items-center justify-center bg-[#99BF18] rounded sm:w-[80px] sm:h-[30px]">
                                        <p className="mr-[0.4rem]">VIEW</p>
                                        <BsFillArrowRightCircleFill/>
                                    </button>
                                </div>
                            </div>
                            <div className="absolute top-[2931px] left-[449px] bg-[#fff] border rounded-lg  w-[393px] h-[118px] sm:w-[300px] sm:left-[50px] sm:top-[3100px]">
                                <div className="absolute w-[70px] top-[20px] left-[2px] items-center sm:w-[35px] sm:top-[30px]">
                                    <img src={Img6} alt="Lol" />
                                </div>                                
                                <div className="absolute w-[146px] h-[23px] top-[30px] left-[129px] leading-[22px] sm:w-[90px] sm:left-[70px]">
                                    <p className="font-bold sm:text-[15px]">Tosin Green</p>
                                    <p className="absolute w-[85px] h-[23px] left-[13px] top-[25px] sm:left-[8px]" >@tgreen</p>
                                </div>
                                <div className="absolute top-[30px] left-[252px] sm:left-[190px] sm:top-[40px]">
                                    <button className="flex border w-[120px] h-[40px] items-center justify-center bg-[#99BF18] rounded sm:w-[80px] sm:h-[30px]">
                                        <p className="mr-[0.4rem]">VIEW</p>
                                        <BsFillArrowRightCircleFill/>
                                    </button>
                                </div>
                            </div>
                            <div className="absolute top-[2931px] left-[949px] bg-[#fff] border rounded-lg  w-[393px] h-[118px] sm:w-[300px] sm:left-[50px] sm:top-[3300px]">
                                <div className="absolute w-[70px] top-[20px] left-[2px] items-center sm:w-[35px] sm:top-[30px]">
                                    <img src={Img7} alt="Lol" />
                                </div>                                
                                <div className="absolute w-[146px] h-[23px] top-[30px] left-[129px] leading-[22px] sm:w-[90px] sm:left-[70px]">
                                    <p className="font-bold sm:text-[15px]">Johnson</p>
                                    <p className="absolute w-[85px] h-[23px] left-[13px] top-[25px] sm:left-[8px]" >@sonji</p>
                                </div>
                                <div className="absolute top-[30px] left-[252px] sm:left-[190px] sm:top-[40px]">
                                    <button className="flex border w-[120px] h-[40px] items-center justify-center bg-[#99BF18] rounded sm:w-[80px] sm:h-[30px]">
                                        <p className="mr-[0.4rem]">VIEW</p>
                                        <BsFillArrowRightCircleFill/>
                                    </button>
                                </div>
                            </div> 
                            <div className="absolute top-[3101px] left-[1px] bg-[#fff] border rounded-lg  w-[393px] h-[118px] sm:w-[300px] sm:left-[50px] sm:top-[3500px]">
                                <div className="absolute w-[70px] top-[20px] left-[2px] items-center sm:w-[35px] sm:top-[30px]">
                                    <img src={Img7} alt="Lol" />
                                </div>                                
                                <div className="absolute w-[146px] h-[23px] top-[30px] left-[129px] leading-[22px] sm:w-[90px] sm:left-[70px]">
                                    <p className="font-bold sm:text-[15px]">Johnson</p>
                                    <p className="absolute w-[85px] h-[23px] left-[13px] top-[25px] sm:left-[8px]" >@jiji</p>
                                </div>
                                <div className="absolute top-[30px] left-[252px] sm:left-[190px] sm:top-[40px]">
                                    <button className="flex border w-[120px] h-[40px] items-center justify-center bg-[#99BF18] rounded sm:w-[80px] sm:h-[30px]">
                                        <p className="mr-[0.4rem]">VIEW</p>
                                        <BsFillArrowRightCircleFill/>
                                    </button>
                                </div>
                            </div>
                            <div className="absolute top-[3101px] left-[449px] bg-[#fff] border rounded-lg w-[393px] h-[118px] sm:w-[300px] sm:left-[50px] sm:top-[3700px]">
                                <div className="absolute w-[70px] top-[20px] left-[2px] items-center sm:w-[35px] sm:top-[30px]">
                                    <img src={Img8} alt="Lol" />
                                </div>                                
                                <div className="absolute w-[200px] h-[23px] top-[30px] left-[90px] leading-[22px] sm:w-[90px] sm:left-[70px]">
                                    <p className="font-bold sm:text-[15px] sm:text-center">Oluwasegun Kajola</p>
                                    <p className="absolute w-[85px] h-[23px] left-[33px] top-[25px] sm:left-[8px] sm:top-[35px]" >@se-kajo</p>
                                </div>
                                <div className="absolute top-[30px] left-[252px] sm:left-[190px] sm:top-[40px]">
                                    <button className="flex border w-[120px] h-[40px] items-center justify-center bg-[#99BF18] rounded sm:w-[80px] sm:h-[30px]">
                                        <p className="mr-[0.4rem]">VIEW</p>
                                        <BsFillArrowRightCircleFill/>
                                    </button>
                                </div>
                            </div>
                            <div className="absolute top-[3101px] left-[949px] bg-[#fff] border rounded-lg w-[393px] h-[118px] sm:w-[300px] sm:left-[50px] sm:top-[3900px]">
                                <div className="absolute w-[70px] top-[20px] left-[2px] items-center sm:w-[35px] sm:top-[30px]">
                                    <img src={Img9} alt="Lol" />
                                </div>                                
                                <div className="absolute w-[146px] h-[23px] top-[30px] left-[89px] leading-[22px] sm:w-[90px] sm:left-[70px]">
                                    <p className="font-bold sm:text-[15px] sm:text-center">Nelson Adewale</p>
                                    <p className="absolute w-[85px] h-[23px] left-[13px] top-[25px] sm:left-[8px] sm:top-[35px]">@el_wale</p>
                                </div>
                                <div className="absolute top-[30px] left-[252px] sm:left-[190px] sm:top-[40px]">
                                    <button className="flex border w-[120px] h-[40px] items-center justify-center bg-[#99BF18] rounded sm:w-[80px] sm:h-[30px]">
                                        <p className="mr-[0.4rem]">VIEW</p>
                                        <BsFillArrowRightCircleFill/>
                                    </button>
                                </div>
                            </div>
                        </div>   
                                                  
                        
                        
                    </div>
                    {/* <div className="border mt-[10px] w-[10rem]">
                        <p className="relative left-[120px]">My name is azeez</p>
                        <p>My name is azeez</p>
                    </div> */}
                    
                </body>
            </Container>
        </>
    )
}

export default Home