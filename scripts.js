let my_library = [];

// populate default library
let default_book = new Book('The Sun Also Rises','Ernest Hemingway',280,false);
let default_book2 = new Book('Lord of the Flies','William Golding',224,false);
let default_book3 = new Book('The Great Gatsby','F. Scott Fitzgerald',208);
let default_book4 = new Book("Goodnight Moon",'Margaret Wise Brown',32,false);

my_library.push(default_book);
my_library.push(default_book2);
my_library.push(default_book3);
my_library.push(default_book4);

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

        let remove_book = document.createElement('button');
        remove_book.setAttribute('class','book-remove');
        remove_book.addEventListener('click',() => {
            my_library.splice(book_item.dataset.index,1);
            display_library();
        });
        book_item.append(remove_book);

        let remove_icon = document.createElement('img');
        remove_icon.setAttribute('src','assets/close.svg');
        remove_icon.setAttribute('class','book-remove-icon');
        remove_book.appendChild(remove_icon);

        let book_title = document.createElement('div');
        book_title.setAttribute('class','book-title');
        book_title.textContent=book.title;
        book_item.appendChild(book_title);

        let book_author = document.createElement('div');
        book_author.setAttribute('class','book-author');
        book_author.textContent=book.author;
        book_item.appendChild(book_author);

        let book_read = document.createElement('button');
        book_read.setAttribute('class','book-read');
        book_read.textContent=book.read ? 'Read ???' : 'Not Read ???';
        book_read.addEventListener('click',() => {
            book.read=!book.read;
            display_library();
        });
        book_item.append(book_read);

    }

};

function add_to_library(title,author,pages,read) {

    // create new book object and add to my_library
    let book = new Book(title,author,pages,read);
    my_library.push(book);

    // display
    display_library();

};

let add_modal = document.querySelector('#add-book-modal');

let form = document.querySelector('form');
form.addEventListener('submit',(event) => {

    // prevent refresh
    event.preventDefault();

    add_modal.classList.toggle('active');
    overlay.classList.toggle('active');

    let title=document.querySelector('.title-input').value;
    let author=document.querySelector('.author-input').value;
    let pages=document.querySelector('.pages-input').value;
    let read=document.querySelector('.read-input').checked;

    add_to_library(title,author,pages,read);
    form.reset();
});

let overlay = document.querySelector('.overlay');
overlay.addEventListener('click',() => {
    add_modal.classList.toggle('active');
    overlay.classList.toggle('active');
})

let add_button = document.querySelector('.add');
add_button.addEventListener('click',() => {
    add_modal.classList.toggle('active');
    overlay.classList.toggle('active');
});

// initial display
display_library();