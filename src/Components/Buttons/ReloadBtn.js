import styles from "./ReloadBtn.module.css"
const ReloadBtn = () => {

    const reloadHandle = () =>{
     window.location.reload(true);
    }
    return ( 
        <div>
            <button className={styles.reloadbtn} onClick={reloadHandle}>Shopping page</button>
        </div>
     );
}
 
export default ReloadBtn;