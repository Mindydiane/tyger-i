import gql from 'graphql-tag';

export const QUERY_BOOKS = gql`
query books($title: String) {
    books(title: $title) {
        bookId
        authors
        description
        title
        image
        link
    }
}
`

export const QUERY_BOOK = gql`
query book($title: String) {
    book(title: $title) {
        bookId
        authors
        description
        title
        image
        link
    }
}
`