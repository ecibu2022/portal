import { Link } from "react-router-dom";
import { FaHome, FaFileAlt, FaUser, FaBell, FaSignOutAlt } from "react-icons/fa";

const Sidebar = ({ onLinkClick, onSignOut }) => {
  return (
    <div className="space-y-6">

      <div className="text-white font-semibold text-xl">Dashboard</div>

      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard/home"
              className="flex items-center text-gray-300 hover:text-white py-2 px-4 rounded-md"
              onClick={onLinkClick}
            >
              <FaHome className="mr-2" /> Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/documents"
              className="flex items-center text-gray-300 hover:text-white py-2 px-4 rounded-md"
              onClick={onLinkClick}
            >
              <FaFileAlt className="mr-2" /> Documents
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/profile"
              className="flex items-center text-gray-300 hover:text-white py-2 px-4 rounded-md"
              onClick={onLinkClick}
            >
              <FaUser className="mr-2" /> Profile
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/notifications"
              className="flex items-center text-gray-300 hover:text-white py-2 px-4 rounded-md"
              onClick={onLinkClick}
            >
              <FaBell className="mr-2" /> Notifications
            </Link>
          </li>

          <div>
            <hr className="my-4 border-gray-600" />
            <label className="flex items-center py-2 px-4 cursor-pointer" htmlFor="logout" onClick={onSignOut}><FaSignOutAlt className="mr-2" /> Logout</label>
          </div>

        </ul>
      </nav>

    </div>
  );
};

export default Sidebar;
