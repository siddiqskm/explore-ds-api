const {InternalServerError} = require('../utils/httpErrors');
const leveldbClient = require('./leveldb');

class LeveldbService {
  constructor() {
    this.client = leveldbClient;
  }

  /**
     *
     * @param {*} key
     * @param {*} content
     * @returns
     */
  async set(key, content) {
    if (!content || !key) {
      throw new InternalServerError('Save data error');
    }
    console.log('Inserting the key: %s - %s', key, JSON.stringify(content));
    return this.client.put(key, JSON.stringify(content));
  }

  /**
     *
     * @param {*} key
     * @returns
     */
  async get(key) {
    return this.client.get(key);
  }

  /**
     * Delete key value pair
     *
     * @returns {Promise<*>}
     */
  async deleteObject(key) {
    console.log('Deleting the object -', key);
    return this.client.del(key);
  }
}

LeveldbService.REPO_TABLE_PREFIX = 'repo';

exports.LeveldbService = LeveldbService;
