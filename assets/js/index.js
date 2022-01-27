const image = document.querySelector('.slide');

const [prevBtn, nextBtn] = document.querySelectorAll('.btn');

const imageDataBase = [
    'https://artguide.com/storage/post/1599/wide_detail_picture.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Kuindzhi_by_I.Kramskoy_%281872%2C_GTG%29.jpg/280px-Kuindzhi_by_I.Kramskoy_%281872%2C_GTG%29.jpg',
    'https://kulturologia.ru/files/u19001/Kuinji-moonlight-night-1.jpg',
    'https://s0.rbk.ru/v6_top_pics/media/img/0/99/755486691616990.png',
    'https://artguide.com/uploads/ckeditor/pictures/6136/content_14_kuindzi_put.jpg',
];

const slider = new Slider(imageDataBase);

const createSliderHandler = (direction) => () => {
        slider.currentIndex = slider[direction === 'next' ? 'next' : 'prev']();
        updateView();
    };

prevBtn.addEventListener('click', createSliderHandler('prev'));

nextBtn.addEventListener('click',  createSliderHandler('next'));


function updateView() {
    image.setAttribute('src', slider.currentSlide);
}


updateView();