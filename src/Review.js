import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, text, image} = people[index];

  const prevPerson= () => {
    setIndex(index - 1);
    if (index==0){
      setIndex(people.length - 1);
    }
  }
  const nextPerson= () => {
    setIndex(index + 1);
    if (index==people.length - 1){
      setIndex(0);
    }
  }
  const randomPerson= () => {
    let x=Math.floor(Math.random() * people.length)
    setIndex(x);
    while (index==x){
      x=Math.floor(Math.random() * people.length)
      setIndex(x);
    }
  }

  return <article className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className='person-img'/>
      <span className='quote-icon'>
        <FaQuoteRight />
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className='button-container'>
      <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft/>
      </button>
      <button className='next-btn' onClick={nextPerson}>
        <FaChevronRight/>
      </button>
    </div>
    <button className='random-btn' onClick={randomPerson}>
        Surprise me
      </button>
  </article>;
};

export default Review;
