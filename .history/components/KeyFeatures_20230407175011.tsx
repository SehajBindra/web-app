import React from "react";

const keyfeatures = [
  {
    id: 1,
    name: "Quality Products",
    desc: `Sachdeva Traders provides high-quality rotten rice grains
    that are carefully sourced and screened to ensure freshness
    and quality.`,
    img: "/products.png",
  },

  {
    id: 5,
    name: " Wide Selection",
    desc: ` we offers a wide selection of rotten rice grains that are
    suitable for various agricultural uses, animal feed,
    composting, and more.
    `,
    img: "/selection.png",
  },
  {
    id: 6,
    name: "Pan India Shipping",
    desc: `we also offer pan India shipping, allowing customers from all over India to access your high-quality rotten rice grains.`,
    img: "/shipping.png",
  },
];

function KeyFeatures() {
  return (
    <div className="py-40 bg-gray-900 ">
      <h2 className="text-4xl text-white md:text-4xl lg:text-5xl   capitalize mb-8 text-center ">
        why us ?
      </h2>
      <div className="md:grid md:grid-cols-2 gap-0  overflow-hidden ">
        {keyfeatures.map((keyfeature) => (
          <div key={keyfeature.id}>
            <div className="max-w-xs flex flex-col  md:flex-row    mx-auto  my-8 overflow-hidden md:max-w-sm rounded-md cursor-pointer">
              <div className=" flex flex-col md:flex-col   justify-center items-center mx-auto">
                <div className="md:shrink-0 md:p-4 mx-auto ">
                  <img
                    className="object-cover h-24 w-24  md:h-40 md:w-40"
                    src={keyfeature.img}
                    alt=""
                  />
                </div>
                <div className="p-8">
                  <a className="block mt-1 text-lg leading-tight font-medium text-gray-200 hover:underline">
                    {keyfeature.name}
                  </a>

                  <p className="mt-2 text-justify  -tracking-tight   text-white/60">
                    {keyfeature.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KeyFeatures;
