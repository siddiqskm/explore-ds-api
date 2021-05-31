const uuid = require('uuid');
const crypto = require('crypto');
const sizeof = require('object-sizeof');

class DataHelper {
  /**
     * Generate Object Hash
     *
     * @return string
     */
  static generateObjectHash(obj) {
    return crypto.createHash('sha256').update(JSON.stringify(obj))
        .digest('hex');
  }

  /**
     * Generate data object
     *
     * @param Object data
     * @param string oid
     *
     * @return dataObject
     */
  static generateDataObject(req) {
    // console.log('dataobject passed is -', req);
    // generate object id
    const dataObject = {
      oid: null,
      size: sizeof(req.body),
      repository: req.params.repository,
      data: req.body,
    };
    dataObject.oid = DataHelper.generateObjectHash(dataObject);
    return dataObject;
  }

  static formatDataResponseObject(data) {
    return {
      oid: data.oid,
      data: data.data,
      size: data.size,
    };
  }
}

module.exports.DataHelper = DataHelper;
