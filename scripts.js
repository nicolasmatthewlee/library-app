let my_library = [];

function Book(title,author,pages,read) {
    this.title=title,
    this.author=author,
    this.pages=pages,
    this.read=read
};

let library_grid = document.querySelector('.library-grid-container');

function add_to_library() {

    // create new book object
    let book = new Book('The Cat in the Hat','Dr. Seuss',61,true);

    // create new html object
    let book_item = document.createElement('div');
    book_item.setAttribute('class','book');
    library_grid.appendChild(book_item);

    console.log('click');

};


let add_button = document.querySelector('.add');
add_button.addEventListener('click',add_to_library);