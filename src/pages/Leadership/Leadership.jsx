import React from "react";
import LeaderProfile from "./LeaderProfile";
import Drndia from "../../assets/Drndia.jpg";
import Allan from "../../../src/assets/Allan.jpg";
import Victory from "../../../src/assets/victory.jpg";
import Bridget from "../../assets/bridget.jpg";
import Ruth from "../../assets/ruth.jpg";
import Webster from "../../assets/webster.jpg";
import Manase from "../../assets/manase.jpg";
import Carolyne from "../../assets/carolyne.jpg";
import Stanley from "../../assets/stanley.jpg";
import Paul from "../../assets/paul.jpg";
import Evyonn from "../../assets/evyonn.jpg";

const leaders = [
  {
    name: "Dr. John Ndia",
    role: "Patron",
    bio: "Dr. John Ndia is an experienced technologist and academician dedicated to fostering innovation in technology.",
    image: Drndia,
    social: {
      linkedin: "https://www.linkedin.com/",
      twitter: "https://www.twitter.com/",
      facebook: "https://www.facebook.com/",
    },
  },
  {
    name: "Victory Njeri",
    role: "Chairperson",
    bio: "Victory Njeri leads the club with a passion for technology and community building.",
    image: Victory,
    social: {
      linkedin: "https://www.linkedin.com/",
      twitter: "https://www.twitter.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    name: "Allan Muhari",
    role: "Vice Chairperson",
    bio: "Allan Muhari is a visionary leader dedicated to driving the club's initiatives forward.",
    image: Allan,
    social: {
      linkedin: "https://www.linkedin.com/",
      twitter: "https://www.twitter.com/",
    },
  },
  {
    name: "Bridget Gitonga",
    role: "Secretary",
    bio: "Bridget Gitonga is responsible for the smooth administration and communication within the club.",
    image: Bridget,
    social: {
      linkedin: "https://www.linkedin.com/",
      twitter: "https://www.twitter.com/",
    },
  },
  {
    name: "Ruth Mutisya",
    role: "Treasurer",
    bio: "Ruth Mutisya ensures the financial health and sustainability of the club.",
    image: Ruth,
    social: {
      linkedin: "https://www.linkedin.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    name: "Webster Ifedha",
    role: "Cyber Security Lead",
    bio: "Webster Ifedha is dedicated to safeguarding the club's digital assets and educating members on cybersecurity.",
    image: Webster,
    social: {
      linkedin: "https://www.linkedin.com/",
      twitter: "https://www.twitter.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    name: "Manase Gunga",
    role: "UI/UX Lead",
    bio: "Manase Gunga focuses on creating user-friendly and visually appealing designs for the club's projects.",
    image: Manase,
    social: {
      linkedin: "https://www.linkedin.com/",
      twitter: "https://www.twitter.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    name: "Carolyne Githenduka",
    role: "Web Development Lead",
    bio: "Carolyne Githenduka leads the web development efforts, ensuring robust and efficient web solutions.",
    image: Carolyne,
    social: {
      linkedin: "https://www.linkedin.com/",
      twitter: "https://www.twitter.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    name: "Stanley Amunze",
    role: "Mobile Apps Development Lead",
    bio: "Stanley Amunze drives the development of mobile applications, bringing innovative solutions to users' fingertips.",
    image: Stanley,
    social: {
      linkedin: "https://www.linkedin.com/",
      twitter: "https://www.twitter.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    name: "Paul Karanja",
    role: "Cloud Engineering Lead",
    bio: "Paul Karanja spearheads the club's cloud computing initiatives, ensuring scalable and secure cloud solutions.",
    image: Paul,
    social: {
      linkedin: "https://www.linkedin.com/",
      twitter: "https://www.twitter.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
    },
  },
  {
    name: "Evyonn Mbithe",
    role: "Power Platform Lead",
    bio: "Evyonn Mbithe leads the Power Platform initiatives, empowering members with efficient and powerful tools.",
    image: Evyonn,
    social: {
      linkedin: "https://www.linkedin.com/",
      twitter: "https://www.twitter.com/",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
    },
  },
];

const Leadership = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Meet Our Leadership
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leaders.map((leader, index) => (
          <LeaderProfile key={index} {...leader} />
        ))}
      </div>
    </div>
  );
};

export default Leadership;
