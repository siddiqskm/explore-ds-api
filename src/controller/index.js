const {
  HttpStatusCode,
} = require('../utils/httpErrors');
const {DataHelper} = require('../utils/dataHelper');
const {HttpHelper} = require('../utils/httpHelper');
const {dataStore} = require('../datastore');

class Controller {
  static async uploadObject(req, res) {
    const dataObject = DataHelper.generateDataObject(req);
    console.log('data object generated is: %s', JSON.stringify(dataObject));
    await dataStore.save(dataObject);
    return res.status(HttpStatusCode.Created)
        .json(DataHelper.formatDataResponseObject(dataObject));
  }

  static async downloadObject(req, res) {
    const body = HttpHelper.getAllParamsFromRequest(req);
    console.log('Yup, am in download object');
    const params = req.params;
    try {
      const dataObject = await dataStore.get(body.repository, params.objectId);
      const ret = DataHelper.formatDataResponseObject(JSON.parse(dataObject));
      return res.status(HttpStatusCode.OK).json(ret.data);
    } catch (err) {
      // Leveldb raises an error in case the key doesn't exist
      // So, safe to return a Not Found error
      return res.sendStatus(HttpStatusCode.NotFound);
    }
  }

  static async deleteObject(req, res) {
    console.log('Yup, am in delete object');
    try {
      const params = req.params;
      const body = HttpHelper.getAllParamsFromRequest(req);
      await dataStore.get(body.repository, params.objectId);
      await dataStore.deleteObject(params.repository, params.objectId);
      return res.sendStatus(HttpStatusCode.OK);
    } catch (err) {
      // Leveldb raises an error in case the key doesn't exist
      // So, safe to return a Not Found error
      console.log('Exception caught is -', err);
      return res.sendStatus(HttpStatusCode.NotFound);
    }
  }
}

exports.Controller = Controller;
