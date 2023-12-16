// Modal.tsx
import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import Mp4 from '../../../vids/sb/r_simon1.mp4';
import QRcode from '../../../Imgs/qr.png';
import Qrcode from './QrCode';
const SimonTour: React.FC = () => {

  return (
    <dialog id="SimonTour" className="modal">
      <div className="modal-box mr-80 max-w-7xl">

        <div>
          <video className="w-screen rounded-xl"
            width="640"
            height="360"
            autoPlay
            controls
          >
            <source src={Mp4} type="video/mp4" />
            <source src={Mp4} type="video/ogg"></source>
            {/* You can add multiple source elements for different video formats */}
            Your browser does not support the video tag.
          </video>

        </div><div className="modal-action justify-center">
          <a onClick={() => document.getElementById('qrcode').showModal()} className="btn ">Finish Navigating</a>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
      <Qrcode />
    </dialog>
  );
};

export default SimonTour;