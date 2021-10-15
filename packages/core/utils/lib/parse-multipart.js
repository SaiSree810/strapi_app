'use strict';

/**
 * @typedef {import('@strapi/strapi').StrapiAppContext} StrapiAppContext
 */

const _ = require('lodash');

/**
 * @param {StrapiAppContext} ctx
 */
module.exports = ctx => {
  if (!ctx.is('multipart')) {
    return { data: ctx.request.body, files: {} };
  }

  const { body = {}, files = {} } = ctx.request;

  if (!body.data) {
    throw strapi.errors.badRequest(
      `When using multipart/form-data you need to provide your data in a JSON 'data' field.`
    );
  }

  let data;
  try {
    data = JSON.parse(body.data);
  } catch (/** @type {any} **/ error) {
    throw strapi.errors.badRequest(`Invalid 'data' field. 'data' should be a valid JSON.`);
  }

  /**
   * @type {Record<string, any>}
   */
  const filesToUpload = {};

  Object.keys(files).reduce((acc, key) => {
    const fullPath = _.toPath(key);

    if (fullPath.length <= 1 || fullPath[0] !== 'files') {
      throw strapi.errors.badRequest(
        `When using multipart/form-data you need to provide your files by prefixing them with the 'files'.
For example, when a media file is named "avatar", make sure the form key name is "files.avatar"`
      );
    }

    const path = _.tail(fullPath);
    acc[path.join('.')] = files[key];
    return acc;
  }, filesToUpload);

  return {
    data,
    files: filesToUpload,
  };
};
