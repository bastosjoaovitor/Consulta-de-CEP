function Title(props) {
    return (
        <>
            <h1 className={`text-center text-4xl font-bold ${props.className || ''}`}>
                {props.children}
            </h1>
        </>
    );
}

export default Title;