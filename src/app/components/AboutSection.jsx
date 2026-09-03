"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-2 gap-2">
        <li>SQL</li>
        <li>Python</li>
        <li>Excel</li>
        <li>Power BI</li>
        <li>Tableau</li>
        <li>Figma</li>
        <li>Looker Studio</li>
        <li>PowerShell</li>
        <li>Power Automate</li>
        <li>Google Cloud</li>
        <li>Azure Devops</li>
        <li>Git</li>
        <li>R</li>
        <li>HTML & CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Michigan, Ann Arbor</li>
        <li>Bachelor of Science in Information, May 2025</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Generative AI Leader Certification</li>
        <li>Google Cloud AI Agents</li>
        <li>Databricks Fundamentals</li>
        <li>GitHub Foundations</li>
        <li>Microsoft DP-600: Fabric Analytics Engineer Associate</li>
        <li>Microsoft DP-700: Fabric Data Engineer Associate</li>
      </ul>
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
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hi, I&apos;m Annabel — a recent graduate from the University of Michigan School of Information, where I specialized in Data Analysis with minors in Business and Economics. I&apos;m passionate about bridging people, business, and technology to create data-driven solutions that make an impact.
            <br />
            <br />
            I enjoy turning complex data into clear insights that help businesses make smarter decisions, streamline processes, and uncover opportunities for growth. I&apos;m always eager to learn new tools, experiment with emerging technologies, and expand my skill set.
            <br />
            <br />
            In my free time, I enjoy dancing, fencing, playing tennis, and exploring new places. I also love hanging out with friends and family.
          </p>
          <div className="flex flex-row justify-start mt-8">
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
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
        <Image src="/images/my-pic.JPEG" width={500} height={500} className="rounded-lg mt-16" alt="Annabel Zhuang graduation photo" />
      </div>
    </section>
  );
};

export default AboutSection;
