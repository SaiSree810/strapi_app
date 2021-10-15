'use strict';

const _ = require('lodash');

const SINGLE_TYPE = 'singleType';
const COLLECTION_TYPE = 'collectionType';

const ID_ATTRIBUTE = 'id';
const PUBLISHED_AT_ATTRIBUTE = 'publishedAt';
const CREATED_BY_ATTRIBUTE = 'createdBy';
const UPDATED_BY_ATTRIBUTE = 'updatedBy';

const CREATED_AT_ATTRIBUTE = 'createdAt';
const UPDATED_AT_ATTRIBUTE = 'updatedAt';

const DP_PUB_STATE_LIVE = 'live';
const DP_PUB_STATE_PREVIEW = 'preview';
const DP_PUB_STATES = [DP_PUB_STATE_LIVE, DP_PUB_STATE_PREVIEW];

const constants = {
  ID_ATTRIBUTE,
  PUBLISHED_AT_ATTRIBUTE,
  CREATED_BY_ATTRIBUTE,
  UPDATED_BY_ATTRIBUTE,
  CREATED_AT_ATTRIBUTE,
  UPDATED_AT_ATTRIBUTE,
  DP_PUB_STATES,
  DP_PUB_STATE_LIVE,
  DP_PUB_STATE_PREVIEW,
  SINGLE_TYPE,
  COLLECTION_TYPE,
};

const getTimestamps = () => {
  return [CREATED_AT_ATTRIBUTE, UPDATED_AT_ATTRIBUTE];
};

const getNonWritableAttributes = (model = {}) => {
  const nonWritableAttributes = _.reduce(
    model.attributes,
    (acc, attr, attrName) => (attr.writable === false ? acc.concat(attrName) : acc),
    []
  );

  return _.uniq([ID_ATTRIBUTE, ...getTimestamps(), ...nonWritableAttributes]);
};

const getWritableAttributes = (model = {}) => {
  return _.difference(Object.keys(model.attributes), getNonWritableAttributes(model));
};

const isWritableAttribute = (model, attributeName) => {
  return getWritableAttributes(model).includes(attributeName);
};

const getNonVisibleAttributes = model => {
  const nonVisibleAttributes = _.reduce(
    model.attributes,
    (acc, attr, attrName) => (attr.visible === false ? acc.concat(attrName) : acc),
    []
  );

  return _.uniq([ID_ATTRIBUTE, ...getTimestamps(), ...nonVisibleAttributes]);
};

const getVisibleAttributes = model => {
  return _.difference(_.keys(model.attributes), getNonVisibleAttributes(model));
};

const isVisibleAttribute = (model, attributeName) => {
  return getVisibleAttributes(model).includes(attributeName);
};

const hasDraftAndPublish = model => _.get(model, 'options.draftAndPublish', false) === true;

const isDraft = (data, model) =>
  hasDraftAndPublish(model) && _.get(data, PUBLISHED_AT_ATTRIBUTE) === null;

const isSingleType = ({ kind = COLLECTION_TYPE }) => kind === SINGLE_TYPE;
const isCollectionType = ({ kind = COLLECTION_TYPE }) => kind === COLLECTION_TYPE;

/**
 * @param {string} kind
 */
const isKind = kind => model => model.kind === kind;

/**
 * @param {{
 *  attributes?: any
 * }=} model
 */
const getPrivateAttributes = (model = {}) => {
  return _.union(
    strapi.config.get('api.responses.privateAttributes', []),
    _.get(model, 'options.privateAttributes', []),
    _.keys(_.pickBy(model.attributes, attr => !!attr.private))
  );
};

/**
 * @param {{
 *  privateAttributes?: string
 * }=} model
 * @param {string=} attributeName
 */
const isPrivateAttribute = (model = {}, attributeName) => {
  return (
    model &&
    model.privateAttributes &&
    attributeName &&
    model.privateAttributes.includes(attributeName)
  );
};

/**
 * @param {{
 *  type: string
 * }} attribute
 */
const isScalarAttribute = attribute => {
  return !['component', 'relation', 'dynamiczone'].includes(attribute.type);
};

/**
 * @param {{
 *  type: string
 * }} attr
 */
const isMediaAttribute = attr => {
  return attr.type === 'media';
};

/**
 * @param {{
 *  type: string
 * }} attribute
 */
const isRelationalAttribute = attribute => attribute.type === 'relation';

/**
 * @param {{
 *  type: string
 * }} attribute
 */
const isComponentAttribute = attribute => ['component', 'dynamiczone'].includes(attribute.type);

/**
 * Checks if an attribute is of type `type`
 * @param {object} attribute
 * @param {string} type
 */
const isTypedAttribute = (attribute, type) => {
  return _.has(attribute, 'type') && attribute.type === type;
};

/**
 *  Returns a route prefix for a contentType
 * @param {{
 *  kind: string
 *  info: {
 *    singularName: string
 *    pluralName: string
 *  }
 * }} contentType
 * @returns {string}
 */
const getContentTypeRoutePrefix = contentType => {
  return isSingleType(contentType)
    ? _.kebabCase(contentType.info.singularName)
    : _.kebabCase(contentType.info.pluralName);
};

module.exports = {
  isScalarAttribute,
  isMediaAttribute,
  isRelationalAttribute,
  isComponentAttribute,
  isTypedAttribute,
  getPrivateAttributes,
  isPrivateAttribute,
  constants,
  getNonWritableAttributes,
  getWritableAttributes,
  isWritableAttribute,
  getNonVisibleAttributes,
  getVisibleAttributes,
  isVisibleAttribute,
  hasDraftAndPublish,
  isDraft,
  isSingleType,
  isCollectionType,
  isKind,
  getContentTypeRoutePrefix,
};
