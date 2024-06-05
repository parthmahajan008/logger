import {
  ActionEnum,
  ApplicationNameEnum,
  FeatureEnum,
  LogFormatterProps,
  LogFunctionProps,
  LogLevelEnum,
} from "@/types";

class LogEnricher {
  private _timestamp: Date = new Date();
  private _envVariables: Record<string, string> = {};
  private _id: string = "";

  constructor() {
    this._id = this.generateUniqueId();
    this._envVariables = this.getEnvironmentVariables();
  }

  private generateUniqueId(): string {
    // TODO: Implement
    return "TODO";
  }

  private getEnvironmentVariables() {
    return process.env as Record<string, string>;
  }

  public enrichLog(log: Record<string, any>): Record<string, any> {
    return {
      ...log,
      timestamp: this._timestamp,
      envVariables: this._envVariables,
      id: this._id,
    };
  }
}

export class Logger {
  private _logEnricher: LogEnricher = new LogEnricher();
  private _level: LogLevelEnum = LogLevelEnum.INFO;
  private _message: string = "";
  private _userId?: string;
  private _ipAddress?: string;
  private _applicationName?: ApplicationNameEnum;
  private _feature?: FeatureEnum;
  private _action?: ActionEnum;
  private _data?: Record<string, string>;

  public toJson(): Record<string, any> {
    return {
      level: this.level,
      message: this.message,
      userId: this.userId,
      ipAddress: this.ipAddress,
      applicationName: this.applicationName,
      feature: this.feature,
      action: this.action,
      data: this.data,
    };
  }

  public get level(): LogLevelEnum {
    return this._level;
  }

  public set level(value: LogLevelEnum) {
    this._level = value;
  }

  public get message(): string {
    return this._message;
  }

  public set message(value: string) {
    this._message = value;
  }

  public get userId(): string | undefined {
    return this._userId;
  }

  public set userId(value: string | undefined) {
    this._userId = value;
  }

  public get ipAddress(): string | undefined {
    return this._ipAddress;
  }

  public set ipAddress(value: string | undefined) {
    this._ipAddress = value;
  }

  public get applicationName(): ApplicationNameEnum | undefined {
    return this._applicationName;
  }

  public set applicationName(value: ApplicationNameEnum | undefined) {
    this._applicationName = value;
  }

  public get feature(): FeatureEnum | undefined {
    return this._feature;
  }

  public set feature(value: FeatureEnum | undefined) {
    this._feature = value;
  }

  public get action(): ActionEnum | undefined {
    return this._action;
  }

  public set action(value: ActionEnum | undefined) {
    this._action = value;
  }

  public get data(): Record<string, string> | undefined {
    return this._data;
  }

  public set data(value: Record<string, string> | undefined) {
    this._data = value;
  }

  public toString() {
    console.log(
      `Logger: level=${this.level}, message=${this.message}, userId=${this.userId}, ipAddress=${this.ipAddress}, applicationName=${this.applicationName}, feature=${this.feature}, action=${this.action}, data=${JSON.stringify(this.data)}`,
    );
  }

  public log({
    level,
    message,
    ...args
  }: LogFunctionProps & { level: LogLevelEnum }) {
    const enrichedLog = this._logEnricher.enrichLog({
      level,
      message,
      ...args,
    });
    const formattedLog = this.format(enrichedLog);
    const coloredLog = this.getColoredLog(formattedLog);
    console.log(coloredLog);
  }

  public debug({ message, ...args }: LogFunctionProps) {
    this.logWithLevel(LogLevelEnum.DEBUG, { message, ...args });
  }

  public warn({ message, ...args }: LogFunctionProps) {
    this.logWithLevel(LogLevelEnum.WARN, { message, ...args });
  }

  public info({ message, ...args }: LogFunctionProps) {
    this.logWithLevel(LogLevelEnum.INFO, { message, ...args });
  }

  public error({ message, ...args }: LogFunctionProps) {
    this.logWithLevel(LogLevelEnum.ERROR, { message, ...args });
  }

  public http({ message, ...args }: LogFunctionProps) {
    this.logWithLevel(LogLevelEnum.HTTP, { message, ...args });
  }

  private logWithLevel(
    level: LogLevelEnum,
    { message, ...args }: LogFunctionProps,
  ) {
    this.level = level;
    this.message = message;
    this.log({ level, message, ...args });
  }

  private format(log: Record<string, any>): string {
    return `[${log.timestamp}] [${log.level}] - ${this.getFormattedMessage(log)}`;
  }

  private getFormattedMessage(log: Record<string, any>): string {
    let formattedMessage = `[${log.message}]`;

    if (log.userId) {
      formattedMessage += ` by [${log.userId}]`;
    }

    if (log.ipAddress) {
      formattedMessage += ` with [${log.ipAddress}]`;
    }

    if (log.applicationName) {
      formattedMessage += ` on [${log.applicationName}]`;
    }

    if (log.feature) {
      formattedMessage += ` in [${log.feature}]`;
    }

    if (log.action) {
      formattedMessage += ` performed [${log.action}]`;
    }

    if (log.data) {
      formattedMessage += ` with ${JSON.stringify(log.data)}`;
    }

    return formattedMessage;
  }

  private getColoredLog(formattedLog: string) {
    let color: string;
    switch (this.level) {
      case LogLevelEnum.ERROR:
        color = "31";
        break;
      case LogLevelEnum.WARN:
        color = "33";
        break;
      case LogLevelEnum.HTTP:
        color = "32";
        break;
      case LogLevelEnum.INFO:
        color = "34";
        break;
      default:
        return formattedLog;
    }

    return `\x1B[${color}m${formattedLog}\x1B[0m`;
  }
}
