import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Fake DB (later replace with MongoDB / MySQL / PostgreSQL)
let projects: any[] = [];

// Get all projects
app.get("/projects", (req, res) => {
  res.json(projects);
});

// Add project
app.post("/projects", (req, res) => {
  const newProject = { id: uuidv4(), created_at: new Date().toISOString(), ...req.body };
  projects.unshift(newProject);
  res.status(201).json(newProject);
});

// Update project
app.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  projects = projects.map(p => (p.id === id ? { ...p, ...req.body } : p));
  res.json({ message: "Updated" });
});

// Delete project
app.delete("/projects/:id", (req, res) => {
  const { id } = req.params;
  projects = projects.filter(p => p.id !== id);
  res.json({ message: "Deleted" });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
