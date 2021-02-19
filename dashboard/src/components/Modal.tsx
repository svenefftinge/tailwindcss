
export default function Modal(props: { 
    children: React.ReactChild[], 
    visible?: boolean
}) {
    return props.visible ? <div className="absolute top-0 left-0 bg-black bg-opacity-40 z-50 w-screen h-screen" >
            <div className="bg-transparent h-1/3"/>
            <div className="bg-white rounded-md px-6 py-6 max-w-lg mx-auto">
                {props.children}
            </div>
        </div>: null;
}