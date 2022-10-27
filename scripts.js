let my_library = [];

function Book(title,author,pages,read) {
    this.title=title,
    this.author=author,
    this.pages=pages,
    this.read=read
};

let library_grid = document.querySelector('.library-grid-container');

function add_to_library() {

    // create new book object and add to my_library
    let book = new Book('The Cat in the Hat','Dr. Seuss',61,true);
    my_library.push(book);

    // create new html object
    let book_item = document.createElement('div');
    book_item.setAttribute('class','book');
    library_grid.appendChild(book_item);

    let book_title = document.createElement('div');
    book_title.setAttribute('class','book-title');
    book_title.textContent=book.title;
    book_item.appendChild(book_title);

    let book_author = document.createElement('div');
    book_author.setAttribute('class','book-author');
    book_author.textContent=book.author;
    book_item.appendChild(book_author);

    let book_pages = document.createElement('div');
    book_pages.setAttribute('class','book-pages');
    book_pages.textContent=book.pages;
    book_item.append(book_pages);

    let book_read = document.createElement('div');
    book_read.setAttribute('class','book-read');
    book_read.textContent=book.read ? 'read' : 'not read';
    book_item.append(book_read);

    console.log('click');

};


let add_button = document.querySelector('.add');
add_button.addEventListener('click',add_to_library);