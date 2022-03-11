import React from 'react';

const Map = () => {
  return (
    <div className="mt-28 min-h-[400px]  bg-[url('https://raw.githubusercontent.com/ShaifArfan/AYANs-portfolio/main/src/assets/images/map.png')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="relative min-h-[400px]">
        <div className="absolute right-[10%] bottom-[10%] w-full max-w-xs rounded-[12px] bg-black p-8 text-white">
          <h3>2022 Conference</h3>
          <p>Some Place,Kumasi, Ghana</p>
          <a
            href="https://goo.gl/maps/KGp7XyqDxLVLBRxM7"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Open In Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default Map;
