const level = require('level');

class LeveldbInstance {
  createClient() {
    // Datastore Path
    let dbPath;
    if (process.env.DATASTORE_PATH) {
      dbPath = process.env.DATASTORE_PATH;
      console.log('Level DB is gonna use the following DB - %s', dbPath);
    } else {
      throw new Error('The variable DATASTORE_PATH is not defined !!!');
    }

    return level(dbPath, {createIfMissing: true});
  }
}

const leveldbInstance = new LeveldbInstance();

let leveldbClient = null;

if (typeof leveldbClient !== 'undefined') {
  leveldbClient = leveldbInstance.createClient();
}

module.exports = leveldbClient;
