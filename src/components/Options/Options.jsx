const Options = ({onTrack, value, children} ) => {
 
    return <>
    <button onClick={onTrack}>{children}: {value}</button>
    </>
}

export default Options;