"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var types_1 = require("../../types");
var Logger = /** @class */ (function () {
    function Logger() {
        this._timestamp = new Date();
        this._level = types_1.LogLevelEnum.INFO;
        this._message = "";
        this._envVariables = {};
        this._timestamp = new Date();
        this._envVariables = this.getEnvironmentVariables();
    }
    Logger.prototype.getEnvironmentVariables = function () {
        return process.env;
    };
    Logger.prototype.toJson = function () {
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
    };
    Object.defineProperty(Logger.prototype, "timestamp", {
        get: function () {
            return this._timestamp;
        },
        set: function (value) {
            this._timestamp = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "level", {
        get: function () {
            return this._level;
        },
        set: function (value) {
            this._level = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            this._message = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        set: function (value) {
            this._userId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "ipAddress", {
        get: function () {
            return this._ipAddress;
        },
        set: function (value) {
            this._ipAddress = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "applicationName", {
        get: function () {
            return this._applicationName;
        },
        set: function (value) {
            this._applicationName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "feature", {
        get: function () {
            return this._feature;
        },
        set: function (value) {
            this._feature = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "action", {
        get: function () {
            return this._action;
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: false,
        configurable: true
    });
    Logger.prototype.toString = function () {
        console.log("Logger: level=".concat(this.level, ", message=").concat(this.message, ", userId=").concat(this.userId, ", ipAddress=").concat(this.ipAddress, ", applicationName=").concat(this.applicationName, ", feature=").concat(this.feature, ", action=").concat(this.action, ", data=").concat(JSON.stringify(this.data)));
    };
    Logger.prototype.log = function (_a) {
        var level = _a.level, message = _a.message, args = __rest(_a, ["level", "message"]);
        var formattedLog = this.format(__assign({ timestamp: this.timestamp, level: level, message: message }, args));
        var coloredLog = this.getColoredLog(formattedLog);
        console.log(coloredLog);
    };
    Logger.prototype.debug = function (_a) {
        var message = _a.message, args = __rest(_a, ["message"]);
        this.logWithLevel(types_1.LogLevelEnum.DEBUG, __assign({ message: message }, args));
    };
    Logger.prototype.warn = function (_a) {
        var message = _a.message, args = __rest(_a, ["message"]);
        this.logWithLevel(types_1.LogLevelEnum.WARN, __assign({ message: message }, args));
    };
    Logger.prototype.info = function (_a) {
        var message = _a.message, args = __rest(_a, ["message"]);
        this.logWithLevel(types_1.LogLevelEnum.INFO, __assign({ message: message }, args));
    };
    Logger.prototype.error = function (_a) {
        var message = _a.message, args = __rest(_a, ["message"]);
        this.logWithLevel(types_1.LogLevelEnum.ERROR, __assign({ message: message }, args));
    };
    Logger.prototype.http = function (_a) {
        var message = _a.message, args = __rest(_a, ["message"]);
        this.logWithLevel(types_1.LogLevelEnum.HTTP, __assign({ message: message }, args));
    };
    Logger.prototype.logWithLevel = function (level, _a) {
        var message = _a.message, args = __rest(_a, ["message"]);
        this.timestamp = new Date();
        this.level = level;
        this.message = message;
        this.log(__assign({ level: level, message: message }, args));
    };
    Logger.prototype.format = function (_a) {
        var timestamp = _a.timestamp, level = _a.level, args = __rest(_a, ["timestamp", "level"]);
        return "[".concat(timestamp, "] [").concat(level, "] - ").concat(this.getFormattedMessage(args));
    };
    Logger.prototype.getFormattedMessage = function (_a) {
        var _b, _c, _d, _e, _f, _g;
        var message = _a.message, userId = _a.userId, ipAddress = _a.ipAddress, applicationName = _a.applicationName, feature = _a.feature, action = _a.action, data = _a.data;
        var formattedMessage = "[".concat(message, "]");
        userId = (_b = this.userId) !== null && _b !== void 0 ? _b : userId;
        ipAddress = (_c = this.ipAddress) !== null && _c !== void 0 ? _c : ipAddress;
        applicationName = (_d = this.applicationName) !== null && _d !== void 0 ? _d : applicationName;
        feature = (_e = this.feature) !== null && _e !== void 0 ? _e : feature;
        action = (_f = this.action) !== null && _f !== void 0 ? _f : action;
        data = (_g = this.data) !== null && _g !== void 0 ? _g : data;
        if (userId) {
            formattedMessage += " by [".concat(userId, "]");
        }
        if (ipAddress) {
            formattedMessage += " with [".concat(ipAddress, "]");
        }
        if (applicationName) {
            formattedMessage += " on [".concat(applicationName, "]");
        }
        if (feature) {
            formattedMessage += " in [".concat(feature, "]");
        }
        if (action) {
            formattedMessage += " performed [".concat(action, "]");
        }
        if (data) {
            formattedMessage += " with ".concat(JSON.stringify(data));
        }
        return formattedMessage;
    };
    Logger.prototype.getColoredLog = function (formattedLog) {
        var color;
        switch (this.level) {
            case types_1.LogLevelEnum.ERROR:
                color = "31";
                break;
            case types_1.LogLevelEnum.WARN:
                color = "33";
                break;
            case types_1.LogLevelEnum.HTTP:
                color = "32";
                break;
            case types_1.LogLevelEnum.INFO:
                color = "34";
                break;
            default:
                return formattedLog;
        }
        return "\u001B[".concat(color, "m").concat(formattedLog, "\u001B[0m");
    };
    return Logger;
}());
exports.Logger = Logger;
var log = new Logger();
log.level = types_1.LogLevelEnum.DEBUG;
log.message = "Hello World!";
log.data = { bearer: "#1628939i20i0i" };
console.log(log.toJson());
