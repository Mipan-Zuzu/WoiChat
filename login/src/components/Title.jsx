 const Title = (props) => {
    const {children, size} = props
    return <h1 className={`${size} mb-2`}>{children}</h1>
}

export default Title