import WithCounter from "../hoc/withCounter";

const ClickCounter = ({count, incrementCount,}) => {
    return ( 
        <div>
            <h2 onClick={incrementCount}>Clicked {count} times</h2>
        </div>
     );
}
 
export default WithCounter(ClickCounter , 5);