import { BookPageSide } from "./book-page-side";
import { Cover } from "./cover";
import { PageType } from "./page-type";

export interface Book {
    width: number;
    height: number;
    zoom: number;
    cover?: Cover;
    pages: BookPageSide[];
    pageWidth?: number;
    pageHeight?: number;
    startPageType?: PageType;
    endPageType?: PageType;
}
