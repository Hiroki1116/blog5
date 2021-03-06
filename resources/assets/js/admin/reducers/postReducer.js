export default function postReducer(state = {
	post: {},
	posts: [],
	loading: false,
}, action) {
	switch (action.type) {
		case "FETCH_POSTS":
			{
				return {
					...state,
					loading: true
				}
				break;
			}
		case "FETCH_POSTS_FULFILLED":
			{
				return {
					...state,
					posts: action.data,
					loading: false
				}
				break;
			}
		case "FETCH_POSTS_REJECTED":
			{
				return {
					...state,
					loading: false
				}
				break;
			}
		case "ADD_POST":
			{
				return {...state,
					loading: true
				}
				break;
			}
		case "ADD_POST_FULFILLED":
			{
				return {
					...state,
					posts: [
						...state.posts,action.data
					],
					loading: false
				}
				break;
			}
		case "ADD_POST_REJECTED":
			{
				return {
					...state,
					loading: false
				}
				break;
			}

		case "UPDATE_POST":
			{
				return {
					...state,
					loading: true
				}
				break;
			}
		case "UPDATE_POST_FULFILLED":
			{
				return {
					...state,
					posts:state.posts.map((post)=> {
						if (post.id === action.data.id) {
							return action.data;
						}
						else {
							return post;
						}
					}),
					loading: false
				}
				break;
			}
		case "UPDATE_POST_REJECTED":
			{
				return {
					...state,
					loading: false
				}
				break;
			}
		case "GET_POST":
			{
				return {
					...state,
					loading: true
				}
				break;
			}

		case "GET_POST_FULFILLED":
			{
				return {
					...state,
					post: action.data,
					loading: false
				}
				break;
			}

		case "GET_POST_REJECTED":
			{
				return {
					...state,
					loading: false
				}
				break;
			}

		case "DELETE_POST":
			{
				return {
					...state,
					loading: true
				}
				break;
			}

		case "DELETE_POST_FULFILLED":
			{
				return {
					...state,
					posts: state.posts.filter(function(post) {
						return post.id != action.data;
					}),
  					loading: false
				}
				break;
			}

		case "DELETE_POST_REJECTED":
			{
				return {
					...state,
					loading: false
				}
				break;
			}

		case "RESET_POST":
			{
				return {
					...state,
					post: {}
				}
				break;
			}
	}
	return state;
}