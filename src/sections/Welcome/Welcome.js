import React from 'react';
import styles from './Welcome.module.css';
import PageTitle from '../../components/PageTitle';

const Welcome = () => {
  return (
    <div id="welcome" className={styles.main}>
      <div className={styles.container}>
        <PageTitle
          subheading="Welcome"
          heading="Message From The Secretariat"
        />
        <div className={styles.paragraph}>
          <p className="py-4">
            Welcome to KIMUN. You are about to lodge into an experience and an
            opportunity that will elevate and enhance your being as you seek to
            create a better capacity for yourself. Our world is equipped with
            series of opportunities, succinct ideas, employable innovations
            which all comes with its accompanying challenges. We believe in
            improving the mental and educational faculties of the youth who are
            the occupiers of tomorrow’s asserts. For this reason, the Kumasi
            International Model United Nations (KIMUN) has been a pivotal
            platform that seeks to give an occasion for youth and interested
            persons be heard, as we sharpen, train and equip them with the
            necessary skills of networking, researching ideas, teamwork,
            effective leadership and diplomacy.
          </p>
          <br />
          <p className="py-4">
            ​Our theme “Accelerating and Scaling up the Sustainable Development
            Goals”, will throw more light on where and how as youth and interest
            persons we can challenge ourselves in scaling up to achieving fully
            the SDGs as set by the United Nations. Delegates and Officials will
            be assigned a committee, a country, and a topic, wherein they must
            represent the specific interests of their assigned countries and
            committee. This is done to help delegates to well improve their
            knowledge in their respective represented countries and committees
            as they model them. Resolutions and conclusions made become solid
            academic works that will be published across for the consumption of
            the real actors in all selected topics under discussions in the
            various committees.
          </p>
          <br />
          <p className="py-4">
            ​As we conclude, it must be noted that the west and east look on the
            center to firmly hold, the center is Africa. For Africa to firmly
            hold, its youth must come up fully equipped, well poised to cease
            the moment and to journey the continents to its safest and
            anticipated venue the world expects us to be. KIMUN is that platform
            that is ready to create the needed leverage that will speed up the
            young men and women in Africa to help the great continent firmly
            hold the world. It will be a great honor to host and share the KIMUN
            22 experience with you come September 2022.
          </p>
          <br />
          <p className="py-4 text-center">~KIMUN22 Secretariat.</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
