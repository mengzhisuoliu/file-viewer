import { default as FileViewer } from './components/FileViewer';
import { App } from 'vue';
declare interface FileViewerInstaller {
    install(app: App): void;
}
/**
 * 安装器
 */
declare class Installer implements FileViewerInstaller {
    private installed;
    install(app: App): void;
}
declare const _default: Installer;
export default _default;
export { FileViewer };
