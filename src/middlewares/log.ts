import log4js, { expressLogger } from "$logger";

export const expressLogMiddleware = log4js.connectLogger(expressLogger, {
  level: 'info',
  format: (req, res, format) => format(
    `Request: ":method :url HTTP/:http-version" :status :content-length ":referrer" ":user-agent"`,
  ),
});