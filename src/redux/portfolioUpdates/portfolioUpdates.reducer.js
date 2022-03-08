import { PortfolioUpdateTypes } from "./portfolioUpdates.types";

const INITIAL_STATE = {
    allPortfolios: []
};

const portfolioUpdateReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case PortfolioUpdateTypes.SET_PORTFOLIO_DB:
            return {
                ...state,
                allPortfolios: action.payload
            }
        default:
            return state
    }
}

export default portfolioUpdateReducer;