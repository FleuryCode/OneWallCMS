import { PortfolioUpdateTypes } from "./portfolioUpdates.types";

const INITIAL_STATE = {
    allPortfolios: [],
    urlList: [],
    imagesLoading: true,
    selectedPortfolio: 'Real Estate Portfolio'
};

const portfolioUpdateReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case PortfolioUpdateTypes.SET_PORTFOLIO_DB:
            return {
                ...state,
                allPortfolios: action.payload
            }
        case PortfolioUpdateTypes.SET_URL_LIST:
            return {
                ...state,
                urlList: action.payload
            }
        case PortfolioUpdateTypes.SET_IMAGES_LOADING:
            return {
                ...state,
                imagesLoading: action.payload
            }
        case PortfolioUpdateTypes.SET_SELECTED_PORTFOLIO:
            return {
                ...state,
                selectedPortfolio: action.payload
            }
        default:
            return state
    }
}

export default portfolioUpdateReducer;