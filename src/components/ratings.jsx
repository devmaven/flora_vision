import React from 'react'

function Ratings({rate}) {
    let whole = Math.floor(rate);
    let decimal = rate - whole;
    let star = Array(whole).fill(1)
    
    // let arr = Array(4.5).fill(4)
    console.log(star)
  return (
    <div className="flex gap-x-2 items-center">
      {star.map((st, index) => {
        return <img key={`star-${index}`} src={"/images/star.png"} width={16} />;
      })}
      {decimal !== 0 && <img src={"/images/halfStar.png"} width={8} />}
    </div>
  );
}

export default Ratings