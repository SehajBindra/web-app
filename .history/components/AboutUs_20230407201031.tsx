import React from "react";

function AboutUs() {
  return (
    <div>
      <div className="2xl:container bg-white 2xl:mx-auto lg:py-8 lg:px-20 md:py-8 pb-40 md:px-6 py-4 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl text-center my-4 lg:text-5xl font-bold leading-9 text-black pb-4">
              About Us
            </h1>
            <p className="font-normal text-justify -tracking-tighter text-base leading-6 text-black/80">
              Welcome to our rice enterprise! We are a company committed to
              providing high-quality rice products to our customers. Our mission
              is to bring the best of the world's rice to your plate, and to do
              so with a commitment to sustainable agriculture and responsible
              business practices. In this section, we will give you a detailed
              overview of our company, our values, and our approach to rice
              production.
            </p>

            <p className="font-normal text-justify -tracking-tighter text-base leading-6 text-black/80 my-8">
              Our company was founded over thirty years ago by a group of rice
              farmers who were passionate about the quality and sustainability
              of their product. At the time, the rice industry was dominated by
              large corporations who prioritized profits over quality and
              sustainability. These farmers saw an opportunity to create a
              company that would do things differently.
            </p>
          </div>
          <div className="w-full lg:w-8/12">
            <img
              className="w-full rounded-lg object-cover h-[400px]"
              src="https://images.unsplash.com/photo-1562525882-d9dabe507593?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1945&q=80"
              alt="about us"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
