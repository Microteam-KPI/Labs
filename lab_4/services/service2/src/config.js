const config = {
  user: process.env["POSTGRES_USER"],
  host: process.env["POSTGRES_SERVICE_HOST"],
  database: process.env["POSTGRES_DB"],
  password: process.env["POSTGRES_PASSWORD"],
  port: process.env["POSTGRES_SERVICE_PORT"],
};

export { config };
