import React from "react";
import styles from "./style";
import {
  Navbar,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Hero,
  Footer,
} from "./components";

const App = () => (
  <div className="w-full h-auto flex items-center justify-center bg-primary">
    <div className="bg-primary max-w-screen-xl mx-auto overflow-hidden">
      <div className={`${styles.paddingX}${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX}${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX}${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export default App;
