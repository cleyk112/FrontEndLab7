import styles from "./Letterboxd.module.css";

function Letterboxd(props) {
  return (
    <div className={styles.Letterboxd}>
      {props.products.map((item, index) => (
        <div style={{ backgroundImage: `url("${item.img}")`, backgroundSize: "374px"}} key={index}>
          <div className={styles.title}>
            <h3>{item.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}


export default Letterboxd;
