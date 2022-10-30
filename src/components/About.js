import React from "react";

const About = () => {
  return (
    <>
      <div className="mt-4">
        <img
          className="w-16 mx-auto"
          id="worm"
          src="/worm.png"
          alt="worm"
        ></img>
      </div>
      <div className=" mx-auto w-3/5 mt-4">
        <p className="text-5xl text-center text-gray-500 align-middle font-bold">
          What you will find
        </p>
        <p className="text-xl mt-4 text-gray-500 text-center font-semibold">
          Watching movies is fun, but figuring out what movie to watch next is a
          nerve-racking experience. Endlessly scrolling through Netflix,
          watching trailers on YouTube, looking up IMDb ratings, wasting half an
          hour and still cannot decide what to watch – does this seem familiar
          to you? Then you have landed on the right page! Superior’s is the
          answer to the question “What movie should I watch?”! Your film choices
          are about to be simplified greatly.
        </p>
        <div className="about-card-container grid grid-flow-col items-center justify-center grid-rows-2 gap-6 mt-12">
          <div className="about-card">
            <h1>
              Top tier <span className="font-bold"> trending movies</span> from
              theatres
            </h1>
          </div>
          <div className="about-card">
            <h1>
              Random <span className="font-bold"> movie suggestion</span> if you
              can't decide
            </h1>
          </div>
          <div className="about-card">
            <h1>
              The list of the{" "}
              <span className="font-bold"> top rated movies</span> by the
              viewers
            </h1>
          </div>
          <div className="about-card">
            <h1>
              Top tier <span className="font-bold"> shows and series</span> from
              TV
            </h1>
          </div>
          <div className="about-card">
            <h1>
              Random <span className="font-bold"> show suggestion</span> if you
              can't decide
            </h1>
          </div>
          <div className="about-card">
            <h1>
              {" "}
              <span className="font-bold">
                {" "}
                The most trendy shows and series
              </span>{" "}
              from TV & Netflix
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
