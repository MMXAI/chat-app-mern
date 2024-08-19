import pino from "pino";
import dotenv from "dotenv";

dotenv.config();

const prettyTransport = pino.transport({
  // By default, logs to Console with pretty format
  target: "pino-pretty",
  options: {
    translateTime: "SYS:dd-mm-yyyy HH:MM:ss",
    // ** Uncomment the 3 below to log to File with pretty format
    // destination: "./logs/output.log",
    // mkdir: true,
    // colorize: false,
  },
});

const jsonTransport = pino.transport({
  // Logs to file with JSON format
  target: "pino/file",
  options: {
    destination: "./logs/output.log",
    mkdir: true,
  },
});

const transport =
  process.env.NODE_ENV === "development" ? prettyTransport : jsonTransport;

const logger = pino(
  {
    name: "RealTime-Chat-App",
    //Default Levels: fatal:60 error:50 warn:40 info:30 debug:20 trace:10
    customLevels: { catastrophy: 70 },
    // The props that you want to be removed in logging for security reasons
    redact: {
      paths: ["fullName", "password"],
      remove: true,
    },
    //The minimum level that the logger should report
    level: process.env.PINO_LOG_LEVEL,
    // The log level cannot be customized when using multiple transports
    formatters: {
      level: (label) => {
        return { level: label.toUpperCase() };
      },
    },
  },
  transport,
);

export default logger;
