document.querySelector('.main__info-button').addEventListener('click', () => {
  window.open('https://t.me/valeriyalberovich', '_blank')
});

const blockInformation = {
  'product-design': {
    header: 'Product Design',
    textContent: 'The definition of product design describes the process of imagining, creating, and '
      + 'iterating products that solve users problems or address specific needs in a given market.'
      + ' The key to successful product design is understanding the end-user customer, the person'
      + ' for whom the product is being created',

  },
  'ux-design': {
    header: 'UX/UI Design',
    textContent:
      'UI UX designers create the user interface for an app, website,'
      + ' or other interactive media. Their work includes collaborating with product managers'
      + ' and engineers to gather requirements from users before designing ideas that can be'
      + ' communicated using storyboards. They also process flows or sitemaps'
  },
  'icon-design': {
    header: 'Icon Design',
    textContent:
      'Icon design is the process of designing a graphic symbol that represents some real,'
      + ' fantasy or abstract motive, entity or action. In the context of software '
      + 'applications, an icon often represents a program, a function, data or a collection '
      + 'of data on a computer system.'
  },
  'logo-design': {
    header: 'Logo Design',
    textContent:
      'Logo design is the process of designing a logo. Branding is the process of building ' +
      'a brand. To be more specific, it is a strategy designed by companies to help people '
      + 'to quickly identify their products and organization, and give them a reason to '
      + 'choose their products over the competition.'
  },
  'backend': {
    header: 'Backend',
    textContent:
      'The back end developer is a programmer who creates components and features on the '
      + 'server-side, indirectly accessed by a user through a front end application or system. '
      + 'These developers are tasked with creating, maintaining, testing, and debugging the '
      + 'entire back end.'
  },
  'frontend': {
    header: 'Frontend',
    textContent:
      'A Front End Developer, or Front End Web Developer, is responsible for using their '
      + 'knowledge of programming languages to code user-side applications, including visual '
      + 'elements like menu bars, clickable buttons and the overall layout of websites or web '
      + 'applications.'
  },
  'motion': {
    header: 'Motion',
    textContent:
      'Essentially, motion design is a discipline that applies graphic design principles to '
      + 'filmmaking and video production through use of animation and visual effects. Examples '
      + 'include films, videos, animated text, and web-based animations and apps. Motion design '
      + 'has evolved as a direct result of technology improvements.'
  },
  'about-me': {
    header: 'ABOUT ME',
    textContent: 'Hello again everyone! So, you already know that my name is Vlad. A little about '
      + 'myself: hard worker, 24 y.o., cyber-athlete-football player, I love suck dicks since '
      + 'childhood, I live in Kirov, Russia. Why programming? Everything is elementary - I like '
      + 'it, the profession of the future, thanks to which I can provide myself and fulfill my dream '
      + '- travel, at the moment I specialize in web design, front-end and back-end development, '
      + 'turnkey websites. Why should you choose me? I approach each order with great responsibility '
      + 'and love, as I want to make a name for myself, exclude plagiarism and negligence, fully study '
      + 'the project, the client and its target audience, work for quality, trying to make an order as '
      + 'quickly and uniquely as possible, taking into account all the edits and wishes. By trusting '
      + 'me, you will get the maximum return for your project, save your nerves and time. If you are '
      + 'interested in me , you want to know something more or use my services, then I will provide '
      + 'all my contacts below.',
  }
};

function setCurrentImages(key, index) {
  const order = {
    1: 'one',
    2: 'two',
    3: 'three',
  };
  return `./images/${key}__square-pic-${order[index]}.png`;
}

const links = document.querySelector('.links');

links.addEventListener('click', (e) => {
  if (e.target.closest('.links__card').className === 'links__card') {
    const textContentHeader = document.querySelector('.about-me__square-info-text-header');
    const text = document.querySelector('.about-me__square-info-text');
    const currentImages = document.querySelectorAll('.square-pic__image');
    const link = e.target.closest('.links__card');
    const id = link.id;


    textContentHeader.textContent = blockInformation[id].header;
    text.textContent = blockInformation[id].textContent;
    currentImages.forEach((image, index) => {
      image.src = setCurrentImages(id, index + 1);
    });
  }
});


const sliderBoxProjectPicArray = [
  './images/portfolio-image-ice-cream.png',
  './images/portfolio-image-gachi.png',
  './images/portfolio-image-billy.png'
];

const textBoxHeaderArray = [
  'Landing Ice-Cream',
  'Сat 1',
  'Cat 2'
];

const textBoxInfoArray = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.',

  'Description1',

  'Description2',
];

const projectChoicePointArray = document.querySelectorAll('.project-choice-point');
const sliderImage = document.querySelector('.portfolio__slider-box-project-pic-ice-cream');
const sliderHeaderText = document.querySelector('.text-box__header');
const sliderInfoText = document.querySelector('.text-box__info');
const sliderButtons = document.querySelector('.portfolio__slider');
let index = 0;

sliderImage.src = sliderBoxProjectPicArray[index];
sliderHeaderText.textContent = textBoxHeaderArray[index];
sliderInfoText.textContent = textBoxInfoArray[index];
projectChoicePointArray[index].classList.add('yellowPoint');
const points = document.querySelector('.portfolio__project-choice-pointer');

const pointIndexes = {
  'first_point': 0,
  'second_point': 1,
  'third_point': 2,
};

sliderButtons.addEventListener('click', (e) => {
  if (e.target.closest('.portfolio__slider-button').className === 'portfolio__slider-button portfolio__slider-button_left') {
    index -= 1;
    if (index < 0) {
      index = sliderBoxProjectPicArray.length - 1;
    }
    sliderImage.src = sliderBoxProjectPicArray[index];
    sliderHeaderText.textContent = textBoxHeaderArray[index];
    sliderInfoText.textContent = textBoxInfoArray[index];
    const indexes = Object.keys(pointIndexes);
    projectChoicePointArray.forEach(el => {
      el.classList.remove('yellowPoint');
      if (el.id === indexes[index]) {
        el.classList.add('yellowPoint')
      }
    })
  }
  if (e.target.closest('.portfolio__slider-button').className === 'portfolio__slider-button portfolio__slider-button_right') {
    index += 1;
    if (index > sliderBoxProjectPicArray.length - 1) {
      index = 0;
    }
    sliderImage.src = sliderBoxProjectPicArray[index];
    sliderHeaderText.textContent = textBoxHeaderArray[index];
    sliderInfoText.textContent = textBoxInfoArray[index];
    const indexes = Object.keys(pointIndexes);
    projectChoicePointArray.forEach(el => {
      el.classList.remove('yellowPoint');
      if (el.id === indexes[index]) {
        el.classList.add('yellowPoint')
      }
    })
  }
})


projectChoicePointArray.forEach(el => {
  el.addEventListener('mouseenter', (e) => {
    el.classList.add('xuy');
  });
});

projectChoicePointArray.forEach(el => {
  el.addEventListener('mouseleave', (e) => {
    el.classList.remove('xuy');
  });
});


points.addEventListener('click', (e) => {
  const point = e.target;
  const indexes = Object.keys(pointIndexes);
  if (indexes.includes(point.id)) {
    sliderImage.src = sliderBoxProjectPicArray[pointIndexes[point.id]];
    sliderHeaderText.textContent = textBoxHeaderArray[pointIndexes[point.id]];
    sliderInfoText.textContent = textBoxInfoArray[pointIndexes[point.id]];
    projectChoicePointArray.forEach(el => {
      el.classList.remove('yellowPoint');
    });
    point.classList.add('yellowPoint');
    index = indexes.indexOf(point.id)
  }
});

document.querySelector('.footer__button-up').addEventListener('click', () => {
  document.location.assign('#')
})