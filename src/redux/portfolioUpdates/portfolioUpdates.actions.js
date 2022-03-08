import { PortfolioUpdateTypes } from "./portfolioUpdates.types";

export const setAllPortfolios = (portfolioArray) => ({
    type: PortfolioUpdateTypes.SET_PORTFOLIO_DB,
    payload: portfolioArray
});