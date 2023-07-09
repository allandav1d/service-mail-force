import { type MessageBoxProps } from '@adminjs/design-system';
import { type TOptions } from 'i18next';
import { type ReactNode } from 'react';
/**
 * NoticeMessage which can be presented as a "Toast" message.
 * @alias NoticeMessage
 */
export type NoticeMessage = {
    message: string;
    type?: MessageBoxProps['variant'] | 'error';
    options?: TOptions;
    resourceId?: string;
    body?: ReactNode;
};
