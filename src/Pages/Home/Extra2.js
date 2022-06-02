import React from 'react';

const Extra2 = () => {
    return (
        <div className='b-4'>
            <h2 className='text-center text-2xl text-secondary font-bold'>Business Summary</h2>
            <div className='text-center grid grid-cols-1 sm:cols-1 text-xl'>
            <div class="stats shadow ">
  
  <div class="stat">
    <div class="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div class="stat-title">We Served</div>
    <div class="stat-value text-primary">100+ customers</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
  
  <div class="stat">
    <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div class="stat-title">Annual Revenue</div>
    <div class="stat-value text-accent">50+ Tools</div>
    <div class="stat-desc">33K+ Reviews</div>
    
  </div>
  
  <div class="stat">
    <div class="stat-figure text-secondary">
      <div class="avatar online">
        <div class="w-16 rounded-full">
          <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg" />
        </div>
      </div>
    </div>
    <div class="stat-value text-primary">Progress</div>
    <div class="stat-title">Tasks done</div>
    <div class="stat-desc text-secondary">28 tasks remaining</div>
  </div>
  
</div>
        </div>
        </div>
    );
};

export default Extra2;