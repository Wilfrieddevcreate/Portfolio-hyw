"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div>
        <ul className="list-none pl-2 flex flex-row space-x-4">
        <span className="text-orange-500 bg-primary-500"> - </span><li>HTML</li>
          <li className="mb-5">CSS</li>
          <li>TailwindCSS</li>
          <li>Bootstrap</li>
        
        </ul>
        <ul className="list-none pl-2 flex flex-row space-x-4">
       <span className="text-orange-500 bg-primary-500"> - </span> <li className="mb-5">Javascript</li>
          <li>ReactJS</li>
          <li>VueJS</li>
          <li>NextJS</li>
          <li>NestJS</li>
          <li>NuxtJS</li>
          <li>Express</li>
        </ul>
        <ul className="list-none pl-2 flex flex-row space-x-4">
          
        <span className="text-orange-500 bg-primary-500"> - </span><li className="mb-5">PHP</li>
          <li>Laravel</li>
          <li>Symfony</li>
        </ul>
       <ul className="list-none pl-2 flex flex-row space-x-4">
       <span className="text-orange-500 bg-primary-500"> - </span> <li className="mb-5">MySql</li>
          <li>Mongodb</li>
          <li>SqLite</li>
        </ul>
        <ul className="list-none pl-2 flex flex-row space-x-4">
       <span className="text-orange-500 bg-primary-500"> - </span> <li className="mb-5">GIT</li>
          <li>DOCKER</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div>
      <ul className="list-disc pl-2">
        <li className="font-bold">Coding Academy à Epitech Bénin <span className="text-[#db2777]">Juin 2023</span></li>
      </ul>
      <ul className="list-none mb-4">
        <li>During this training, I had to learn how to develop web and mobile applications through a complete project that involved getting to grips with a technology like ReactJS, VueJS NestJS. </li>
      </ul>
      <ul className="list-disc pl-2">
        <li className="font-bold">Developpement web et mobile à Alopro Academy  <span className="text-[#db2777]">Février 2022 </span></li>
      </ul>
      <ul className="list-none mb-4">
        <li>During this course, we learned how to develop mobile applications with bluestack, we created facebook chatboxes, telegrams and we learned how to create applications with VueJS. </li>
      </ul>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About message"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I m a full-stack web developer with a passion for creating
            interactive and responsive web applications. I have experience with
            JavaScript, React, NextJS, VueJS, Express, ReactNative, HTML, CSS
            with its frameworks like tailwindCss and bootstrap, Php with Laravel
            and finally Git. I m a quick learner and always looking to expand my
            knowledge and skills. I m a team player and excited to work with
            others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start space-x-10 mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
