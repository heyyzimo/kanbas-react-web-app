import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
  FaHistory,
  FaBroadcastTower,
  FaExternalLinkAlt,
  FaQuestionCircle
} from "react-icons/fa";



function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = [
    // Increased icon size with inline style
    { label: "Account", icon: <FaRegUserCircle style={{ fontSize: '24px' }} /> },
    { label: "Dashboard", icon: <FaTachometerAlt style={{ fontSize: '24px' }} /> },
    { label: "Courses", icon: <FaBook style={{ fontSize: '24px' }} /> },
    { label: "Calendar", icon: <FaRegCalendarAlt style={{ fontSize: '24px' }} /> },
    { label: "Inbox", icon: <FaInbox style={{ fontSize: '24px' }} /> },
    { label: "History", icon: <FaHistory style={{ fontSize: '24px' }} /> },
    { label: "Studio", icon: <FaBroadcastTower style={{ fontSize: '24px' }} /> },
    { label: "Commons", icon: <FaExternalLinkAlt style={{ fontSize: '24px' }} /> },
    { label: "Help", icon: <FaQuestionCircle style={{ fontSize: '24px' }} /> },
  ];

  return (
    <ul className="wd-kanbas-navigation">

      <li className="logo-container">
    <img src={"/images/neulogo.png"} style={{ width: 'auto', height: '90px', margin: 0, padding: 0, backgroundColor: 'black' }} />
  </li>

{links.map((link, index) => (
  <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
    <Link to={`/Kanbas/${link.label}`}>
      {link.icon}
      <span className={`label ${pathname.includes(link.label) ? "active" : ""}`}>{link.label}</span>
    </Link>
  </li>
))}

    </ul>
  );
}

export default KanbasNavigation;

