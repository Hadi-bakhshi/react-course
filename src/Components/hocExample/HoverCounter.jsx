import WithCounter from "../hoc/withCounter";

const HoverCounter = ({count, incrementCount}) => {
    return ( 
        <div>
            <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
        </div>
     );
}
 
export default WithCounter(HoverCounter , 10);