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
            <img className={styles.pot} src="assets/images/image (1).png" alt="Product Motor" />
          </div>
          <div className={styles.productDetailDescription}>
            <h2>
              Applying stepping motor and Arduino
            </h2>
            <p>
              The motor mechanism plays a crucial role in controlling the vibrations and adjusting the plant's growth pattern according to user interactions. 
              It adds a dynamic element to the project, making it both engaging and functional.

              This diagram shows a circuit setup for controlling a unipolar stepper motor using an Arduino UNO and a ULN2003 driver IC. 
              Here’s a breakdown of the components and their connections:
              <li>Arduino UNO: The central microcontroller used to control the stepper motor.</li>
              <li>ULN2003 Driver IC: This is used to interface between the Arduino and the stepper motor. It can handle the higher current required by the motor.</li>
              <li>  Unipolar Stepper Motor: The motor being controlled in the circuit. It has five wires (four coil wires and one common wire).</li>
              <li>9V Battery: Provides external power to the motor through the driver circuit, as the Arduino cannot supply enough current directly to the stepper motor.</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsScreen;
