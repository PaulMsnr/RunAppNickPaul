import React from 'react';
import Layout from '../components/Layout';
import styles from '/components/Styles.module.css';

const Home = () => {
  return (
    <Layout>


    <div className={styles.contentWrap}>
      
     <div className={styles.cover}>
      <h1>RUN IT.</h1>
      
      <p>“I don’t run to add days to my life, I run to add life to my days.” <br/>— Ronald Rook</p>
      </div>
<hr/>
    {/* <section className={styles.quote}>
      <h3>“I don’t run to add days to my life, I run to add life to my days.” — Ronald Rook</h3>
    </section>
<hr/> */}
 
<section className={styles.features}>
  <h2>Features</h2>
  <div className={styles.featuresLayoutContainer}>
    {/* Row 1 */}
    <div className={styles.featureRow}>
      <div className={styles.feature}>
        <img src="/images/AI.jpeg" alt="Feature 1" className={styles.featureImageLeft} />
        <div>
          <h3>Artifical Intelligence</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate lacinia turpis, ut volutpat justo cursus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate lacinia turpis, ut volutpat justo cursus eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate lacinia turpis, ut volutpat justo cursus eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate lacinia turpis, ut volutpat justo cursus eget.</p>
        </div>
      </div>
    </div>

    {/* Row 2 */}
    <div className={styles.featureRow}>
      <div className={styles.feature}>
        <div>
        <h3>Artifical Intelligence</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate lacinia turpis, ut volutpat justo cursus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate lacinia turpis, ut volutpat justo cursus eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate lacinia turpis, ut volutpat justo cursus eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate lacinia turpis, ut volutpat justo cursus eget.</p>
        </div>
        <img src="/images/AI.jpeg" alt="Feature 2" className={styles.featureImageRight} />
      </div>
    </div>

    {/* Row 3 */}
    <div className={styles.featureRow}>
      <div className={styles.feature}>
        <img src="/images/AI.jpeg" alt="Feature 3" className={styles.featureImageLeft} />
        <div>
        <h3>Artifical Intelligence</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate lacinia turpis, ut volutpat justo cursus eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate lacinia turpis, ut volutpat justo cursus eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate lacinia turpis, ut volutpat justo cursus eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate lacinia turpis, ut volutpat justo cursus eget.</p>
        </div>
      </div>
    </div>
  </div>
  <br/>

</section>

<section className={styles.cardSection}>
  <h2>What others have to say about us!</h2>
  <div className={styles.cardLayoutContainer}>
    <div className={styles.card}>
      <h3>Mark Marky</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate lacinia turpis, ut volutpat justo cursus eget. Maecenas at ante a ante eleifend gravida. Aenean a sollicitudin odio. Vivamus sit amet feugiat libero. Quisque varius arcu justo, at semper odio bibendum sed. Nulla facilisi. Phasellus eu justo erat. Fusce ac odio orci. Integer at est vel elit vehicula vehicula id eget ante. Integer nec est id est tincidunt aliquam. Aliquam non tincidunt ex, non mattis tellus. Nulla vehicula, arcu nec feugiat ultrices, libero nulla aliquet tortor, a euismod augue massa eu libero. Nulla facilisi. Vivamus vestibulum ante sit amet ex volutpat, in iaculis purus cursus.</p>
    </div>
    <div className={styles.card}>
      <h3>Carla Carlay</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate lacinia turpis, ut volutpat justo cursus eget. Maecenas at ante a ante eleifend gravida. Aenean a sollicitudin odio. Vivamus sit amet feugiat libero. Quisque varius arcu justo, at semper odio bibendum sed. Nulla facilisi. Phasellus eu justo erat. Fusce ac odio orci. Integer at est vel elit vehicula vehicula id eget ante. Integer nec est id est tincidunt aliquam. Aliquam non tincidunt ex, non mattis tellus. Nulla vehicula, arcu nec feugiat ultrices, libero nulla aliquet tortor, a euismod augue massa eu libero. Nulla facilisi. Vivamus vestibulum ante sit amet ex volutpat, in iaculis purus cursus.</p>
    </div>
    <div className={styles.card}>
      <h3>Paul Nick</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate lacinia turpis, ut volutpat justo cursus eget. Maecenas at ante a ante eleifend gravida. Aenean a sollicitudin odio. Vivamus sit amet feugiat libero. Quisque varius arcu justo, at semper odio bibendum sed. Nulla facilisi. Phasellus eu justo erat. Fusce ac odio orci. Integer at est vel elit vehicula vehicula id eget ante. Integer nec est id est tincidunt aliquam. Aliquam non tincidunt ex, non mattis tellus. Nulla vehicula, arcu nec feugiat ultrices, libero nulla aliquet tortor, a euismod augue massa eu libero. Nulla facilisi. Vivamus vestibulum ante sit amet ex volutpat, in iaculis purus cursus.</p>
    </div>
  </div>
</section>
</div>
    </Layout>
  );
};

export default Home;
