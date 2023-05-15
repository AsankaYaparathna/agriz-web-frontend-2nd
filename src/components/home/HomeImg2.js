import React from 'react';
import HomeImg2 from './../../assets/Images/Group 70.png';

function TextBlock() {
  const styles = {
    textblock: {
      backgroundColor: '#ffffff',
    //   height: '30vh',
    },



  };

  return (
    <div style={styles.textblock} id="textblock">
      <div style={styles.textblockContainer} id="textblock-container">
        {/* Add your content here */}
      </div>
      <img
        src={HomeImg2}
        alt="Alternative Text Here"
        style={{ maxWidth: '100%' }}
      />
    </div>
  );
}

export default TextBlock;
