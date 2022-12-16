

const AnimatedText = ({texts, role}) => {
    return (
        <>
          
          {
            texts.split("").map(function(char, index) {
            let style = {"animationDelay": (0.5 + index / 10) + "s"}
            return <span
              aria-hidden="true"
              key={index}
              style={style}>
              {char}
            </span>
            })
        
        }
        
        </>
    )
}

export default AnimatedText;