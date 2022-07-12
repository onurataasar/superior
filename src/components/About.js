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
      <div className=" mx-auto max-w-xl mt-4">
        <p className="text-5xl text-center text-gray-500 align-middle font-bold">
          What you will find
        </p>
        <p className="text-xl mt-4 text-gray-500 text-center font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus
          dui quis fermentum consectetur. Suspendisse orci sapien, interdum a
          blandit sit amet, hendrerit non lacus. Sed metus urna, consectetur at
          augue vitae, posuere placerat sem. Integer gravida ex tincidunt
          tincidunt vestibulum. Cras a gravida metus, id rhoncus metus. Nam
          condimentum odio turpis, ut suscipit est feugiat non. Vivamus non
          vulputate dolor. Nunc tristique magna non ligula efficitur viverra.
        </p>
      </div>
    </>
  );
};

export default About;
