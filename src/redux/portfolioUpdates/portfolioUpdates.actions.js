import { PortfolioUpdateTypes } from "./portfolioUpdates.types";

export const setAllPortfolios = (portfolioArray) => ({
    type: PortfolioUpdateTypes.SET_PORTFOLIO_DB,
    payload: portfolioArray
});

export const setUrlList = (list) => ({
    type: PortfolioUpdateTypes.SET_URL_LIST,
    payload: list
});

export const setImagesLoading = (isLoading) => ({
    type: PortfolioUpdateTypes.SET_IMAGES_LOADING,
    payload: isLoading
});