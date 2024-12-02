import * as React from 'react';
import { ScrollMode } from '../structs/ScrollMode';
import { ViewMode } from '../structs/ViewMode';
import { type Offset } from '../types/Offset';
import { type Rect } from '../types/Rect';
import { type SetRenderRange } from '../types/SetRenderRange';
import { type VirtualItem } from './VirtualItem';
export declare const useVirtual: ({ enableSmoothScroll, isRtl, numberOfItems, parentRef, setRenderRange, sizes, scrollMode, viewMode, onVisibilityChanged, }: {
    enableSmoothScroll: boolean;
    isRtl: boolean;
    numberOfItems: number;
    parentRef: React.RefObject<HTMLDivElement>;
    setRenderRange: SetRenderRange;
    sizes: Rect[];
    scrollMode: ScrollMode;
    viewMode: ViewMode;
    onVisibilityChanged: (pageIndex: number, visibility: number) => void;
}) => {
    boundingClientRect: Rect;
    isSmoothScrolling: boolean;
    startPage: number;
    endPage: number;
    maxVisbilityIndex: number;
    virtualItems: VirtualItem[];
    getContainerStyles: () => React.CSSProperties;
    getItemContainerStyles: (item: VirtualItem) => React.CSSProperties;
    getItemStyles: (item: VirtualItem) => React.CSSProperties;
    scrollToItem: (index: number, offset: Offset) => Promise<void>;
    scrollToNextItem: (index: number, offset: Offset) => Promise<void>;
    scrollToPreviousItem: (index: number, offset: Offset) => Promise<void>;
    zoom: (scale: number, index: number) => Promise<void>;
};