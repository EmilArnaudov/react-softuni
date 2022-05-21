export default function UnorderedList(props) {
    return (
        <>
            <ul>
                {props.items.map(item => <li key={Math.random()}>{item}</li>)}
            </ul>
        </>
    )
}