
export default function Text(props: {
    placeholder?: string
    value?: string
    onChange?: ()=>void
}) {
    return <input type="text" className="text-xs block w-56 font-medium text-gray-500 rounded-md bg-gray-100 border-gray-300 border-2 focus:border-gray-300 focus:bg-white focus:ring-0" value={props.value} placeholder={props.placeholder||''}/>;
}