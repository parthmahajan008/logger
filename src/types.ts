export enum LogLevelEnum {
  "ERROR"="ERROR",
  "WARN"="WARN",
  "INFO"="INFO",
  "HTTP"="HTTP",
  "DEBUG"="DEBUG",
}

export enum ApplicationNameEnum {
  "WEB"="WEB",
  "ADMIN"="ADMIN",
  "LOGGER"="LOGGER",
}

export enum EnvironmentEnum {
  "TESTING"="TESTING",
  "DEVELOPMENT"="DEVELOPMENT",
  "PRODUCTION"="PRODUCTION",
}

export enum FeatureEnum {
  "PROJECT"="PROJECT",
  "UNIT"="UNIT",
  "COURSE"="COURSE",
  "BLOG"="BLOG",
}

export enum ActionEnum {
  "COMPLETE"="COMPLETE",
  "ENROLLED"="ENROLLED",
  "SUBMIT"="SUBMIT",
  "COMMENT"="COMMENT",
  "LIKE"="LIKE",
}

export type LogFunctionProps = {
  message: string;
  userId?: string;
  ipAddress?: string;
  applicationName?: ApplicationNameEnum;
  feature?: FeatureEnum;
  action?: ActionEnum;
  data?: Record<string, string>;
};

export type LogFormatterProps = {
  message: string;
  userId?: string;
  ipAddress?: string;
  applicationName?: ApplicationNameEnum;
  feature?: FeatureEnum;
  action?: ActionEnum;
  data?: Record<string, string>;
};
