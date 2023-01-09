import { PROJECTS } from "../../lib/projects";

export default function handler(req, res) {
  res.status(200);
  res.json(PROJECTS);
}
