import React from 'react'

const Events = () => {
    return (
        <section className="bg-[#5C5C5C40] max-w-full w-[400px] h-[2140px] md:w-[1096px] md:h-[1565px] border-[1px] rounded-3xl border-[#858080BF] my-10 mx-auto text-white text-center">
            <div className='grid gap-4 w-[330px] h-[60px] md:w-[944px] md:h-[120px] mx-auto my-6'>
                <span className='font-semibold text-2xl md:text-4xl'>Explore Our Work</span>
                <p className='text-lg md:font-medium md:text-2xl'>Take a sneak peek of our informative workshops, collaborative coding projects, and other fun activities.</p>
            </div>

            <div className='flex flex-col md:flex-row gap-8 md:gap-6 w-[944px] mx-[50px] md:mx-[110px] my-24 md:my-12'>
                <div className='grid gap-8 md:gap-10'>
                    <img src="/syo.png" alt="second year orientation" className='w-[293px] h-[305px] md:w-[416px] md:h-[416px]' />
                    <img src="/alum.png" alt="alumni" className='w-[293px] h-[293px] md:w-[416px] md:h-[416px]' />
                    <img src="/valedictory.png" alt="valedictory" className='w-[293px] h-[293] md:w-[416px] md:h-[416px]' />
                </div>
                <div className='grid gap-8 md:gap-10'>
                    <img src="/dept.png" alt="department" className='w-[293px] h-[131px] md:w-[416px] md:h-[188px]' />
                    <img src="/teachers.png" alt="teachers day" className='w-[293px] h-[305px] md:w-[416px] md:h-[410px]' />
                    <img src="/class.png" alt="class" className='w-[293px] h-[142] md:w-[416px] md:h-[192px]' />
                    <img src="/cybersec.png" alt="Cybersecurity" className='w-[293px] h-[305px] md:w-[416px] md:h-[416px]' />
                </div>
            </div>
        </section>
    )
}

export default Events
