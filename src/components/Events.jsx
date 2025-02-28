import React from 'react'

const Events = () => {
    return (
        <>
        <hr className="h-px my-10 bg-transparent border-0" />
        <hr className="h-px my-10 bg-transparent border-0" />
        <hr className="h-px my-10 bg-transparent border-0" />
        <section className="bg-[#5C5C5C40] max-w-full w-[90%] md:w-[1096px] h-auto border-[1px] rounded-3xl border-[#858080BF] my-10 mx-auto text-white text-center p-4 md:p-8">
            <div className='grid gap-4 w-full max-w-[330px] md:max-w-[944px] mx-auto my-6'>
                <span className='text-2xl font-semibold md:text-4xl'>Explore Our Work</span>
                <p className='text-lg md:font-medium md:text-2xl'>Take a sneak peek of our informative workshops, collaborative coding projects, and other fun activities.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 w-full max-w-[944px] mx-auto my-12'>
                <div className='grid gap-8 md:gap-10'>
                    <img src="/syo.png" alt="second year orientation" className='w-full max-w-[293px] md:max-w-[416px] h-auto mx-auto' />
                    <img src="/alum.png" alt="alumni" className='w-full max-w-[293px] md:max-w-[416px] h-auto mx-auto' />
                    <img src="/valedictory.png" alt="valedictory" className='w-full max-w-[293px] md:max-w-[416px] h-auto mx-auto' />
                </div>
                <div className='grid gap-8 md:gap-10'>
                    <img src="/dept.png" alt="department" className='w-full max-w-[293px] md:max-w-[416px] h-auto mx-auto' />
                    <img src="/teachers.png" alt="teachers day" className='w-full max-w-[293px] md:max-w-[416px] h-auto mx-auto' />
                    <img src="/class.png" alt="class" className='w-full max-w-[293px] md:max-w-[416px] h-auto mx-auto' />
                    <img src="/cybersec.png" alt="Cybersecurity" className='w-full max-w-[293px] md:max-w-[416px] h-auto mx-auto' />
                </div>
            </div>
        </section>
        </>
    )
}

export default Events