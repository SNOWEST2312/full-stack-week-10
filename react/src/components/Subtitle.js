const Subtitle = props => {

    // the return value from a component is what gets rendered
    // Curly brackets {} indicate that we're inserting some JS
    // make the text bigger and change its color:
    let styleObject = {
        // font-size in CSS becomes fontSize in JS
        fontSize: '1.5rem'
    }
    return <p style={styleObject} className="subtitle">{props.text}</p>;
}
export default Subtitle;