import iphone from '/src/assets/iphone.jpg';
import { useState } from 'react';
function ForExternalCss() {
    const [buye, setBuy] = useState("buy now");
    return (
        <>
            <h1>For External CSS</h1>
        <div className="container">
        
            <div className="card">
                <img src={iphone} alt="iphon image" className="imgStyle" />
                <h2 className="cardTitle">Card Title</h2>
                <p className="cardDescription">This is an example of card using external CSS</p>
                <button className="cardButton" onClick={()=>setBuy(buye==="buy now"?"cancel":"buy now")}>{buye}</button>
            </div>
        
            <div className="card">
                <img src={iphone} alt="iphon image" className="imgStyle" />
                <h2 className="cardTitle">Card Title</h2>
                <p className="cardDescription">This is an example of card using external CSS</p>
                <button className="cardButton">Buy Now</button>
            </div>
        
            <div className="card">
                <img src={iphone} alt="iphon image" className="imgStyle" />
                <h2 className="cardTitle">Card Title</h2>
                <p className="cardDescription">This is an example of card using external CSS</p>
                <button className="cardButton">Buy Now</button>
            </div>
        
            <div className="card">
                <img src={iphone} alt="iphon image" className="imgStyle" />
                <h2 className="cardTitle">Card Title</h2>
                <p className="cardDescription">This is an example of card using external CSS</p>
                <button className="cardButton">Buy Now</button>
            </div>
        
            <div className="card">
                <img src={iphone} alt="iphon image" className="imgStyle" />
                <h2 className="cardTitle">Card Title</h2>
                <p className="cardDescription">This is an example of card using external CSS</p>
                <button className="cardButton">Buy Now</button>
            </div>
        
            <div className="card">
                <img src={iphone} alt="iphon image" className="imgStyle" />
                <h2 className="cardTitle">Card Title</h2>
                <p className="cardDescription">This is an example of card using external CSS</p>
                <button className="cardButton">Buy Now</button>
            </div>
        
            <div className="card">
                <img src={iphone} alt="iphon image" className="imgStyle" />
                <h2 className="cardTitle">Card Title</h2>
                <p className="cardDescription">This is an example of card using external CSS</p>
                <button className="cardButton">Buy Now</button>
            </div>
        </div>
        </>
    )
}
export default ForExternalCss;