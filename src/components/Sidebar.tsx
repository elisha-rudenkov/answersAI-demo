import React, { useState, useRef, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { colors } from '@/lib/colors';
import HomeIcon from '../assets/home.svg';
import BellIcon from '../assets/bell.svg';
import TimerIcon from '../assets/timer.svg';
import CloudUploadIcon from '../assets/cloud-upload.svg';
import CogIcon from '../assets/cog.svg';
import AccountCircleIcon from '../assets/account-circle.svg';

const Sidebar: React.FC = () => {
  const [user] = useAuthState(auth);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setShowMenu(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="sidebar" style={{ backgroundColor: colors.mainBg }}>
      <div className="sidebar-logo">
        <img src={HomeIcon} alt="Home" className="icon" />
      </div>
      <div className="sidebar-menu">
        <div className="menu-item">
          <img src={BellIcon} alt="Notifications" className="icon" />
        </div>
        <div className="menu-item">
          <img src={TimerIcon} alt="Dashboard" className="icon" />
        </div>
        <div className="menu-item">
          <img src={CloudUploadIcon} alt="Files" className="icon" />
        </div>
        <div className="menu-item">
          <img src={CogIcon} alt="Settings" className="icon" />
        </div>
      </div>
      <div className="sidebar-bottom" ref={menuRef}>
        <img 
          src={AccountCircleIcon} 
          alt="User" 
          className="icon user-icon" 
          onClick={toggleMenu} 
        />
        {showMenu && user && (
          <div className="user-menu" style={{ backgroundColor: colors.tertiaryBg, borderColor: colors.accent2 }}>
            <div className="user-menu-header">
              <span className="user-menu-email" style={{ color: colors.whiteText }}>{user.email}</span>
            </div>
            <div className="user-menu-item logout" onClick={handleLogout} style={{ color: colors.accent1 }}>
              Logout
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar; 