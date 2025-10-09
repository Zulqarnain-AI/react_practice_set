
import style from 'styled-components'
const Heading= style.h1`
  color:blue;
  text-align:center;
  font-size:30px;
  `
  const Subheading= style.h2({
    color:"green",
    textAlign:"center",
    fontSize:"20px"
  })
function StyledComponent() {
    return (
        <div>
            {/* styled component */}
            <h1>Styled Component</h1>
            <Heading>Styled Component</Heading>
            <Subheading>This is Subheading</Subheading>
        </div>
    )
}
export default StyledComponent