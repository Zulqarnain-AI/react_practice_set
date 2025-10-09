import iphone from '/src/assets/iphone.jpg';
import style from'./css/style.module.css';
function ForModularCss() {  
    return (
        <>
        <h1>For Modular CSS</h1>
        <div className={style.container}>

            <div className={style.card}>
                <img src={iphone} alt="iphon image" className={style.imgStyle} />
                <h2 className={style.cardTitle}>Card Title</h2>
                <p className={style.cardDescription}>This is an example of card using modular CSS</p>
            </div>
        </div>
        
        </>
    )
}
export default ForModularCss;