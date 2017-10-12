// const authorsFormattedForDropdown = state.authors.map(author => {
//     return {
//         value: author.id,
//         text: author.firstName + ' ' + author.lastName
//     };
// });

export function authorsFormattedForDropdown(authors) {
    return authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });
}