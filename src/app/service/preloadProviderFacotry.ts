import { PreloadService } from "./preload.service";

export function preloadProviderFacotry(provider: PreloadService) {
    return () => provider.load();
}