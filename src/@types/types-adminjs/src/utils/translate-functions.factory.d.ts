import { i18n as I18n, TFunction, TOptions } from 'i18next';
/**
 * @memberof TranslateFunctions
 * @alias TranslateFunction
 */
export type TranslateFunction = (
/**
 * Translation key which should be translated in a given namespace
 */
key: string, 
/**
 * Optional resourceId or [Translate options]{@link https://www.i18next.com/overview/configuration-options}
 */
resourceId?: string | TOptions, 
/**
 * [Translate options]{@link https://www.i18next.com/overview/configuration-options}
 */
options?: TOptions) => string;
/**
 * Translate Functions are the helper functions which you can use to translate
 * your application.
 *
 * On the fronted they can be used with {@link useTranslation} hook. On the backend
 * they are injected to any {@link AdminJS} instance and {@link ActionContext}.
 */
export interface TranslateFunctions {
    /**
     * shortcut for I18n.translate function.
     * @see https://www.i18next.com/overview/api#t
     */
    t: TFunction;
    /**
     * I18n.translate function.
     * @see https://www.i18next.com/overview/api#t
     */
    translate: TFunction;
    /**
     * Shortcut for {@link TranslateFunctions#translateAction}
     */
    ta: TranslateFunction;
    /**
     * Translates all [actions]{@link Action}, to be more specific - their labels.
     * By default, it looks for a [translation key]{@link LocaleTranslations} in
     * `resource.{resourceId}.actions.{actionName}`, when it doesn't find
     * that, the lookup is moved to `actions.{actionName}`.
     * Finally, when that also fails, it returns startCase of the action name.
     */
    translateAction: TranslateFunction;
    /**
     * Shortcut for {@link TranslateFunctions#translateButton}
     */
    tb: TranslateFunction;
    /**
     * Translates all buttons.
     * By default, it looks for a [translation key]{@link LocaleTranslations} in
     * `resource.{resourceId}.buttons.{actionName}`, when it doesn't find
     * that, the lookup is moved to `buttons.{actionName}`.
     * Finally, when that also fails, it returns startCase of the given button name.
     */
    translateButton: TranslateFunction;
    /**
     * Shortcut for {@link TranslateFunctions#translateLabel}
     */
    tl: TranslateFunction;
    /**
     * Translates all labels. Most of all all resource names are treated as labels.
     * Also, labels are texts in the user interface which cannot be recognized
     * as any other type.
     * By default, it looks for a [translation key]{@link LocaleTranslations} in
     * `resource.{resourceId}.labels.{actionName}`, when it doesn't find
     * that, the lookup is moved to `labels.{actionName}`.
     * Finally, when that also fails, it returns startCase of the given label.
     */
    translateLabel: TranslateFunction;
    /**
     * Shortcut for {@link TranslateFunctions#translateProperty}
     */
    tp: TranslateFunction;
    /**
     * Translates all the property names.
     * By default, it looks for a [translation key]{@link LocaleTranslations} in
     * `resource.{resourceId}.properties.{propertyPath}`, when it doesn't find
     * that, the lookup is moved to `properties.{propertyPath}`. When that fails,
     * it returns startCase of the given property name.
     *
     * What is important here is that you can put nested property as well, In that
     * case you have to pass dotted path:
     *
     * ```javascript
     * {
     *   properties: {
     *      parent: 'parent property',
     *      'parent.nested': 'nested property'
     *   }
     * }
     * ```
     */
    translateProperty: TranslateFunction;
    /**
     * Shortcut for {@link TranslateFunctions#translateMessage}
     */
    tm: TranslateFunction;
    /**
     * Translates all the messages in the application.
     * By default, it looks for a [translation key]{@link LocaleTranslations} in
     * `resource.{resourceId}.messages.{messageName}`, when it doesn't find
     * that, the lookup is moved to `messages.{messageName}`.
     * Finally, when that also fails, it returns startCase of the given message name.
     */
    translateMessage: TranslateFunction;
    /**
     * Shortcut for {@link TranslateFunctions#translateComponent}
     */
    tc: TranslateFunction;
    /**
     * Translates component's labels in the application.
     * By default, it looks for a [translation key]{@link LocaleTranslations} in
     * `resource.{resourceId}.components.{label}`, when it doesn't find
     * that, the lookup is moved to `components.{label}`.
     * Finally, when that also fails, it returns startCase of the given label.
     */
    translateComponent: TranslateFunction;
    /**
     * Translates page's labels in the application.
     * By default, it looks for a [translation key]{@link LocaleTranslations} in
     * `resource.{resourceId}.pages.{label}`, when it doesn't find
     * that, the lookup is moved to `pages.{label}`.
     * Finally, when that also fails, it returns startCase of the given label.
     */
    translatePage: TranslateFunction;
}
export declare const createFunctions: (i18n: I18n) => TranslateFunctions;
/**
 * ES Modules exports are immutable thus Sinon cannot create stubs for e.g. createFunctions
 * Wrapping the exports in an object allows Sinon to modify it's properties.
 *
 * This prevents Sinon error from appearing:
 * "TypeError: ES Modules cannot be stubbed"
 */
export declare const __testExports: {
    createFunctions: (i18n: I18n) => TranslateFunctions;
};
