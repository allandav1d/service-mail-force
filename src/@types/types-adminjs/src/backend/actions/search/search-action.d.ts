import { Action, ActionResponse } from '../action.interface.js';
import { RecordJSON } from '../../../frontend/interfaces/index.js';
/**
 * @implements Action
 * @category Actions
 * @module SearchAction
 * @description
 * Used to search particular record based on "title" property. It is used by
 * select fields with autocomplete.
 * Uses {@link ShowAction} component to render form
 * @private
 */
export declare const SearchAction: Action<SearchActionResponse>;
export default SearchAction;
/**
 * Response of a [Search]{@link ApiController#search} action in the API
 * @memberof module:SearchAction
 * @alias SearchResponse
 */
export type SearchActionResponse = ActionResponse & {
    /**
     * List of records
     */
    records: Array<RecordJSON>;
};
