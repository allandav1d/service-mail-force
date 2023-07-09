import { NoticeMessage } from '../../../index.js';
import RecordError from './record-error.js';
/**
 * Error which can be thrown by developer in custom actions/hooks/components
 *
 * @category Errors
 */
export declare class AppError extends Error {
    /**
     * HTTP Status code, defaults to 400
     */
    statusCode: number;
    /**
     * Base error message and type which is stored in the record
     */
    baseError: RecordError;
    /**
     * Any custom message which should be seen in the UI
     */
    baseMessage?: string;
    /**
     * Any additional error information
     */
    data?: Record<string, unknown>;
    /**
     * Any additional notice configuration to show in UI
     */
    notice?: Partial<NoticeMessage>;
    /**
     * @param {string} message    a message to be shared with the client
     * @param {string} data       additional data to be shared with the client
     */
    constructor(message: string, data?: Record<string, unknown>, notice?: Partial<NoticeMessage>);
}
export default AppError;
