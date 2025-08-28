import {
  Flex,
  Box,
  Tooltip,
  Image,
  Heading,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";

function Skills() {
  const categories = [
    {
      title: "🚀 Languages & Core",
      skills: [
        {
          src: "https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white",
          label: "C++",
        },
        {
          src: "https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=white",
          label: "C",
        },
        {
          src: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white",
          label: "Java",
        },
        {
          src: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
          label: "Python",
        },
        {
          src: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
          label: "JavaScript",
        },
        {
          src: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
          label: "HTML5",
        },
        {
          src: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
          label: "CSS3",
        },
      ],
    },
    {
      title: "🎨 Frontend & UI",
      skills: [
        {
          src: "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black",
          label: "React",
        },
        {
          src: "https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white",
          label: "Redux",
        },
        {
          src: "https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white",
          label: "TailwindCSS",
        },
        {
          src: "https://img.shields.io/badge/ChakraUI-319795?style=for-the-badge&logo=chakraui&logoColor=white",
          label: "Chakra UI",
        },
        {
          src: "https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white",
          label: "React Router",
        },
        {
          src: "https://img.shields.io/badge/Context_API-000000?style=for-the-badge&logo=react&logoColor=white",
          label: "Context API",
        },
      ],
    },
    {
      title: "🛠️ Backend & Databases",
      skills: [
        {
          src: "https://img.shields.io/badge/NodeJS-339933?style=for-the-badge&logo=node.js&logoColor=white",
          label: "NodeJS",
        },
        {
          src: "https://img.shields.io/badge/ExpressJS-000000?style=for-the-badge&logo=express&logoColor=white",
          label: "ExpressJS",
        },
        {
          src: "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white",
          label: "MongoDB",
        },
        {
          src: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
          label: "MySQL",
        },
        {
          src: "https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white",
          label: "Socket.io",
        },
      ],
    },
    {
      title: "⚙️ DevOps & Tools",
      skills: [
        {
          src: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
          label: "Git",
        },
        {
          src: "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white",
          label: "GitHub",
        },
        {
          src: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
          label: "Postman",
        },
        {
          src: "https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white",
          label: "Netlify",
        },
        {
          src: "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white",
          label: "Vercel",
        },
        {
          src: "https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white",
          label: "Render",
        },
        {
          src: "https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=black",
          label: "Babel",
        },
        {
          src: "https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white",
          label: "JWT",
        },
        {
          src: "https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white",
          label: "Jenkins",
        },
        {
          src: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
          label: "Docker",
        },
      ],
    },
    {
      title: "🤖 Automation & QA",
      skills: [
        {
          src: "https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white",
          label: "Selenium",
        },
        {
          src: "https://img.shields.io/badge/TestNG-FF6C37?style=for-the-badge&logo=testng&logoColor=white",
          label: "TestNG",
        },
        {
          src: "https://img.shields.io/badge/Cucumber-23D96C?style=for-the-badge&logo=cucumber&logoColor=white",
          label: "Cucumber",
        },
        {
          src: "https://img.shields.io/badge/BDD-000000?style=for-the-badge&logo=behave&logoColor=white",
          label: "BDD",
        },
        {
          src: "https://img.shields.io/badge/Agile-2496ED?style=for-the-badge&logo=agile&logoColor=white",
          label: "Agile",
        },
        {
          src: "https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white",
          label: "Jira",
        },
        {
          src: "https://img.shields.io/badge/Manual_Testing-FF5733?style=for-the-badge&logo=testing-library&logoColor=white",
          label: "Manual Testing",
        },
        {
          src: "https://img.shields.io/badge/Hybrid_|_Keyword_|_Data--Driven-6E57E0?style=for-the-badge",
          label: "Frameworks",
        },
        {
          src: "https://img.shields.io/badge/SQL_Testing-4479A1?style=for-the-badge&logo=database&logoColor=white",
          label: "SQL Testing",
        },
      ],
    },
  ];

  return (
    <Flex
      bg={"#011940"}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={8}
      color="white"
      h={"max-content"}
    >
      <Heading as="h1" size="2xl" mb="3rem" color="white">
        Skills
      </Heading>

      <VStack spacing={10} w="100%">
        {categories.map((category, idx) => (
          <Box
            key={idx}
            bg="#001b4bff"
            p={6}
            width="100%"
            rounded="2xl"
            shadow="lg"
          >
            <Heading
              as="h2"
              size="lg"
              mb={6}
              color="teal.300"
              textAlign="left"
            >
              {category.title}
            </Heading>
            <SimpleGrid
              columns={{ base: 2, sm: 3, md: 4, lg: 5 }}
              spacing={4}
              justifyItems="center"
            >
              {category.skills.map((skill, index) => (
                <Tooltip
                  key={index}
                  label={skill.label}
                  bg="gray.700"
                  color="white"
                >
                  <Box
                    p={2}
                    _hover={{
                      transform: "scale(1.08)",
                      boxShadow: "xl",
                    }}
                    transition="all 0.3s ease-in-out"
                  >
                    <Image src={skill.src} alt={skill.label} />
                  </Box>
                </Tooltip>
              ))}
            </SimpleGrid>
          </Box>
        ))}
      </VStack>
    </Flex>
  );
}

export default Skills;
