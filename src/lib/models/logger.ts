import {
  ActionEnum,
  ApplicationNameEnum,
  FeatureEnum,
  LogFormatterProps,
  LogFunctionProps,
  LogLevelEnum,
} from "../../types";

export class Logger {
  private _timestamp: Date = new Date();
  private _level: LogLevelEnum = LogLevelEnum.INFO;
  private _message: string = "";
  private _userId?: string;
  private _ipAddress?: string;
  private _applicationName?: ApplicationNameEnum;
  private _envVariables: Record<string, string> = {};
  private _feature?: FeatureEnum;
  private _action?: ActionEnum;
  private _data?: Record<string, string>;

  constructor() {
    this._timestamp = new Date();
    this._envVariables = this.getEnvironmentVariables();
  }

  private getEnvironmentVariables() {
    return process.env as Record<string, string>;
  }

  public toJson(): Record<string, any> {
    return {
      timestamp: this.timestamp,
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

  public get timestamp(): Date {
    return this._timestamp;
  }

  public set timestamp(value: Date) {
    this._timestamp = value;
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
    const formattedLog = this.format({
      timestamp: this.timestamp,
      level,
      message,
      ...args,
    });
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
    this.timestamp = new Date();
    this.level = level;
    this.message = message;
    this.log({ level, message, ...args });
  }

  private format({
    timestamp,
    level,
    ...args
  }: LogFunctionProps & { timestamp: Date; level: LogLevelEnum }) {
    return `[${timestamp}] [${level}] - ${this.getFormattedMessage(args)}`;
  }

  private getFormattedMessage({
    message,
    userId,
    ipAddress,
    applicationName,
    feature,
    action,
    data,
  }: LogFormatterProps) {
    let formattedMessage = `[${message}]`;

    userId = this.userId ?? userId;
    ipAddress = this.ipAddress ?? ipAddress;
    applicationName = this.applicationName ?? applicationName;
    feature = this.feature ?? feature;
    action = this.action ?? action;
    data = this.data ?? data;

    if (userId) {
      formattedMessage += ` by [${userId}]`;
    }

    if (ipAddress) {
      formattedMessage += ` with [${ipAddress}]`;
    }

    if (applicationName) {
      formattedMessage += ` on [${applicationName}]`;
    }

    if (feature) {
      formattedMessage += ` in [${feature}]`;
    }

    if (action) {
      formattedMessage += ` performed [${action}]`;
    }

    if (data) {
      formattedMessage += ` with ${JSON.stringify(data)}`;
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

const log = new Logger();
log.level = LogLevelEnum.DEBUG;
log.message = "Hello World!";
log.data = { bearer: "#1628939i20i0i" };
console.log(log.toJson());
