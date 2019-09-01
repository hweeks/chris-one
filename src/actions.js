export const PICTURE_FETCH = "PICTURE_FETCH";
export const PICTURE_FETCHED = "PICTURE_FETCHED";

export const fetchPictures = () => {
  return dispatch => {
    dispatch({ type: PICTURE_FETCH });
    /**
     * here we should be calling an api for reddit, https://www.reddit.com/dev/api/
     * it should return the top five pictures currently on the pics subreddit
     * and render them into a displayed list
     */
  };
};
