import React from 'react'

const Card = ({name, email, id}) => {
    // const {name, email, id} = props;
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' >
        <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
  )
}

export default Card // With React.memo, the Card component will only re-render when its props (name, email, id) change, improving performance in cases where the Cardlist component re-renders due to parent component updates.

// This optimization is optional but can be beneficial in larger applications where you want to minimize unnecessary component renders.