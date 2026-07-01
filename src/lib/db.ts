import mysql from "mysql2/promise";

// Verbindungs-Pool zur Kursboard-Datenbank.
// Wird einmalig erstellt und über alle Server-Anfragen hinweg wiederverwendet.
// Läuft ausschließlich serverseitig — Zugangsdaten gelangen nie in den Browser.

declare global {
  // eslint-disable-next-line no-var
  var _kursboardPool: mysql.Pool | undefined;
}

function createPool() {
  return mysql.createPool({
    host: process.env.KURSBOARD_DB_HOST,
    port: Number(process.env.KURSBOARD_DB_PORT ?? 3306),
    user: process.env.KURSBOARD_DB_USER,
    password: process.env.KURSBOARD_DB_PASSWORD,
    database: process.env.KURSBOARD_DB_NAME,
    connectionLimit: 5,
    dateStrings: true, // Datumswerte als "YYYY-MM-DD"-Strings statt JS-Date
  });
}

// In der Next.js-Dev-Umgebung wird bei jedem Hot-Reload neu ausgewertet —
// deshalb den Pool auf globalThis cachen, damit nicht ständig neue entstehen.
const pool = global._kursboardPool ?? createPool();
if (process.env.NODE_ENV !== "production") global._kursboardPool = pool;

export default pool;
