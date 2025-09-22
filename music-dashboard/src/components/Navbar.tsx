import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { FiHome, FiUpload, FiLogOut } from 'react-icons/fi';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem('session');
    router.push('/');
  };

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: <FiHome /> },
    { href: '/upload', label: 'Upload', icon: <FiUpload /> },
  ];

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark shadow-sm`}>
      <div className="container-fluid">
        <Link href="/dashboard" className="navbar-brand fw-bold">
          <div className="d-flex align-items-center">
            <Image src="/logo.png" alt="LabelLift Logo" width={30} height={30} className="d-inline-block align-top me-2" />
            <span>LabelLift</span>
          </div>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navItems.map(item => (
              <li className="nav-item" key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-link ${pathname === item.href ? 'active' : ''}`}>
                  <span className="d-flex align-items-center">
                    <span className="me-2">{item.icon}</span>
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-center">
            <button onClick={handleLogout} className="btn btn-outline-danger d-flex align-items-center">
              <FiLogOut className="me-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
