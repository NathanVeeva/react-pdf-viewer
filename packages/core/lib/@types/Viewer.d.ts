import * as React from 'react';
import { RenderError } from './loader/DocumentLoader';
import { ScrollMode } from './structs/ScrollMode';
import { SpecialZoomLevel } from './structs/SpecialZoomLevel';
import { ViewMode } from './structs/ViewMode';
import { type CharacterMap } from './types/CharacterMap';
import { type DocumentAskPasswordEvent } from './types/DocumentAskPasswordEvent';
import { type DocumentLoadEvent } from './types/DocumentLoadEvent';
import { type PageChangeEvent } from './types/PageChangeEvent';
import { type PageLayout } from './types/PageLayout';
import { type PdfJs } from './types/PdfJs';
import { type Plugin } from './types/Plugin';
import { type RenderPage } from './types/RenderPage';
import { type RenderProtectedView } from './types/RenderProtectedView';
import { type RotateEvent } from './types/RotateEvent';
import { type RotatePageEvent } from './types/RotatePageEvent';
import { type SetRenderRange } from './types/SetRenderRange';
import { type ZoomEvent } from './types/ZoomEvent';
export declare const Viewer: React.FC<{
    characterMap?: CharacterMap;
    defaultScale?: number | SpecialZoomLevel;
    enableSmoothScroll?: boolean;
    fileUrl: string | Uint8Array;
    httpHeaders?: Record<string, string | string[]>;
    initialPage?: number;
    initialRotation?: number;
    pageLayout?: PageLayout;
    plugins?: Plugin[];
    renderError?: RenderError;
    renderLoader?(percentages: number): React.ReactElement;
    renderPage?: RenderPage;
    renderProtectedView?: RenderProtectedView;
    scrollMode?: ScrollMode;
    setRenderRange?: SetRenderRange;
    transformGetDocumentParams?(options: PdfJs.GetDocumentParams): PdfJs.GetDocumentParams;
    viewMode?: ViewMode;
    withCredentials?: boolean;
    onDocumentAskPassword?(e: DocumentAskPasswordEvent): void;
    onDocumentLoad?(e: DocumentLoadEvent): void;
    onPageChange?(e: PageChangeEvent): void;
    onRotate?(e: RotateEvent): void;
    onRotatePage?(e: RotatePageEvent): void;
    onSwitchTheme?(theme: string): void;
    onZoom?(e: ZoomEvent): void;
}>;