
function Star({pos}) {
    return (
        <div className="star" style={{'left':pos[0]+ 'vw', 'top':pos[1]+'vh'}}></div>
    )
}

export default function starGenerator(num) {
    let stars = []
    for (let i = 0; i < num; i++) {
      stars.push(<Star key={i} pos={[Math.random()*100, Math.random(0,100)*100]} />);
    }
    return stars;
  }