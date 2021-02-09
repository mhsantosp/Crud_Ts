import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  host: 'local',
  password: '',
  database: 'prueba_geek',
  port:5432
});