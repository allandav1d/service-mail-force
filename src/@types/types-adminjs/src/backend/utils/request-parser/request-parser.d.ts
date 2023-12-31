import { ActionRequest } from '../../actions/index.js';
import { BaseResource } from '../../adapters/index.js';
/**
 * Takes the original ActionRequest and convert string values to a corresponding
 * types. It
 *
 * @param {ActionRequest} originalRequest
 * @param {BaseResource}  resource
 * @returns {ActionRequest}
 *
 * @private
 */
export declare const requestParser: (originalRequest: ActionRequest, resource: BaseResource) => ActionRequest;
export default requestParser;
