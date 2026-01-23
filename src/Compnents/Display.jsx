const Display = (props) => {
    return (

        <div className="grid justify-around mt-10  bg-gray-500 rounded-lg p-4 mx-20 items-cneter font-serif font-semibold text-white">
            <div className="flex items-center gap-2">
                <h5>Pak</h5>
                <h5>{props.runs}-{props.wict}</h5>
            </div>
            <div className="flex items-center">
                {props.bowls}.{props.over} overs
            </div>
            <div className="grid items-center">
                <h6>Baber  0 o</h6>
                <h6>kohli  0 o</h6>
            </div>
        </div>
    )
}
export default Display