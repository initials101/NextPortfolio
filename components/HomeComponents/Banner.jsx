import Typewriter from 'typewriter-effect';
import BannerLayout from '../Common/BannerLayout';
import { Link } from 'react-scroll';

const Banner = () => {
    return (
        <BannerLayout>
            <div className="absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
                <div className="bg-LightGray/10 w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex md:block">
                    <div className="flex flex-col md:flex-row items-center justify-around w-full h-full">
                        <div className="text-center md:text-left">
                            <h1 className="text-3xl sm:text-4xl xl:text-5xl text-Snow font-bold">Hello, there!</h1>
                            <div className="py-4 font-cascadia-normal text-Snow pb-4 text-xs lg:h-auto">
                                <span>
                                    {"<"}<span className="text-Green sm:text-base xl:text-lg font-bold">div</span>{">"} 
                                    <span className="text-Snow sm:text-xl xl:text-2xl font-bold">
                                        I am a  
                                        <span className="inline-block">
                                            <Typewriter
                                                options={{
                                                    strings: ['Full stack Engineer', 'Red Teamer'],
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                            />
                                        </span>
                                    </span> 
                                    {"</"}<span className="text-Green sm:text-base xl:text-lg font-bold">div</span>{">"} 
                                </span>
                            </div>
                            <Link to="intro" spy={true} smooth={true} duration={500} offset={-50} className="button">Explore</Link>
                        </div>

                        {/* Certificate Image Section */}
                        <div className="w-full md:w-[50%] flex justify-center mt-6 md:mt-0">
                            <img className="max-w-[400px] w-full h-auto rounded-lg shadow-lg" 
                                 src="images/certificate.png" 
                                 alt="certificate" />
                        </div>
                    </div>
                </div>

                {/* Details Section */}
                <div className="grid grid-cols-2 gap-4 md:gap-0 md:flex items-center justify-between w-full px-4 xl:px-8 2xl:px-16 mt-4">
                    <div className="flex items-center gap-x-1">
                        <span className="text-base md:text-lg text-Green font-bold">43+</span>
                        <span className="text-xs text-Snow">Completed Projects</span>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <span className="text-base md:text-lg text-Green font-bold">20+</span>
                        <span className="text-xs text-Snow">Freelance Clients</span>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <span className="text-base md:text-lg text-Green font-bold">4+</span>
                        <span className="text-xs text-Snow">Honors & Awards</span>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <span className="text-base md:text-lg text-Green font-bold">200+</span>
                        <span className="text-xs text-Snow">Opensource Projects</span>
                    </div>
                </div>
            </div>
        </BannerLayout>
    );
}

export default Banner;