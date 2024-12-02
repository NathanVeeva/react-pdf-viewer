import * as React from 'react';
import { ScrollMode } from '../structs/ScrollMode';
import { ViewMode } from '../structs/ViewMode';
import { type Rect } from './Rect';
export interface PageLayout {
    buildPageStyles?: ({ numPages, pageIndex, scrollMode, viewMode, }: {
        numPages: number;
        pageIndex: number;
        scrollMode: ScrollMode;
        viewMode: ViewMode;
    }) => React.CSSProperties;
    transformSize?: ({ numPages, pageIndex, size }: {
        numPages: number;
        pageIndex: number;
        size: Rect;
    }) => Rect;
}