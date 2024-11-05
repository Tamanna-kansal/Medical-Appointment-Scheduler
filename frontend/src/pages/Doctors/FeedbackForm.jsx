import React, { useState } from 'react'
import {AiFillStar} from 'react-icons/ai'

function FeedbackForm() {
    const [rating,setRating] =useState(0);
    const [hover,setHover] =useState(0);
    const [reviewText,setReviewText]=useState(0);
    const handleSubmitReview=async e =>{
        e.preventDefault();
        // later we will use our api
    }
  return (
    <form action="">
        <div>
            <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
                How would u rate the overall Experience?*
            </h3>

            <div>
                {[...Array(5).keys()].map((_,index)=>{
                    index+=1;
                    return(
                        <button key={index} type="button" className={`${index<=((rating && hover) || hover )
                        ? 'text-yellowColor'
                        :'text-gray-400'
                    }
                        bg-transparent border-none outline-none text-[22[x] cursor-pointer] `}
                        onClick={()=>setRating(index)} onMouseEnter={()=>setHover(index)}
                        onMouseLeave={()=>setHover(rating)}
                        onDoubleClick={()=>{
                            setHover(0);
                            setRating(0);
                        }
                        }>
                            <span>
                                <AiFillStar/>
                            </span>
                        </button>
                    )
                })}
            </div>
        </div>

        <div className='mt-[30px]'>
        <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
                How would u rate the overall Experience?*
            </h3>
            <textarea className='border border-solid border-[#0066ff34] focus:outline-priamryColor w-full px-4 py-3 rounded-md'  rows="5" placeholder='Write your message'
            onChange={()=>setReviewText(e.target.value)}
            ></textarea>
        </div>
        <button type='submit' onClick={handleSubmitReview} className='btn'>Submit Feedback</button>

    </form>
  )
}

export default FeedbackForm
