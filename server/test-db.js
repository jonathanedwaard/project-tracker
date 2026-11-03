const pool = require("./db");

async function main() {
  const time = await pool.query("select now() as time");
  console.log("Connected. Server time:", time.rows[0].time);
  await pool.end();
}

main().catch((err) => {
  console.error("Failed:", err.message);
  process.exit(1);
});
