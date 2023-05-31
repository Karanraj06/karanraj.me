import { type SchemaTypeDefinition } from 'sanity';

import blog from './schemas/blog';
import education from './schemas/education';
import home from './schemas/home';
import project from './schemas/project';
import skill from './schemas/skill';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, education, project, skill, blog],
};
