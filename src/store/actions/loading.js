import { SET_LOADING } from "../actionTypes";

export const setLoading = (loading) => {
    return {
        type: SET_LOADING,
        loading
    }
}