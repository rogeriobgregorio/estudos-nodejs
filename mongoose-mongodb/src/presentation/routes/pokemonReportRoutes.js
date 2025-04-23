import { Router } from "express";
import { PokemonReportController } from "../controllers/PokemonReportController.js";

const router = Router();

router.get("/export", PokemonReportController.export);

router.post("/", PokemonReportController.create);
router.get("/", PokemonReportController.getAll);
router.get("/:id", PokemonReportController.getById);
router.delete("/:id", PokemonReportController.delete);


export default router;
