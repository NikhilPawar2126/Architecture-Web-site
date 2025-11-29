import { useState, useEffect } from "react";

export interface Project {
  id: string;
  title: string;
  category: "Residential" | "Commercial";
  location: string;
  year: string;
  Area?: string;          // from lovable (optional)
  description: string;
  images: string[];      // from lovable
  houzz_link?: string;   // from your code (optional in case some projects don’t have it)
  created_at: string;
}

const STORAGE_KEY = "portfolio_projects";

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // 👇 Try fetching from API first
      const res = await fetch("http://localhost:5000/projects");

      if (!res.ok) throw new Error("Failed to fetch projects from API");

      const data: Project[] = await res.json();

      // Save in localStorage for offline use
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      setProjects(data || []);
    } catch (err) {
      console.error("Error fetching from API, using localStorage:", err);

      // 👇 fallback to localStorage
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        const data = stored ? JSON.parse(stored) : [];
        setProjects(data);
      } catch (localErr) {
        console.error("Error loading from localStorage:", localErr);
        setProjects([]);
      }

      setError(err instanceof Error ? err.message : "Failed to fetch projects");
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
    error,
    refetch: fetchProjects,
  };
};
