
export interface Track {
  id: string;
  title: string;
  artist: string;
  releaseDate: string;
  genre: string;
  status: 'Uploaded' | 'Processing' | 'Live' | 'Rejected';
}

export let tracks: Track[] = [
  {
    id: '1',
    title: 'Ocean Drive',
    artist: 'Duke Dumont',
    releaseDate: '2023-08-15',
    genre: 'Electronic',
    status: 'Live',
  },
  {
    id: '2',
    title: 'Solar Sailer',
    artist: 'Daft Punk',
    releaseDate: '2023-09-01',
    genre: 'Electronic',
    status: 'Processing',
  },
  {
    id: '3',
    title: 'Midnight City',
    artist: 'M83',
    releaseDate: '2023-09-10',
    genre: 'Synthpop',
    status: 'Uploaded',
  },
  {
    id: '4',
    title: 'Genesis',
    artist: 'Justice',
    releaseDate: '2023-09-20',
    genre: 'French House',
    status: 'Rejected',
  },
];
