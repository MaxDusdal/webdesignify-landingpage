import * as migration_20250518_122946 from './20250518_122946';
import * as migration_20250730_134444 from './20250730_134444';
import * as migration_20250803_160717 from './20250803_160717';

export const migrations = [
  {
    up: migration_20250518_122946.up,
    down: migration_20250518_122946.down,
    name: '20250518_122946',
  },
  {
    up: migration_20250730_134444.up,
    down: migration_20250730_134444.down,
    name: '20250730_134444',
  },
  {
    up: migration_20250803_160717.up,
    down: migration_20250803_160717.down,
    name: '20250803_160717'
  },
];
