import pino from "pino";
import dotenv from "dotenv";

dotenv.config();

const prettyTransport = pino.transport({
  // By default, logs to Console with pretty format
  target: "pino-pretty",
  options: {
    translateTime: "SYS:dd-mm-yyyy HH:MM:ss",
  },
});

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
  prettyTransport
);

export default logger;
