import React from 'react';
import Marquee from 'react-fast-marquee';




const news = [
    {
        "id": 1,
        "news": "Middle East Escalation: US targets Iranian missile sites in new round of self-defense strikes."
    },
    {
        "id": 2,
        "news": "Cruise Ship Alarm: Spanish citizen evacuated from hantavirus-hit vessel tests positive."
    },
    {
        "id": 3,
        "news": "Kyiv Under Fire: Russia fires powerful ballistic missile in latest mass aerial attack."
    },
    {
        "id": 4,
        "news": "Hospital Tragedy: Six newborns die in Moghbazar hospital ward; official investigation launched."
    },
    {
        "id": 5,
        "news": "Epidemic Spike: Measles death toll surges past 500 amid rapid regional outbreak."
    },
    {
        "id": 6,
        "news": "Heatwave Crisis: Severe European heatwave breaks all-time temperature records across multiple nations."
    },
    {
        "id": 7,
        "news": "Redistricting U-Turn: South Carolina Republicans drop major voting map change proposal."
    },
    {
        "id": 8,
        "news": "Diplomatic Fallout: State Department scrambles after brief posting of controversial Marco Rubio remarks."
    },
    {
        "id": 9,
        "news": "Club Shakeup: India reviews 30-year-old exclusive membership process for historic Gymkhana Club."
    },
    {
        "id": 10,
        "news": "Tech Guidelines: New international wellness frameworks spark major digital health integration surge."
    }
]


const BreakingNews = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-300 container mx-auto' >
            <button className='btn bg-red-400'>Latest</button>
            <Marquee pauseOnHover={true} autoFill={false} speed={50}>
               {
                news.map(n=>{
                    return <span key={n.id}>{n.news}</span>
                })
               }
            </Marquee>
        </div>
    );
};

export default BreakingNews;