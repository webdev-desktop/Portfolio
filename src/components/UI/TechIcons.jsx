import {
  SiJavascript,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiPostman,
  SiLibreofficebase,
  SiNetlify,
} from "react-icons/si";

import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaBriefcase,
  FaUserTie,
  FaMailBulk,
  FaGitAlt,
  FaGithub,
  FaInfo,
  FaLaptopCode,
  FaLayerGroup,
  FaUserGraduate,
  FaAward,
  FaLinkedin,
  FaFileExcel,
  FaExternalLinkAlt,
  FaFileWord,
  FaArrowRight,
  FaSchool,
  FaLocationArrow,
  FaMobileAlt,
  FaFileDownload,
  FaSeedling,
  FaPaperPlane,
  FaAt,
  FaInstagram,
  FaFigma,
  FaCheckCircle,
} from "react-icons/fa";

import { LuFileJson2 } from "react-icons/lu";
import { MdVerified } from "react-icons/md";
import { VscVscodeInsiders } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import { GoXCircle } from "react-icons/go";
import { FiAlertTriangle } from "react-icons/fi";

// 🌐 Ek single central object jisme saare icons registered hain
const TechIcons = {
  // Skills Icons
  html: (props) => <FaHtml5 {...props} />,
  css: (props) => <FaCss3Alt {...props} />,
  tailwind: (props) => <SiTailwindcss {...props} />,
  javaScript: (props) => <SiJavascript {...props} />,
  react: (props) => <FaReact {...props} />,
  nextjs: (props) => <SiNextdotjs {...props} />,
  nodejs: (props) => <FaNodeJs {...props} />,
  mongodb: (props) => <SiMongodb {...props} />,
  express: (props) => <SiExpress {...props} />,
  sql: (props) => <FaDatabase {...props} />,
  json: (props) => <LuFileJson2 {...props} />,
  postman: (props) => <SiPostman {...props} />,
  excel: (props) => <FaFileExcel {...props} />,
  word: (props) => <FaFileWord {...props} />,
  git: (props) => <FaGitAlt {...props} />,
  figma: (props) => <FaFigma {...props} />,
  vscode: (props) => <VscVscodeInsiders {...props} />,
  netlify: (props) => <SiNetlify {...props} />,
  api: (props) => <TbApi {...props} />,

  // Social Link Icons
  github: (props) => <FaGithub {...props} />,
  linkedin: (props) => <FaLinkedin {...props} />,
  instagram: (props) => <FaInstagram {...props} />,

  // Navbar & Navigation Icons
  profile: (props) => <FaUserTie {...props} />,
  about: (props) => <FaInfo {...props} />,
  skills: (props) => <FaLaptopCode {...props} />,
  projects: (props) => <FaLayerGroup {...props} />,
  education: (props) => <FaUserGraduate {...props} />,
  certificates: (props) => <FaAward {...props} />,
  mail: (props) => <FaMailBulk {...props} />,

  // Extra Icons
  externalLink: (props) => <FaExternalLinkAlt {...props} />,
  next: (props) => <FaArrowRight {...props} />,
  verified: (props) => <MdVerified {...props} />,
  office: (props) => <SiLibreofficebase {...props} />,
  school: (props) => <FaSchool {...props} />,
  location: (props) => <FaLocationArrow {...props} />,
  briefcase: (props) => <FaBriefcase {...props} />,
  mobile: (props) => <FaMobileAlt {...props} />,
  fileDownload: (props) => <FaFileDownload {...props} />,
  seed: (props) => <FaSeedling {...props} />,
  paperPlane: (props) => <FaPaperPlane {...props} />,
  at: (props) => <FaAt {...props} />,

  // Toaster Icons
  checkCircle: (props) => <FaCheckCircle {...props} />,
  xCircle: (props) => <GoXCircle {...props} />,
  alertTriangle: (props) => <FiAlertTriangle {...props} />,
};

export default TechIcons;
