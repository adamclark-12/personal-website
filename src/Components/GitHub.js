import { FaGithub } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import React from "react";
import axios from "axios";
import ImageSlider from "./ImageSlider";
const GitHub = () => {
  const [repos, setRepos] = React.useState([]);
  React.useEffect(() => {
    const getRepos = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/adamclark-12/repos?page=1&per_page=6&sort=updated`
        );
        setRepos(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }; /*Using the user name your github get all your repos */
    getRepos();
  }, []);

  return (
    <div className=" bottom-0 left-0 right-0 text-slate-200">
      <header>
        <h1 className="font-h1Font text-8xl  text-center ">GitHub page</h1>
        <h2 className="font-h2Font text-center pt-7 text-xl">
          Here is a link to my GitHub <BsArrowRightShort className="inline" />
          <a href="https://github.com/adamclark-12">
            <FaGithub className="inline sidebar-icon hover:bg-[#F7B023]" />
          </a>
        </h2>
        <br />
        <p className="font-pFont text-lg  text-center pb-10 mb-16">
          Below are some screenshots and information on some of the current
          projects that I'm working on
          <br />
          Click a project to be taken to the source code{" "}
        </p>
      </header>
      <section className="flex justify-items-center justify-center overflow-hidden ">
        <ImageSlider className="" />
      </section>
      <section>
        <h1 className="font-h1Font text-8xl  text-center ">Projects</h1>
        {/* This section uses the repos and displays them to the page */}
        <div className="font-pFont m-5 grid grid-flow-row-dense grid-cols-3 grid-rows-3 ">
          {repos.map((repo) => (
            <li
              className="flex justify-center rounded-2xl hover:text-white hover:rounded-lg border-2 border-amber-500"
              key={repo.id}
            >
              <a href={repo.html_url}>
                <h4 className="underline flex justify-center text-bold">
                  {repo.name}
                </h4>
                <p className="p-10 mb-20px flex justify-center">
                  {repo.description}
                </p>
              </a>
            </li>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GitHub;
