import React from 'react';

const HomeBanner = () => {
  return (
    <div className='home-container'>
      <div className='grid  md:grid-cols-4 gap-5 md:gap-0 justify-center items-center'>
        <div className='px-2 md:px-14 col-span-2 '>
          <div className=''>
            <h2 className='leading-snug md:leading-normal  md:text-[55px] font-bold pb-5'>One Step <br /> Closer To Your <br />
              <span className='text-indigo-500'>Dream Job</span>
            </h2>
            <p>
              Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
            </p>
            <button className='job-btn'>Get Started</button>
          </div>
        </div>
        <div className='mx-auto col-span-2'>
          <img className='   md:w-[550px] md:h-[450px]' src="profile.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;