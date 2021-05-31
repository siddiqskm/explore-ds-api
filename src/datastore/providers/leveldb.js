const {DataStoreProviderAbstract} = require('./datastoreProviderAbstract');
const {LeveldbService} = require('../../services/leveldbService');
const {internalServerError} = require('../../utils/httpErrors');


class LeveldbProvider extends DataStoreProviderAbstract {
  constructor() {
    super();
    this.service = new LeveldbService();
  }

  /**
   * Generate LevelDB key
   *
   * @param Object data
   *
   * @returns string
   */
  static generateLeveldbKey(repository, oid) {
    // eslint-disable-next-line max-len
    return LeveldbService.REPO_TABLE_PREFIX + '::' + repository + '::' + oid;
  }

  /**
   * Save Data
   *
   * @param Object data
   *
   * @returns {Promise<void>}
   */
  async save(data) {
    const key = LeveldbProvider.generateLeveldbKey(data.repository, data.oid);
    console.log('Oh yeah am in man - %s and %s', key, JSON.stringify(data));
    await this.service.set(key, data);
    return data.oid;
  }

  /**
   * Get data with condition
   *
   * @param data
   *
   * @returns {Promise<[Object]>}
   */
  async get(repository, oid) {
    const key = LeveldbProvider.generateLeveldbKey(repository, oid);
    console.log('Key generated - %s', key);
    return this.service.get(key);
  }

  /**
   *
   * @param {*} oid
   * @param {*} repository
   * @returns
   */
  async deleteObject(repository, oid) {
    const key = LeveldbProvider.generateLeveldbKey(repository, oid);
    await this.service.deleteObject(key);
    return true;
  }
}

LeveldbProvider.PROVIDER_NAME = 'leveldb';

exports.LeveldbProvider = LeveldbProvider;
