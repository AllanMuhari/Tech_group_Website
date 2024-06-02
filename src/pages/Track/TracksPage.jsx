import React from "react";
import Track from "./Track";

const TracksPage = () => {
  const tracks = [
    {
      title: "Cyber Security",
      description:
        "Students who choose the Cyber Security track will delve into the critical aspects of protecting systems, networks, and data from cyber threats. Throughout this track, they will learn about various security protocols, ethical hacking, encryption techniques, and threat analysis. They will engage in hands-on projects and real-world scenarios to apply their knowledge in identifying and mitigating security vulnerabilities. By the end of the track, students will be equipped with the skills to safeguard digital environments, conduct security audits, and implement robust security measures to protect against cyber attacks.",
    },
    {
      title: "UI/UX Design",
      description:
        "Students who enroll in the UI/UX Design track will explore the principles of creating user-friendly and visually appealing interfaces. They will learn about user research, wireframing, prototyping, and usability testing. Through practical projects and interactive workshops, students will gain hands-on experience in designing intuitive user interfaces and enhancing user experiences. By the end of the track, students will be proficient in using industry-standard design tools and techniques, enabling them to create effective, user-centric designs for websites and mobile applications.",
    },
    {
      title: "Web Development",
      description:
        "Students who pursue the Web Development track will gain comprehensive knowledge in building dynamic and responsive websites. They will learn the fundamentals of front-end development using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js, Express, and databases. Through hands-on projects and collaborative coding sessions, students will develop the skills to create both the client-side and server-side of web applications. By the end of the track, students will be capable of designing, developing, and deploying full-stack web applications, equipped with the expertise to build robust and scalable websites.",
    },
    {
      title: "Mobile Apps Development",
      description:
        "Students who opt for the Mobile Apps Development track will learn to design and build applications for mobile devices. They will explore the basics of mobile app development using platforms such as Android and iOS, gaining proficiency in languages like Java, Kotlin, Swift, and Dart. Through hands-on projects and interactive sessions, students will develop the skills to create user-friendly and efficient mobile applications. By the end of the track, students will be adept at building, testing, and deploying mobile apps, ready to deliver engaging and high-performance solutions for smartphones and tablets.",
    },
    {
      title: "Cloud Engineering",
      description:
        "Students who choose the Cloud Engineering track will dive into the world of cloud computing and its applications. They will learn about various cloud service providers such as AWS, Google Cloud, and Microsoft Azure, and understand how to design, deploy, and manage scalable and secure cloud infrastructures. Through practical projects and hands-on labs, students will gain experience in cloud architecture, virtualization, containerization, and DevOps practices. By the end of the track, students will be capable of leveraging cloud technologies to build and maintain robust cloud-based solutions, ensuring high availability and performance for applications and services.",
    },
    {
      title: "Power Platform",
      description:
        "Students who select the Power Platform track will explore the capabilities of Microsoft's Power Platform, which includes Power BI, Power Apps, Power Automate, and Power Virtual Agents. They will learn how to create custom business applications, automate workflows, analyze data, and build chatbots with minimal coding. Through hands-on projects and interactive workshops, students will gain practical experience in leveraging these tools to enhance business processes and drive data-driven decision-making. By the end of the track, students will be proficient in developing integrated solutions using the Power Platform, enabling them to transform organizational operations and improve efficiency.",
    },
    {
      title: "Data Science",
      description:
        "The Data Science track will equip students with the knowledge and skills to extract insights and valuable information from large datasets. Students will learn about data analysis, machine learning, statistical modeling, and data visualization techniques. Through hands-on projects and real-world datasets, students will apply their knowledge to solve complex problems and make data-driven decisions. By the end of the track, students will be proficient in using tools and algorithms to analyze data, identify patterns, and generate actionable insights.",
    },
    {
      title: "Artificial Intelligence",
      description:
        "Students who choose the Artificial Intelligence track will explore the field of AI and its applications in various industries. They will learn about machine learning algorithms, neural networks, natural language processing, and computer vision. Through hands-on projects and experiments, students will develop AI models and systems to solve real-world problems. By the end of the track, students will be proficient in designing and implementing AI solutions, capable of creating intelligent systems that can learn and adapt.",
    },
    {
      title: "Blockchain Technology",
      description:
        "The Blockchain Technology track will introduce students to the fundamentals of blockchain and distributed ledger technology. They will learn about cryptographic principles, consensus mechanisms, smart contracts, and decentralized applications (DApps). Through practical exercises and case studies, students will explore the use cases of blockchain across various industries, including finance, healthcare, and supply chain management. By the end of the track, students will understand the inner workings of blockchain technology and its potential to revolutionize traditional systems and processes.",
    },
    {
      title: "Internet of Things (IoT)",
      description:
        "Students who opt for the Internet of Things (IoT) track will delve into the world of interconnected devices and sensors. They will learn about IoT architecture, protocols, communication technologies, and data analytics. Through hands-on projects and experiments, students will build IoT solutions to monitor and control physical devices remotely. By the end of the track, students will be proficient in designing, implementing, and managing IoT systems, capable of creating innovative IoT applications for various domains, including smart homes, healthcare, and industrial automation.",
    },
    {
      title: "DevOps",
      description:
        "The DevOps track will focus on the principles and practices of DevOps, emphasizing collaboration, automation, and continuous integration/continuous delivery (CI/CD). Students will learn about DevOps culture, toolchains, infrastructure as code (IaC), and containerization with Docker and Kubernetes. Through hands-on labs and real-world scenarios, students will gain experience in building, deploying, and monitoring scalable and resilient software systems. By the end of the track, students will be capable of implementing DevOps best practices to streamline development workflows, improve deployment frequency, and enhance overall software quality and reliability.",
    },
    {
      title: "Software Testing",
      description:
        "The Software Testing track will cover the principles and techniques of software testing, including test planning, test design, test execution, and test automation. Students will learn about different testing methodologies, such as black-box testing, white-box testing, and exploratory testing. Through practical exercises and case studies, students will gain experience in creating test cases, executing tests, and analyzing test results. By the end of the track, students will be proficient in ensuring the quality and reliability of software applications through effective testing strategies and methodologies.",
    },
    {
      title: "Game Development",
      description:
        "Students who choose the Game Development track will learn the fundamentals of game design, development, and production. They will explore game engines, scripting languages, asset creation, and game mechanics. Through hands-on projects and game jams, students will create their own video games and interactive experiences. By the end of the track, students will be proficient in designing, prototyping, and developing games for various platforms, including PC, console, and mobile.",
    },
    {
      title: "Big Data Analytics",
      description:
        "The Big Data Analytics track will focus on processing, analyzing, and deriving insights from large volumes of structured and unstructured data. Students will learn about big data technologies, such as Hadoop, Spark, and NoSQL databases, as well as data mining and machine learning algorithms. Through hands-on projects and case studies, students will gain experience in handling big data pipelines, performing data analysis, and visualizing data insights. By the end of the track, students will be equipped with the skills to tackle complex data challenges and extract valuable insights from massive datasets.",
    },
    {
      title: "Embedded Systems",
      description:
        "Students who opt for the Embedded Systems track will explore the design and development of embedded systems, including microcontrollers, sensors, and actuators. They will learn about real-time operating systems, embedded programming languages, and hardware interfacing. Through hands-on projects and experiments, students will build embedded systems for various applications, such as IoT devices, robotics, and consumer electronics. By the end of the track, students will be proficient in designing and implementing embedded solutions for different domains, capable of creating innovative and reliable embedded systems.",
    },
    {
      title: "Augmented Reality (AR) & Virtual Reality (VR)",
      description:
        "The Augmented Reality (AR) & Virtual Reality (VR) track will introduce students to the immersive world of AR and VR technologies. They will learn about AR/VR platforms, development tools, and interaction techniques. Through practical projects and simulations, students will create immersive experiences, including AR applications, VR games, and training simulations. By the end of the track, students will be proficient in designing and developing AR/VR applications, capable of creating compelling and interactive experiences across various domains, such as gaming, education, and healthcare.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tracks Offered by MUTC</h1>
      {tracks.map((track, index) => (
        <Track
          key={index}
          title={track.title}
          description={track.description}
        />
      ))}
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fullName">
              Full Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="text"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="studentId">
              Student ID
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="studentId"
              type="text"
              placeholder="Enter your student ID"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="buildingName">
              Building Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="buildingName"
              type="text"
              placeholder="Enter your building name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="roomNumber">
              Room Number
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="roomNumber"
              type="text"
              placeholder="Enter your room number"
            />
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default TracksPage;
