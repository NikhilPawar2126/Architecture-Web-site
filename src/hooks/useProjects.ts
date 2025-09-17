import { useState, useEffect } from "react";

export interface Project {
  id: string;
  title: string;
  category: "Residential" | "Commercial";
  location: string;
  year: string;
  description: string;
  image: string;
  houzz_link: string;
  created_at: string;
}

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // 👇 Replace with your actual backend API endpoint
      const res = await fetch("http://localhost:5000/projects");

      if (!res.ok) throw new Error("Failed to fetch projects");

      const data: Project[] = await res.json();
      setProjects(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch projects");
      console.error("Error fetching projects:", err);
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
