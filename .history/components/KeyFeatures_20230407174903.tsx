import React from "react";

function KeyFeatures() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Why We Stand out?
          </h2>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
            />
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <img className="h-20 w-20 object-cover" src="" alt="" />
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Health Benefits
              </h3>
              <p className="mt-4 text-base  text-gray-600">
                Our rice is not only delicious but also nutritious. It is a
                great source of carbohydrates, vitamins, and minerals. We offer
                a variety of rice products, including whole-grain and organic
                options, which are perfect for those looking for healthier
                alternatives.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center  mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <img
                  className="h-20 w-20 object-cover"
                  src="/support.png"
                  alt=""
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Customer Service
              </h3>
              <p className="mt-4 text-base text-gray-600">
                We pride ourselves on providing excellent customer service. Our
                friendly and knowledgeable staff are always ready to answer any
                questions and provide assistance.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700"> 3 </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                Sustainability
              </h3>
              <p className="mt-4 text-base text-gray-600">
                We are committed to sustainable farming practices and supporting
                local communities. When you choose our rice, you are not only
                getting a quality product but also supporting a sustainable and
                responsible business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeyFeatures;
