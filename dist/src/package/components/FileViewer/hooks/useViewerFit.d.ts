import { Ref } from 'vue';
import { FileViewerFitMode, FileViewerFitOptions, FileViewerFitResult, FileViewerOptions } from '@file-viewer/core';
interface UseViewerFitOptions {
    output: Ref<HTMLDivElement | null>;
    getOptions: () => FileViewerOptions | undefined;
    refreshZoomProvider: () => void;
    refreshViewStateProvider: () => void;
    emitFitChange: (result: FileViewerFitResult) => void;
}
export declare const useViewerFit: ({ output, getOptions, refreshZoomProvider, refreshViewStateProvider, emitFitChange }: UseViewerFitOptions) => {
    startFitObserver: () => void;
    stopFitObserver: () => void;
    resetAutoFit: () => void;
    markFitUserInteraction: () => void;
    applyInitialFit: () => Promise<FileViewerFitResult>;
    fitToView: (fit?: FileViewerFitMode | FileViewerFitOptions) => Promise<FileViewerFitResult>;
};
export {};
