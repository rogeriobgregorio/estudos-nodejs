import {
  createPokemonReport,
  getAllPokemonReports,
  getPokemonReportById,
  deletePokemonReport,
} from "../../config/useCases.js";
import { exportPokemonReports } from "../../services/ExportPokemonReportService.js";

export class PokemonReportController {
  static async create(req, res) {
    try {
      const data = req.body;
      const result = await createPokemonReport.execute(data);
      return res.status(201).json(result);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  static async getAll(req, res) {
    try {
      const result = await getAllPokemonReports.execute();
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const result = await getPokemonReportById.execute(id);
      if (!result)
        return res.status(404).json({ error: "Pokémon não encontrado" });
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      await deletePokemonReport.execute(id);
      return res.status(204).send();
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  static async export(req, res) {
    try {
      const fieldMap = {
        Nome: "Name",
        "Número na Pokédex": "National Dex #",
        "Tipo Primário": "Primary Typing",
        "Tipo Secundário": "Secondary Typing",
        Geração: "Generation",
        "Total de Pontos Base": "Base Stat Total",
        "Estágio de Evolução": "Evolution Stage",
        "Quantidade de Evoluções": "Number of Evolution",
      };

      await exportPokemonReports(fieldMap, "pokemon_reports");

      return res
        .status(200)
        .json({ message: "Exportação concluída com sucesso!" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
