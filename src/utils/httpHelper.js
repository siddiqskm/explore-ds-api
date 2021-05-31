/**
 * HttpResponse
 */
class HttpHelper {
  /**
     * Get Body from format
     *
     * @param event
     *
     * @return Object
     */
  static getBodyFromRequest(req) {
    return req.body;
  }

  /**
     * Get POST/GET request params
     *
     * @param req
     *
     * @return {*|{}}
     */
  static getAllParamsFromRequest(req) {
    let params = {};
    params = Object.assign(params, req.body);
    params = Object.assign(params, req.params);
    params = Object.assign(params, req.query);
    return params;
  }
}

module.exports.HttpHelper = HttpHelper;
