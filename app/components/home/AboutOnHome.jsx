import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function AboutOnHome() {
    const btn = {
        backgroundColor: '#120042',
        color: 'white',
        fontWeight: '500',
        width: '190px',
        height: '45px',
        paddingLeft: '15px',
        paddingRight: '5px',
        borderRadius: '10px 50px 50px 10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1px',
        textTransform: 'capitalize',
        '&:hover': {
            backgroundColor: '#391f7d',
        }
    }
    return (
        <section className='py-6 lg:py-12 relative'>
            <div className='container'>
                <h2 className='text-[25px] lg:text-[60px] text-[#120042] font-bold text-center leading-tight mb-3'>Where Innovation Meets Altitude</h2>
                <p className='text-[18px] font-[500] text-center max-w-full w-[1200px] mx-auto'>
                    we believe that success in the digital world requires more than just skill—it demands vision, precision, and the ability to soar above the competition. Just like a falcon that navigates the skies with unmatched speed and accuracy, we craft cutting-edge web development and SEO strategies to elevate your brand to new heights.
                </p>
                <div className='mt-10'>
                    <div className='flex flex-wrap gap-y-4'>
                        <div className='w-full md:w-[50%] lg:w-[33.33%] 2xl:ps-24'>
                            <Image className='w-auto h-auto mb-2' src='/assets/icons/graph.png' alt='Hero Image' width={100} height={100} />
                            <div>
                                <h3 className='text-[20px] font-semibold mb-2'>95% Client Satisfaction</h3>
                                <p>
                                    Altitude isn’t just about<br className='hidden lg:block'/>
                                    reaching the top—it’s about<br className='hidden lg:block'/>
                                    staying there.
                                </p>
                            </div>
                        </div>
                        <div className='w-full md:w-[50%] lg:w-[33.33%] 2xl:ps-24'>
                            <Image className='w-auto h-auto' src='/assets/icons/responsive.png' alt='Hero Image' width={100} height={100} />
                            <div>
                                <h3 className='text-[20px] font-semibold mb-2'>Full Responsive Design</h3>
                                <p>
                                    Altitude isn’t just about<br className='hidden lg:block'/>
                                    reaching the top—it’s about<br className='hidden lg:block'/>
                                    staying there.
                                </p>
                            </div>
                        </div>
                        <div className='w-full md:w-[50%] lg:w-[33.33%] 2xl:ps-24'>
                            <Image className='w-auto h-auto' src='/assets/icons/support.png' alt='Hero Image' width={100} height={100} />
                            <div>
                                <h3 className='text-[20px] font-semibold mb-2'>24X7 Support Team</h3>
                                <p>
                                    Altitude isn’t just about<br className='hidden lg:block'/>
                                    reaching the top—it’s about<br className='hidden lg:block'/>
                                    staying there.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap mt-10'>
                   <div className='w-full lg:w-[50%]'>
                        <Image src='/assets/img/photos/7171664_3529848.png' width={550} height={626} alt='Hero Image' />
                   </div>
                   <div className='w-full lg:w-[50%] pt-5'>
                        <h3 className='text-[23px] lg:text-[45px] font-semibold leading-tight -ms-40 mb-5'>Know your buyer, like you know 
                        <br className='hidden lg:block'/>your business</h3>
                        <p className='text-[18px] max-w-full w-[400px] mb-5'>
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                        <Button sx={btn} className="bg-[#120042] text-white font-semibold w-[190px] h-[45px] ps-5 pe-1 rounded-[10px_50px_50px_10px] flex justify-between items-center gap-1">
                            Join us now
                            <span className="bg-white h-9 w-9 rounded-full flex justify-center items-center">
                                <KeyboardArrowRightIcon fontSize='medium' sx={{color:'black'}}/>
                            </span>
                        </Button>
                   </div>
                </div>
            </div>
            <Image className='absolute top-0 left-0 z-[-1] blur-[150px]' src='/assets/img/photos/Ellipse-5.png' alt='Hero Image' width={286} height={506} />
            <Image className='absolute top-0 left-0 z-[-1] blur-[150px]' src='/assets/img/photos/Ellipse-6.png' alt='Hero Image' width={395} height={621} />
            <Image className='absolute top-0 left-0 z-[-1] blur-[150px]' src='/assets/img/photos/Ellipse-7.png' alt='Hero Image' width={528} height={830} />
        </section>
    )
}

export default AboutOnHome