import React from 'react'
import SectionWrapper from './sectionWrapper';
import p_1 from '/images/i_1.png'
import user1 from '/images/user1.png'
import user2 from '/images/user2.png'
import user3 from '/images/user3.png'
import Ratings from './ratings';


function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      image: user1,
      name: "Shelly Russel",
      rating: 4.5,
      desc: "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!",
    },
    {
      id: 2,
      image: user2,
      name: "Lula Rolfson",
      rating: 4.5,
      desc: "Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
    },
    {
      id: 3,
      image: user3,
      name: "Carol Huels",
      rating: 4.5,
      desc: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
    },
  ];
  return (
    <SectionWrapper id="top" sectionHeading={"Customer Review"}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ">
        {reviews.map((review, index) => {
          return (
            <div key={`user-${index}`} className="  border border-gray-600 glass p-8 space-y-8">
              <div className='flex gap-x-6 justify-center'>
                <div className='rounded-full w-12 h-12 bg-cover bg-center bg-no-repeat ' style={{backgroundImage:`url(${review.image})`}}>
                </div>
                <div>
                  <p className='font-bold '>{review.name}</p>
                  <Ratings rate={review.rating}/>
                </div>
              </div>
              <div>
                <p className='text-sm'>{review.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

export default CustomerReviews