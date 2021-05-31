/* eslint-disable no-unused-vars */
/**
 * Abstract class (interface for Data storage)
 */
class DataStoreProviderAbstract {
  constructor() {
    if (this.constructor === DataStoreProviderAbstract) {
      throw new Error('abstract class!');
    }
  }
}

/**
 * Abstract save method
 *
 * @param Object data
 */
DataStoreProviderAbstract.prototype.save = function(data) {
  throw new Error('Provider save method error');
};

/**
 * Abstract get method
 *
 * @param Object data
 */
DataStoreProviderAbstract.prototype.get = function(repository, oid) {
  throw new Error('Provider get method error');
};

// eslint-disable-next-line max-len
DataStoreProviderAbstract.prototype.deleteObject = function(repository, oid) {
  throw new Error('Provider deleteObject data method error');
};

exports.DataStoreProviderAbstract = DataStoreProviderAbstract;
