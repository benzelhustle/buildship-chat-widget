export type WidgetConfig = {
    url: string;
    threadId: string | null;
    responseIsAStream: boolean;
    user: Record<any, any>;
    widgetTitle: string;
    greetingMessage: string | null;
    disableErrorAlert: boolean;
    closeOnOutsideClick: boolean;
    openOnLoad: boolean;
};
declare function init(): Promise<void>;
declare function open(e: Event): void;
declare function close(): void;
declare const buildShipChatWidget: {
    open: typeof open;
    close: typeof close;
    config: WidgetConfig;
    init: typeof init;
};
declare global {
    interface Window {
        buildShipChatWidget: typeof buildShipChatWidget;
    }
}
export default buildShipChatWidget;
