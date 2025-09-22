'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Track } from '@/lib/data';
import Navbar from '@/components/Navbar';
import { FiSearch, FiEye, FiCheckCircle, FiXCircle, FiClock, FiUpload } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function DashboardPage() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchTracks = async () => {
      const res = await fetch('/api/tracks');
      const data = await res.json();
      setTracks(data);
    };
    fetchTracks();
  }, []);

  const filteredTracks = tracks.filter(track =>
    track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: Track['status']) => {
    const statusMap = {
      Live: { className: 'bg-success', icon: <FiCheckCircle /> },
      Processing: { className: 'bg-warning', icon: <FiClock /> },
      Rejected: { className: 'bg-danger', icon: <FiXCircle /> },
      Uploaded: { className: 'bg-secondary', icon: <FiUpload /> },
    };
    const { className, icon } = statusMap[status];
    return (
      <span className={`badge ${className} d-flex align-items-center`}>
        <span className="me-1">{icon}</span>
        {status}
      </span>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div>
      <Navbar />
      <motion.main 
        className="container mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h2">Your Tracks</h1>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/upload" className="btn btn-primary d-flex align-items-center">
              <FiUpload className="me-2" />
              Upload Track
            </Link>
          </motion.div>
        </div>
        <div className="input-group mb-4 shadow-sm">
          <span className="input-group-text"><FiSearch /></span>
          <input
            type="text"
            className="form-control"
            placeholder="Search by title or artist..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <motion.div 
          className="card shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Release Date</th>
                    <th>Status</th>
                    <th className="text-end">Actions</th>
                  </tr>
                </thead>
                <motion.tbody
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {filteredTracks.map(track => (
                    <motion.tr 
                      key={track.id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                    >
                      <td>{track.title}</td>
                      <td>{track.artist}</td>
                      <td>{track.releaseDate}</td>
                      <td>{getStatusBadge(track.status)}</td>
                      <td className="text-end">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="d-inline-block">
                            <Link href={`/track/${track.id}`} className="btn btn-sm btn-outline-primary d-inline-flex align-items-center">
                                <FiEye className="me-1" /> View
                            </Link>
                        </motion.div>
                      </td>
                    </motion.tr>
                  ))}
                </motion.tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
}
