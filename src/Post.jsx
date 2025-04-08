export function Post(props) {
    console.log(props);
    const { author, content } = props;
    return (
        <>
            <strong>{author}</strong>
            <p>{content}</p>
        </>
    )
}
