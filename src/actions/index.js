export function selectBook(book){
    console.log('a book', book.title);
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
    
}