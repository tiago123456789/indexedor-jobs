import winston, { format } from "winston";
import { default as Sentry } from 'winston-transport-sentry-node';
import moment from "moment";

// @ts-ignore
const sentryFormat = format(logs => {
  return { ...logs, message: JSON.stringify({ ...logs })  };
});

const logger = winston.createLogger({
  format: winston.format.json(),
  defaultMeta: { app: "system-track-email", timestamp: moment.utc() },
  transports: [
    new Sentry({
      format: sentryFormat(),
      sentry: {
        dsn: process.env.SENTRY_DSN
      },
      level: 'info'
    }),
    new Sentry({
      format: sentryFormat(),
      sentry: {
        dsn: process.env.SENTRY_DSN
      },
      level: 'error'
    }),
  ]
});


export default logger;