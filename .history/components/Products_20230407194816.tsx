import React from "react";

const products = [
  {
    id: 1,
    name: `Tukda Rice`,
    price: `Rs 50`,
    desc: `Tukda rice is known for its small, round grains and its ability to absorb flavors well. It has a soft and sticky texture when cooked, making it ideal for dishes that require a slightly sticky rice.`,
    src: "/1.jpeg",
  },
  {
    id: 2,
    name: `Basmati Rice`,
    price: `Rs 80`,
    desc: `Basmati rice is one of the most prized rice varieties in the world, known for its long, slender grains and delicate, nutty flavor. It is grown primarily in the foothills of the Himalayas, where the soil and climate are ideal for its cultivation.`,
    src: "/2.jpeg",
  },
  {
    id: 3,
    name: `Premium Rice`,
    price: `Rs 120`,
    desc: ` A high-quality variety of rice that is considered to be superior to other types of rice in terms of its taste, texture, appearance, and nutritional value. Premium rice is grown under strict quality control.`,
    src: "/3.jpeg",
  },
  {
    id: 4,
    name: `Golden Stella Rice`,
    price: `Rs 75`,
    desc: `Golden Sella basmati has the delicious taste and visual appeal of pure Basmati, but with improved holding ability and resilience to over cooking. We simply parboil our signature basmati in its husk .`,
    src: "/4.jpg",
  },
  {
    id: 5,
    name: `Double chabi Rice`,
    price: `Rs 50`,
    desc: ` It is rich in various nutrients such as carbohydrates, fibres, and many more that balances the body in optimal conditions. It absorbs nutrients and easily changes starches to make less sticky dish.`,
    src: "/5.jpg",
  },
  {
    id: 6,
    name: `Premium Tukda  Rice`,
    price: `Rs 50`,
    desc: `tukda is a grain popular in Indian cooking. Rice is a low-fat complex carbohydrate that is quickly digested and rapidly made available to the muscles and other body systems and is therefore a perfect source of energy. Nutritional Facts. `,
    src: "/6.jpeg",
  },
  {
    id: 7,
    name: `Tukda Rice`,
    price: `Rs 50`,
    desc: `Basmati rice is a good source of carbohydrates, protein, and B vitamins, and is naturally gluten-free. It is also low in fat and sodium, making it a healthy choice for those watching their calorie intake or managing their blood pressure.`,
    src: "/7.jpeg",
  },
  {
    id: 8,
    name: `Brown Rice`,
    price: `Rs 50`,
    desc: `Brown rice is a whole grain rice that has not been stripped of its outer bran layer, unlike white rice. This means that brown rice retains more of its nutritional value, including fiber, vitamins, and minerals such as magnesium and selenium.`,
    src: "/9.jpeg",
  },
];
function Products() {
  return (
    <div className="py-20">
      <h2 className="text-4xl mb-8 text-center text-white font-semibold">
        Our Goods
      </h2>

      <div className="md:grid md:grid-cols-3 gap-4   overflow-hidden">
        {products?.map((product) => (
          <div key={product.id}>
            <div className="relative cursor-pointer block group">
              <img
                src={product.src}
                alt=""
                className="h-[350px] rounded-md w-full object-cover transition duration-500  opacity-60 sm:h-[450px]"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-extrabold  text-white">
                  {product.name}
                </h3>

                <p className="mt-1.5 max-w-[40ch] font-bold text-[16px] text-white/80">
                  {product.desc}
                </p>

                <span className="inline-block px-5 py-3 rounded-md mt-3 text-xs font-medium tracking-wide text-white uppercase bg-black">
                  {product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
