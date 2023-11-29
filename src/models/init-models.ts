import type { Sequelize } from "sequelize";
import { pokedex_dataset as _pokedex_dataset } from "./pokedex_dataset";
import type { pokedex_datasetAttributes, pokedex_datasetCreationAttributes } from "./pokedex_dataset";
import { users as _users } from "./users";
import type { usersAttributes, usersCreationAttributes } from "./users";

export {
  _pokedex_dataset as pokedex_dataset,
  _users as users,
};

export type {
  pokedex_datasetAttributes,
  pokedex_datasetCreationAttributes,
  usersAttributes,
  usersCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const pokedex_dataset = _pokedex_dataset.initModel(sequelize);
  const users = _users.initModel(sequelize);


  return {
    pokedex_dataset: pokedex_dataset,
    users: users,
  };
}
