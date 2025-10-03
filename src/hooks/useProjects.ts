import { useState, useEffect } from 'react';

export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial';
  location: string;
  year: string;
  description: string;
  images: string[];
  created_at: string;
}

const STORAGE_KEY = 'portfolio_projects';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProjects = () => {
    try {
      setIsLoading(true);
      const stored = localStorage.getItem(STORAGE_KEY);
      const data = stored ? JSON.parse(stored) : [];
      setProjects(data);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setProjects([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return {
    projects,
    isLoading,
    refetch: fetchProjects
  };
};