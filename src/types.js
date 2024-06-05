"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionEnum = exports.FeatureEnum = exports.EnvironmentEnum = exports.ApplicationNameEnum = exports.LogLevelEnum = void 0;
var LogLevelEnum;
(function (LogLevelEnum) {
    LogLevelEnum["ERROR"] = "ERROR";
    LogLevelEnum["WARN"] = "WARN";
    LogLevelEnum["INFO"] = "INFO";
    LogLevelEnum["HTTP"] = "HTTP";
    LogLevelEnum["DEBUG"] = "DEBUG";
})(LogLevelEnum || (exports.LogLevelEnum = LogLevelEnum = {}));
var ApplicationNameEnum;
(function (ApplicationNameEnum) {
    ApplicationNameEnum["WEB"] = "WEB";
    ApplicationNameEnum["ADMIN"] = "ADMIN";
    ApplicationNameEnum["LOGGER"] = "LOGGER";
})(ApplicationNameEnum || (exports.ApplicationNameEnum = ApplicationNameEnum = {}));
var EnvironmentEnum;
(function (EnvironmentEnum) {
    EnvironmentEnum["TESTING"] = "TESTING";
    EnvironmentEnum["DEVELOPMENT"] = "DEVELOPMENT";
    EnvironmentEnum["PRODUCTION"] = "PRODUCTION";
})(EnvironmentEnum || (exports.EnvironmentEnum = EnvironmentEnum = {}));
var FeatureEnum;
(function (FeatureEnum) {
    FeatureEnum["PROJECT"] = "PROJECT";
    FeatureEnum["UNIT"] = "UNIT";
    FeatureEnum["COURSE"] = "COURSE";
    FeatureEnum["BLOG"] = "BLOG";
})(FeatureEnum || (exports.FeatureEnum = FeatureEnum = {}));
var ActionEnum;
(function (ActionEnum) {
    ActionEnum["COMPLETE"] = "COMPLETE";
    ActionEnum["ENROLLED"] = "ENROLLED";
    ActionEnum["SUBMIT"] = "SUBMIT";
    ActionEnum["COMMENT"] = "COMMENT";
    ActionEnum["LIKE"] = "LIKE";
})(ActionEnum || (exports.ActionEnum = ActionEnum = {}));
