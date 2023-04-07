import React from "react";

const NewCol = [
  { id: 1, img: ``, name: "", cta: "Shop Now" },
  { id: 2, img: ``, name: "", cta: "Shop Now" },
  { id: 3, img: ``, name: "", cta: "Shop Now" },
];

function NewCollection() {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-white sm:text-3xl">
            New Arrivals
          </h2>

          <p className="max-w-md mx-auto mt-4 text-white/90">
            Welcome to our new arrivals section, where we feature the latest
            rice varieties to join our collection. We are excited to introduce
            you to our new harvest and season's rice that are sure to delight
            your taste buds and elevate your cooking experience.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          <li>
            <a href="#" className="relative block group">
              <img
                src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="object-cover rounded-md  w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">
                  Casual Trainers
                </h3>

                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default NewCollection;
