import iphone from '/src/assets/iphone.jpg'
import { useState } from 'react'
function DynamicStyling() {
    const [direction, setDirection] = useState('column');
    const style = {
        color: 'black',
        backgroundColor: 'lightblue',
        width: '200px',
        padding: '0px',
        borderRadius: '10px'
    }

    const imgStyle = {
        width: '200px',
        borderRadius: '10px'
    }

    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        flexDirection: `${direction}`,
        gap: '20px'
    }
    return (
        <>
        
            <h2>dynamic syting...</h2>
            <button onClick={()=>{setDirection(direction==='column'?'row':'column')}}>change direction</button>
        <div style={containerStyle}>
            <div style={style}>
                <img src={iphone} alt="iphon image" style={imgStyle} />
                <p>this is a paragraph</p>

            </div>

            <div style={style}>
                <img src={iphone} alt="iphon image" style={imgStyle} />
                <p>this is a paragraph</p>

            </div>

            <div style={style}>
                <img src={iphone} alt="iphon image" style={imgStyle} />
                <p>this is a paragraph</p>

            </div>

            <div style={style}>
                <img src={iphone} alt="iphon image" style={imgStyle} />
                <p>this is a paragraph</p>

            </div>

            <div style={style}>
                <img src={iphone} alt="iphon image" style={imgStyle} />
                <p>this is a paragraph</p>

            </div>

            <div style={style}>
                <img src={iphone} alt="iphon image" style={imgStyle} />
                <p>this is a paragraph</p>

            </div>

            <div style={style}>
                <img src={iphone} alt="iphon image" style={imgStyle} />
                <p>this is a paragraph</p>

            </div>

            <div style={style}>
                <img src={iphone} alt="iphon image" style={imgStyle} />
                <p>this is a paragraph</p>

            </div>

            <div style={style}>
                <img src={iphone} alt="iphon image" style={imgStyle} />
                <p>this is a paragraph</p>

            </div>

            <div style={style}>
                <img src={iphone} alt="iphon image" style={imgStyle} />
                <p>this is a paragraph</p>

            </div>

            <div style={style}>
                <img src={iphone} alt="iphon image" style={imgStyle} />
                <p>this is a paragraph</p>

            </div>

        </div>
        </>
    )
}
export default DynamicStyling;