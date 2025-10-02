import React from 'react';
import swimingImage from '../../assets/swimming.png'
import classImage from '../../assets/class.png'


import playImage from '../../assets/playground.png'
const Qzone = () => {
    return (
        <div className='bg-base-200 py-3'>
            <h2 className='font-bold md-5'>QZone</h2>
            <div className='space-y-5'>
                <img src={swimingImage} alt="" srcset="" />
                <img src={classImage} alt="" srcset="" />
                <img src={playImage} alt="" srcset="" />
            </div>
        </div>
    );
};

export default Qzone;