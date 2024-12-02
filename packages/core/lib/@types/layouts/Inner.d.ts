import * as React from 'react';
import { ScrollMode } from '../structs/ScrollMode';
import { SpecialZoomLevel } from '../structs/SpecialZoomLevel';
import { ViewMode } from '../structs/ViewMode';
import { type DocumentLoadEvent } from '../types/DocumentLoadEvent';
import { type OpenFile } from '../types/OpenFile';
import { type PageChangeEvent } from '../types/PageChangeEvent';
import { type PageLayout } from '../types/PageLayout';
import { type PageSize } from '../types/PageSize';
import { type PdfJs } from '../types/PdfJs';
import { type Plugin } from '../types/Plugin';
import { type RenderPage } from '../types/RenderPage';
import { type RotateEvent } from '../types/RotateEvent';
import { type RotatePageEvent } from '../types/RotatePageEvent';
import { type SetRenderRange } from '../types/SetRenderRange';
import { type ViewerState } from '../types/ViewerState';
import { type ZoomEvent } from '../types/ZoomEvent';
export declare const Inner: React.FC<{
    currentFile: OpenFile;
    defaultScale?: number | SpecialZoomLevel;
    doc: PdfJs.PdfDocument;
    enableSmoothScroll: boolean;
    estimatedPageSizes: PageSize[];
    initialPage: number;
    initialRotation: number;
    initialScale: number;
    initialScrollMode: ScrollMode;
    initialViewMode: ViewMode;
    pageLayout?: PageLayout;
    plugins: Plugin[];
    renderPage?: RenderPage;
    setRenderRange: SetRenderRange;
    viewerState: ViewerState;
    onDocumentLoad(e: DocumentLoadEvent): void;
    onOpenFile(fileName: string, data: Uint8Array): void;
    onPageChange(e: PageChangeEvent): void;
    onRotate(e: RotateEvent): void;
    onRotatePage(e: RotatePageEvent): void;
    onZoom(e: ZoomEvent): void;
}>;