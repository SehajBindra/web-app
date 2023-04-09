import React from "react";

const keyfeatures = [
  {
    id: 1,
    name: "Transparency",
    desc: ` We believe in transparency and are open about our sourcing and production processes. We want our customers to know exactly where their rice comes from and how it was produced.

    `,
    img: "/trust.png",
  },

  {
    id: 5,
    name: "Customer Service",
    desc: ` We pride ourselves on providing excellent customer service. Our friendly and knowledgeable staff are always ready to answer any questions and provide assistance..
    `,
    img: "/support.png",
  },
  {
    id: 6,
    name: "Sustainability",
    desc: ` We are committed to sustainable farming practices and supporting local communities. When you choose our rice, you are not only getting a quality product but also supporting a sustainable and responsible business.`,
    img: "/sustainable.png",
  },
];

function KeyFeatures() {
  return (
    <div className="py-40 bg-white ">
      <h2 className="text-4xl text-black font-semibold md:text-4xl lg:text-5xl   capitalize mb-8 text-center ">
        why we Stand Out ?
      </h2>
      <div className="md:grid md:grid-cols-3 gap-0  overflow-hidden ">
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
                  <a className="block mt-1 text-lg leading-tight font-medium text-black/80 hover:underline">
                    {keyfeature.name}
                  </a>

                  <p className="mt-2 text-justify  -tracking-tighter   text-black/60">
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
