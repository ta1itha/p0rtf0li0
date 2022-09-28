import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import ExperienceResume from "../components/ExperienceResume";
import LinkedIn from "../components/LinkedIn";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, [router]);
  return (
    <>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => router.push("/edit")} type={"primary"}>
            Edit Resume
          </Button>
        </div>
      )}

      <Cursor />
      <div className="container mx-auto cursor-none mb-10">
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${
                mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
              } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="text-3xl font-bold">{name}</h1>
              <h2 className="text-xl mt-5">{resume.tagline}</h2>
              <h2 className="w-4/5 text-xl mt-5 opacity-50">
                {resume.description}
              </h2>
              <div className="mt-2">
                <Socials />
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Experience</h1>

                {resume.experiences.map(
                  ({ id, dates, type, position, about, bullets }) => (
                    <ProjectResume
                      key={id}
                      dates={dates}
                      type={type}
                      position={position}
                      about={about}
                      bullets={bullets}
                    ></ProjectResume>
                  )
                )}
              </div>

              <div className="mt-5">
                <h3 className="text-lg">
                  To see more of my work experience, please see my
                  <LinkedIn />
                </h3>
              </div>

              <div className="mt-5">
                <h1 className="text-2xl font-bold">Education</h1>
                {resume.education.map(
                  ({ id, dates, certification, universityName, bullets }) => (
                    <ExperienceResume
                      key={id}
                      dates={dates}
                      certification={certification}
                      universityName={universityName}
                      bullets={bullets}
                    ></ExperienceResume>
                  )
                )}
              </div>

              <div className="mt-5">
                <h1 className="text-2xl font-bold">Skills</h1>
                <div className="flex mob:flex-col desktop:flex-row justify-between">
                  {resume.languages && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Languages</h2>

                      <ul className="list-disc">
                        {resume.languages.map((language, index) => (
                          <li key={index} className="ml-5 py-2">
                            {language}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.front_end_frameworks && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Front End Frameworks</h2>
                      <ul className="list-disc">
                        {resume.front_end_frameworks.map((framework, index) => (
                          <li key={index} className="ml-5 py-2">
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.back_end_frameworks && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Back End Frameworks</h2>
                      <ul className="list-disc">
                        {resume.back_end_frameworks.map((framework, index) => (
                          <li key={index} className="ml-5 py-2">
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.database_exposure && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Database Exposure</h2>
                      <ul className="list-disc">
                        {resume.database_exposure.map((framework, index) => (
                          <li key={index} className="ml-5 py-2">
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <div className="flex mob:flex-col desktop:flex-row justify-between">
                  {resume.spoken_languages && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Spoken Languages</h2>
                      <ul className="list-disc">
                        {resume.spoken_languages.map((language, index) => (
                          <li key={index} className="ml-5 py-2">
                            {language}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.styling_exposure && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Styling</h2>
                      <ul className="list-disc">
                        {resume.styling_exposure.map((style, index) => (
                          <li key={index} className="ml-5 py-2">
                            {style}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.work_tool_exposure && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Tools</h2>
                      <ul className="list-disc">
                        {resume.work_tool_exposure.map((tool, index) => (
                          <li key={index} className="ml-5 py-2">
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.file_format_exposure && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">File Formats</h2>
                      <ul className="list-disc">
                        {resume.file_format_exposure.map((format, index) => (
                          <li key={index} className="ml-5 py-2">
                            {format}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.ci_cd_exposure && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">CI/CD</h2>
                      <ul className="list-disc">
                        {resume.ci_cd_exposure.map((tool, index) => (
                          <li key={index} className="ml-5 py-2">
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
