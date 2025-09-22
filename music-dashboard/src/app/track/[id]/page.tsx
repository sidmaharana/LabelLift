'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Track } from '@/lib/data';
import Navbar from '@/components/Navbar';
import { FiUser, FiCalendar, FiTag, FiCheckCircle, FiXCircle, FiClock, FiUpload, FiArrowLeft } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function TrackDetailsPage() {
  const [track, setTrack] = useState<Track | null>(null);
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    if (id) {
      const fetchTrack = async () => {
        const res = await fetch(`/api/tracks/${id}`);
        if (res.ok) {
          const data = await res.json();
          setTrack(data);
        } else {
          router.push('/dashboard'); // Redirect if track not found
        }
      };
      fetchTrack();
    }
  }, [id, router]);

  const getStatusBadge = (status: Track['status']) => {
    const statusMap = {
      Live: { className: 'bg-success', icon: <FiCheckCircle /> },
      Processing: { className: 'bg-warning', icon: <FiClock /> },
      Rejected: { className: 'bg-danger', icon: <FiXCircle /> },
      Uploaded: { className: 'bg-secondary', icon: <FiUpload /> },
    };
    const { className, icon } = statusMap[status];
    return (
      <span className={`badge ${className} d-flex align-items-center p-2`}>
        <span className="me-2">{icon}</span>
        {status}
      </span>
    );
  };

  if (!track) {
    return (
      <div>
        <Navbar />
        <div className="container mt-4 text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <motion.main 
        className="container mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="d-flex align-items-center mb-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link href="/dashboard" className="btn btn-outline-secondary me-3 d-flex align-items-center">
                    <FiArrowLeft />
                </Link>
            </motion.div>
            <h1 className="h2 mb-0">Track Details</h1>
        </div>
        <div className="card shadow-sm">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h2 className="h4 mb-0">{track.title}</h2>
            {getStatusBadge(track.status)}
          </div>
          <div className="card-body">
            <div className="list-group list-group-flush">
                <div className="list-group-item d-flex align-items-center">
                    <FiUser className="me-3" size={20} />
                    <strong>{track.artist}</strong>
                </div>
                <div className="list-group-item d-flex align-items-center">
                    <FiCalendar className="me-3" size={20} />
                    <span>{track.releaseDate}</span>
                </div>
                <div className="list-group-item d-flex align-items-center">
                    <FiTag className="me-3" size={20} />
                    <span>{track.genre}</span>
                </div>
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
