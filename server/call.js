'use strict';

var Logs = require('./logs.js');
var Joi = require('joi');

var logger = new Logs();

function NewCall(data) {
  this.callBone = {
    callid: data.callid,
    callbegin: data.callbegin,
    callanswer: data.callanswer,
    callend: data.callend,
    source: data.source,
    destination: data.destination,
    user: data.user,
    gateway: data.gateway,
    status: '',
  };

  this.schema = Joi.object().keys({
    callid: Joi.number().integer(),
    callbegin: Joi.any().required(),
    callanswer: Joi.any(),
    callend: Joi.any(),
    source: Joi.any().required(),
    destination: Joi.any().required(),
    user: Joi.any().required(),
    gateway: Joi.any().required(),
    status:  Joi.any(),
  });
}

NewCall.prototype.isUndefined = function (key) {
  return key === '' || key === undefined;
};

NewCall.prototype.isValidObject = function () {
  Joi.assert(this.callBone, this.schema, 'ValidationError');
};

NewCall.prototype.setStatus = function () {

  var incomingcall = !this.isUndefined(this.callBone.callbegin) &&
                    this.isUndefined(this.callBone.callanswer) &&
                    this.isUndefined(this.callBone.callend);

  var ongoingcall = !this.isUndefined(this.callBone.callbegin) &&
                    !this.isUndefined(this.callBone.callanswer) &&
                     this.isUndefined(this.callBone.callend);

  var pastcall = !this.isUndefined(this.callBone.callbegin) &&
                 !this.isUndefined(this.callBone.callanswer) &&
                 !this.isUndefined(this.callBone.callend);

  incomingcall ? this.callBone.status = 'incoming' : ongoingcall ? this.callBone.status = 'ongoing' : pastcall ? this.callBone.status = 'ended' : logger.logError('cant get the status');

  return this.callBone.status;
};

NewCall.prototype.returnCall = function () {
  this.setStatus();
  this.isValidObject();

  return this.callBone;
};

module.exports = NewCall;
