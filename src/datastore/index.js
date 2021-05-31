const {
  DataStoreProviderAbstract,
} = require('./providers/datastoreProviderAbstract');
const {ProviderFactory} = require('./providerFactory');

/**
 * Data Storage
 */
class DataStore {
  /**
   * constructor
   *
   * @param provider
   */
  constructor(provider) {
    if (!(provider instanceof DataStoreProviderAbstract)) {
      throw new Error('Provider not supported !!!');
    }
    this.provider = provider;
  }

  /**
   * Save data object
   *
   * @param Object obj
   *
   * @returns {Promise<*|SaveStatus|void>}
   */
  async save(obj) {
    return this.provider.save(obj);
  }

  /**
   * Get data by condition
   *
   * @param conditions
   *
   * @returns {Promise<*>}
   */
  async get(repository, oid) {
    return this.provider.get(repository, oid);
  }

  /**
   * Delete data Object by id
   *
   * @param string oid
   *
   * @returns {Promise<*>}
   */
  async deleteObject(repository, oid) {
    return this.provider.deleteObject(repository, oid);
  }
}

// init data storage
const dsProvider = ProviderFactory.create(process.env.DATASTORE);
const dataStore = new DataStore(dsProvider);

exports.dataStore = dataStore;
