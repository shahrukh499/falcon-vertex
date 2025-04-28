import React from 'react'
import Image from "next/image";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button } from '@mui/material';

function TopSection() {
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
        <section className="pt-20 lg:pt-32 relative">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <h1 className="text-[25px] md:text-[40px] lg:text-[65px] 2xl:text-[70px] text-[#120042] font-bold leading-tight mb-4">Your Peak in Your Online Business
                            <br className="hidden lg:block" />Solutions</h1>
                    </div>
                    <div className="w-full lg:w-[40%]">

                        <p className="text-[18px] font-[500] mb-6">simply dummy text of the printing and<br className="hidden md:block" /> typesetting industry. </p>
                        <Button sx={btn} className="bg-[#120042] text-white font-semibold w-[190px] h-[45px] ps-5 pe-1 rounded-[10px_50px_50px_10px] flex justify-between items-center gap-1">
                            Join us now
                            <span className="bg-white h-9 w-9 rounded-full flex justify-center items-center">
                                <KeyboardArrowRightIcon fontSize='medium' sx={{color:'black'}}/>
                            </span>
                        </Button>
                    </div>
                    <div className="w-full lg:w-[60%]">
                        <Image className="lg:-mt-36 w-full h-auto" src="/assets/img/photos/laptop-with-program.png" alt="Hero Image" width={1500} height={300} />
                    </div>
                </div>
            </div>
            <div className="h-[600px] w-[250px] bg-[#d200badb] rounded-[50%] absolute top-[90px] right-[50px] z-[-1] blur-[150px]"></div>
            <div className="h-[600px] w-[250px] bg-[#0040a69d] rounded-[50%] absolute top-0 right-0 z-[-1] rotate-45 blur-[150px]"></div>
            <div className="h-[600px] w-[250px] bg-[#0a007c81] rounded-[50%] absolute top-[100px] right-[400px] z-[-1] rotate-45 blur-[150px]"></div>
        </section>
    )
}

export default TopSection