let my_library = [];

let book1 = new Book('1','author',80,false);
let book2 = new Book('2','author',99,true);
let book3 = new Book('3','author',99,true);
let book4 = new Book('4','author',99,true);
my_library.push(book1);
my_library.push(book2);
my_library.push(book3);
my_library.push(book4);

function Book(title,author,pages,read) {
    this.title=title,
    this.author=author,
    this.pages=pages,
    this.read=read
};

let library_grid = document.querySelector('.library-grid-container');

function display_library() {

    // clear grid
    while (library_grid.lastChild) {
        library_grid.lastChild.remove();
    }

    // display
    for (let i=0;i<my_library.length;i++) {

        let book=my_library[i];

        // create html object
        let book_item = document.createElement('div');
        book_item.setAttribute('class','book');
        book_item.setAttribute('data-index',i);
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

        let pages_label = document.createElement('div');
        pages_label.setAttribute('class','pages-label');
        pages_label.textContent='pages';
        book_item.append(pages_label);

        let book_read = document.createElement('button');
        book_read.setAttribute('class','book-read');
        book_read.textContent=book.read ? 'Read ✅' : 'Not Read ❌';
        book_read.addEventListener('click',() => {
            book.read=!book.read;
            display_library();
        });
        book_item.append(book_read);

        let remove_book = document.createElement('button');
        remove_book.setAttribute('class','book-remove');
        remove_book.textContent='Remove';
        remove_book.addEventListener('click',() => {
            console.log(book_item.dataset.index);
            my_library.splice(book_item.dataset.index,1);
            display_library();
        });
        book_item.append(remove_book);

    }

};

function add_to_library() {

    // create new book object and add to my_library
    let book = new Book('The Cat in the Hat','Dr. Seuss',61,true);
    my_library.push(book);

    // display
    display_library();

};

let add_modal = document.querySelector('#add-book-modal');

let add_new_book = document.querySelector('.add-new-book');
add_new_book.addEventListener('click',() => {
    add_modal.classList.toggle('active');
    add_to_library();
});

let add_button = document.querySelector('.add');
add_button.addEventListener('click',() => {
    add_modal.classList.toggle('active');
    console.log('pressed')
});