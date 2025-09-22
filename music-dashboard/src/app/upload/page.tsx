'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { FiMusic, FiUser, FiCalendar, FiTag, FiArrowLeft, FiUpload } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function UploadPage() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [genre, setGenre] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/tracks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, artist, releaseDate, genre }),
    });
    router.push('/dashboard');
  };

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
            <h1 className="h2 mb-0">Upload New Track</h1>
        </div>
        <div className="card shadow-sm">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Track Title</label>
                        <div className="input-group">
                            <span className="input-group-text"><FiMusic/></span>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="artist" className="form-label">Artist Name</label>
                        <div className="input-group">
                            <span className="input-group-text"><FiUser/></span>
                            <input
                                type="text"
                                className="form-control"
                                id="artist"
                                value={artist}
                                onChange={(e) => setArtist(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="releaseDate" className="form-label">Release Date</label>
                        <div className="input-.group">
                            <span className="input-group-text"><FiCalendar/></span>
                            <input
                                type="date"
                                className="form-control"
                                id="releaseDate"
                                value={releaseDate}
                                onChange={(e) => setReleaseDate(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="genre" className="form-label">Genre</label>
                        <div className="input-group">
                            <span className="input-group-text"><FiTag/></span>
                            <input
                                type="text"
                                className="form-control"
                                id="genre"
                                value={genre}
                                onChange={(e) => setGenre(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <motion.button 
                        type="submit" 
                        className="btn btn-primary w-100 mt-3 d-flex align-items-center justify-content-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <FiUpload className="me-2"/>
                        Upload Track
                    </motion.button>
                </form>
            </div>
        </div>
      </motion.main>
    </div>
  );
}
