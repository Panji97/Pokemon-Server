import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface pokedex_datasetAttributes {
  id: number;
  pokedex_number?: number;
  name?: string;
  german_name?: string;
  japanese_name?: string;
  generation?: number;
  status?: string;
  species?: string;
  type_number?: number;
  type_1?: string;
  type_2?: string;
  height_m?: number;
  weight_kg?: string;
  abilities_number?: number;
  ability_1?: string;
  ability_2?: string;
  ability_hidden?: string;
  total_points?: number;
  hp?: number;
  attack?: number;
  defense?: number;
  sp_attack?: number;
  sp_defense?: number;
  speed?: number;
  catch_rate?: string;
  base_friendship?: string;
  base_experience?: string;
  growth_rate?: string;
  egg_type_number?: number;
  egg_type_1?: string;
  egg_type_2?: string;
  percentage_male?: string;
  egg_cycles?: string;
  against_normal?: number;
  against_fire?: number;
  against_water?: number;
  against_electric?: number;
  against_grass?: number;
  against_ice?: number;
  against_fight?: number;
  against_poison?: number;
  against_ground?: number;
  against_flying?: number;
  against_psychic?: number;
  against_bug?: number;
  against_rock?: number;
  against_ghost?: number;
  against_dragon?: number;
  against_dark?: number;
  against_steel?: number;
  against_fairy?: number;
}

export type pokedex_datasetPk = "id";
export type pokedex_datasetId = pokedex_dataset[pokedex_datasetPk];
export type pokedex_datasetOptionalAttributes = "id" | "pokedex_number" | "name" | "german_name" | "japanese_name" | "generation" | "status" | "species" | "type_number" | "type_1" | "type_2" | "height_m" | "weight_kg" | "abilities_number" | "ability_1" | "ability_2" | "ability_hidden" | "total_points" | "hp" | "attack" | "defense" | "sp_attack" | "sp_defense" | "speed" | "catch_rate" | "base_friendship" | "base_experience" | "growth_rate" | "egg_type_number" | "egg_type_1" | "egg_type_2" | "percentage_male" | "egg_cycles" | "against_normal" | "against_fire" | "against_water" | "against_electric" | "against_grass" | "against_ice" | "against_fight" | "against_poison" | "against_ground" | "against_flying" | "against_psychic" | "against_bug" | "against_rock" | "against_ghost" | "against_dragon" | "against_dark" | "against_steel" | "against_fairy";
export type pokedex_datasetCreationAttributes = Optional<pokedex_datasetAttributes, pokedex_datasetOptionalAttributes>;

export class pokedex_dataset extends Model<pokedex_datasetAttributes, pokedex_datasetCreationAttributes> implements pokedex_datasetAttributes {
  id!: number;
  pokedex_number?: number;
  name?: string;
  german_name?: string;
  japanese_name?: string;
  generation?: number;
  status?: string;
  species?: string;
  type_number?: number;
  type_1?: string;
  type_2?: string;
  height_m?: number;
  weight_kg?: string;
  abilities_number?: number;
  ability_1?: string;
  ability_2?: string;
  ability_hidden?: string;
  total_points?: number;
  hp?: number;
  attack?: number;
  defense?: number;
  sp_attack?: number;
  sp_defense?: number;
  speed?: number;
  catch_rate?: string;
  base_friendship?: string;
  base_experience?: string;
  growth_rate?: string;
  egg_type_number?: number;
  egg_type_1?: string;
  egg_type_2?: string;
  percentage_male?: string;
  egg_cycles?: string;
  against_normal?: number;
  against_fire?: number;
  against_water?: number;
  against_electric?: number;
  against_grass?: number;
  against_ice?: number;
  against_fight?: number;
  against_poison?: number;
  against_ground?: number;
  against_flying?: number;
  against_psychic?: number;
  against_bug?: number;
  against_rock?: number;
  against_ghost?: number;
  against_dragon?: number;
  against_dark?: number;
  against_steel?: number;
  against_fairy?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof pokedex_dataset {
    return pokedex_dataset.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pokedex_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(33),
      allowNull: true
    },
    german_name: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    japanese_name: {
      type: DataTypes.STRING(21),
      allowNull: true
    },
    generation: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    species: {
      type: DataTypes.STRING(21),
      allowNull: true
    },
    type_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type_1: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    type_2: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    height_m: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    weight_kg: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    abilities_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ability_1: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    ability_2: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    ability_hidden: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    total_points: {
      type: DataTypes.DECIMAL(5,1),
      allowNull: true
    },
    hp: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    attack: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    defense: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    sp_attack: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    sp_defense: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    speed: {
      type: DataTypes.DECIMAL(4,1),
      allowNull: true
    },
    catch_rate: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    base_friendship: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    base_experience: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    growth_rate: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    egg_type_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    egg_type_1: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    egg_type_2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    percentage_male: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    egg_cycles: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    against_normal: {
      type: DataTypes.DECIMAL(3,2),
      allowNull: true
    },
    against_fire: {
      type: DataTypes.DECIMAL(3,2),
      allowNull: true
    },
    against_water: {
      type: DataTypes.DECIMAL(3,2),
      allowNull: true
    },
    against_electric: {
      type: DataTypes.DECIMAL(3,2),
      allowNull: true
    },
    against_grass: {
      type: DataTypes.DECIMAL(3,2),
      allowNull: true
    },
    against_ice: {
      type: DataTypes.DECIMAL(4,3),
      allowNull: true
    },
    against_fight: {
      type: DataTypes.DECIMAL(3,2),
      allowNull: true
    },
    against_poison: {
      type: DataTypes.DECIMAL(3,2),
      allowNull: true
    },
    against_ground: {
      type: DataTypes.DECIMAL(3,2),
      allowNull: true
    },
    against_flying: {
      type: DataTypes.DECIMAL(3,2),
      allowNull: true
    },
    against_psychic: {
      type: DataTypes.DECIMAL(3,2),
      allowNull: true
    },
    against_bug: {
      type: DataTypes.DECIMAL(3,2),
      allowNull: true
    },
    against_rock: {
      type: DataTypes.DECIMAL(3,2),
      allowNull: true
    },
    against_ghost: {
      type: DataTypes.DECIMAL(2,1),
      allowNull: true
    },
    against_dragon: {
      type: DataTypes.DECIMAL(2,1),
      allowNull: true
    },
    against_dark: {
      type: DataTypes.DECIMAL(3,2),
      allowNull: true
    },
    against_steel: {
      type: DataTypes.DECIMAL(3,2),
      allowNull: true
    },
    against_fairy: {
      type: DataTypes.DECIMAL(3,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pokedex_dataset',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
