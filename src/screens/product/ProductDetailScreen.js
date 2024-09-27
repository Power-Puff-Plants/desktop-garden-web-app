import styles from "./ProductDetailScreen.module.css";

const ProductDetailsScreen = () => {
  return (
    <div className={styles.ProductDetailScreen}>
      <div className={styles.ProductDetailScreenTitle}>
        <p>Product Detail</p>
      </div>
      <div className={styles.content}>
        <div className={styles.dataContainerHolder}>
          <div className={styles.productDetailDescriptionContainer}>
          <img className={styles.pot} src="/assets/images/3d design.jpg" alt="Product Motor" />
          </div>
          <div className={styles.productDetailDescription}>
            <h2>
              DESIGN DRAFT
            </h2>
            <p>
            This flowerpot design combines mechanical and electronic components to create an interactive, posture-sensitive flowerpot that reacts by blooming or closing its petals, potentially offering a unique reward or alert system.            
            </p>
          </div>
        </div>

        <div className={styles.dataContainerHolder}>
          <div className={styles.productDetailDescriptionContainer}>
            <img className={styles.pot} src="/assets/images/3d design.jpg" alt="Product Motor" />
          </div>
          <div className={styles.productDetailDescription}>
            <h2>
              MOTOR
            </h2>
            <p>
              The motor mechanism plays a crucial role in controlling the vibrations and adjusting the plant's growth pattern according to user interactions. It adds a dynamic element to the project, making it both engaging and functional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsScreen;
