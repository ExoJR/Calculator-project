function Buttons() {


const imagesBtn = ['btn-c.png','btn-ce.png','btn-sign.png','btn-sqrt.png','btn-7.png','btn-8.png','btn-9.png','btn-prod.png','btn-4.png','btn-5.png','btn-6.png','btn-div.png','btn-1.png','btn-2.png','btn-3.png','btn-dif.png','btn-0.png','btn-dot.png','btn-sum.png','btn-equal.png',]


  


return (
  <ul className="buttons">
    {imagesBtn.map((image, index) => (
      <li key={index} id={`btn-${index}`} className="button" style={{
        background: `url(/assets/${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '96px 46px',
        backgroundPosition:'0px',
      }}></li>
    ))}
  </ul>
);
}


export default Buttons
