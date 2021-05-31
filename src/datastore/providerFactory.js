const {LeveldbProvider} = require('./providers');

/**
 * Data Store Provider Factory
 */
class ProviderFactory {
  /**
   * Create provider
   *
   * @param { String } providerName
   *
   * @returns {LeveldbProvider}
   */
  static create(providerName) {
    let provider = {};
    switch (providerName) {
      case LeveldbProvider.PROVIDER_NAME:
        provider = new LeveldbProvider();
        break;
      default:
        throw Error('provider does not exist');
    }
    return provider;
  }
}

exports.ProviderFactory = ProviderFactory;
