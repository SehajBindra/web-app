import React from "react";

function NewCollection() {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
            <div className="max-w-md mx-auto text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  New Season's Rice
                </h2>

                <p className="mt-4 text-gray-500">
                  Welcome to our "New Season's Rice" section, where we are
                  excited to introduce our latest rice harvest. Our new season's
                  rice is the freshest and highest quality rice available on the
                  market. We take great pride in our rice, and this season's
                  harvest is no exception.
                </p>
              </header>

              <a
                href="#"
                className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
              >
                Shop All
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <a href="#" className="block group">
                  <img
                    src="https://img.freepik.com/free-photo/top-view-raw-rice-inside-plate-dark-desk_179666-27235.jpg?w=900&t=st=1680875292~exp=1680875892~hmac=62e853db4d3d1f73743937197247a20770817bb487657be6011defd1f712a198"
                    alt=""
                    className="object-cover w-full rounded aspect-square"
                  />

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      Simple Watch
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">RS 150</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="block group">
                  <img
                    src="https://img.freepik.com/free-photo/top-view-various-kinds-produce-from-rice-place-wooden-floor_1150-34317.jpg?t=st=1680875332~exp=1680875932~hmac=a34ece03d8a2f8fa9c4fc788ba077c7bb411ab37c5a816efbad98d6753146a89"
                    alt=""
                    className="object-cover w-full rounded aspect-square"
                  />

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      Simple Watch
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">RS 150</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewCollection;
