import React from 'react';

const Map = () => {
  return (
    <div className="mt-28 min-h-[400px]  bg-[url('https://raw.githubusercontent.com/ShaifArfan/AYANs-portfolio/main/src/assets/images/map.png')] bg-cover bg-fixed bg-center bg-no-repeat -z-10">
      <div className="relative min-h-[400px]">
        <div className="absolute -z-0 right-[10%] bottom-[10%] w-full max-w-xs rounded-[12px] bg-black p-8 text-white">
          <h3>2022 Conference</h3>
          <p>KNUST, Kumasi, Ghana</p>
          <a
            href="https://goo.gl/maps/6VPo5a4caMueKFAX8"
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
