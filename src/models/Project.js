import Sequelize from "sequelize";
import { sequalize } from "../database/database";

import Task from "./Tasks";

const project = sequalize.define(
  "projects",
  {
    id: {
      type: Sequalize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.TEXT,
    },
    priority: {
      type: Sequelize.INTEGER,
    },
    description: {
      type: Sequalize.TEXT,
    },
    deliverydate: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
  }
);

project.hasMany(Task, { foreingKey: "projectId", sourceKey: "id" });
Task.belongsTo(project, { foreingKey: "projectId", sourceKey: "id" });

export default project;
