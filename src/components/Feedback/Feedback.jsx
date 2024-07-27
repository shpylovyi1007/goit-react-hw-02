const Feedback = ({ value, children}) => {
    return <>
        <p>{children}:{value}</p>
    </>
}

export default Feedback;