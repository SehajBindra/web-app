import React from "react";

const products = [
  {
    id: 1,
    name: `Tukda Rice`,
    price: `Rs 50`,
    desc: `Tukda rice is known for its small, round grains and its ability to absorb flavors well. It has a soft and sticky texture when cooked, making it ideal for dishes that require a slightly sticky rice.`,
    src: "/img1.jpg",
  },
  {
    id: 2,
    name: `Basmati Rice`,
    price: `Rs 80`,
    desc: `Basmati rice is a good source of carbohydrates, protein, and B vitamins, and is naturally gluten-free. It is also low in fat and sodium, making it a healthy choice for those watching their calorie.`,
    src: "/img2.jpg",
  },
  {
    id: 3,
    name: `Premium Rice`,
    price: `Rs 120`,
    desc: ` A high-quality variety of rice that is considered to be superior to other types of rice in terms of its taste, texture, appearance, and nutritional value. Premium rice is grown under strict quality control.`,
    src: "/img3.jpg",
  },
  {
    id: 4,
    name: `Golden Stella Rice`,
    price: `Rs 75`,
    desc: `Golden Sella basmati has the delicious taste and visual appeal of pure Basmati, but with improved holding ability and resilience to over cooking. We simply parboil our signature basmati in its husk .`,
    src: "/img4.jpg",
  },
  {
    id: 5,
    name: `Double chabi Rice`,
    price: `Rs 50`,
    desc: ` It is rich in various nutrients such as carbohydrates, fibres, and many more that balances the body in optimal conditions. It absorbs nutrients and easily changes starches to make less sticky dish.`,
    src: "/img5.jpg",
  },
  {
    id: 6,
    name: `Premium Tukda  Rice`,
    price: `Rs 50`,
    desc: `tukda is a grain popular in Indian cooking. Rice is a low-fat complex carbohydrate that is quickly digested and rapidly made available to the muscles and other body systems and is therefore a perfect source of energy. Nutritional Facts. `,
    src: "/img6.jpg",
  },
  {
    id: 7,
    name: `Tukda Rice`,
    price: `Rs 50`,
    desc: `Basmati rice is a good source of carbohydrates, protein, and B vitamins, and is naturally gluten-free. It is also low in fat and sodium, making it a healthy choice for those watching their calorie intake or managing their blood pressure.`,
    src: "/img7.jpg",
  },
  {
    id: 8,
    name: `Brown Rice`,
    price: `Rs 50`,
    desc: `Brown rice is a whole grain rice that has not been stripped of its outer bran layer, unlike white rice. This means that brown rice retains more of its nutritional value, including fiber, vitamins, and minerals such as magnesium and selenium.`,
    src: "/img8.jpg",
  },
];
function Products() {
  return (
    <div className="">
      <h2 className="text-4xl mb-8 text-center text-slate-200">Products</h2>
      {products?.map((product) => (
        <div key={product.id}>
          <div className="max-w-md mx-auto  my-8 overflow-hidden md:max-w-3xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img
                  className="h-56 w-full object-cover rounded-md md:h-full md:w-80"
                  src={product.src}
                  alt={product.name}
                />
              </div>
              <div className="p-8">
                <a
                  href=""
                  className="block mt-1 text-lg leading-tight font-medium text-[#ed00eb] hover:underline"
                >
                  {product.name}
                </a>
                <p className="mt-2  text-white/75">{product.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
