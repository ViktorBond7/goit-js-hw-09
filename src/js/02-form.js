// const FEEDBACK_MESSAGE_KEY = 'feedback-message';

// const form = document.querySelector('.feedback-form');
// const input = form.querySelector('input');
// const textarea = form.querySelector('textarea');

// const initialMessage = localStorage.getItem(FEEDBACK_MESSAGE_KEY);
// const initialMeil = localStorage.getItem(FEEDBACK_MAIL_KEY);

// if (initialMessage) {
//   textarea.value = initialMessage;
// }

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   const emailValue = event.target.email.value.trim();
//   const passwordlValue = event.target.message.value.trim();
//   if (!emailValue || !passwordlValue) {
//     alert('All form fields must be filled in');
//     return;
//   }

// try {
//   const initialFormdata = localStorage.getItem(FEEDBACK_MESSAGE_KEY);
//   form.elements.forEach(element => {
//     const storageValue = initialFormdata[element.name];
//     if (storageValue) {
//       element.value = storageValue;
//     }
//   });
// } catch (e) {
//   console.error('error');
// }

//   const formData = new FormData(form);
//   const formObject = {};
//   formData.forEach((value, key) => {
//     formObject[key] = value;
//     localStorage.removeItem(FEEDBACK_MESSAGE_KEY);
//     form.reset();
//   });
//   console.log(formObject);
// });

// form.addEventListener('input', event => {
//   const message = event.target.value;
//   localStorage.setItem(FEEDBACK_MESSAGE_KEY, message);
// });

// input.addEventListener('input', event => {
//   const email = event.target.value;
//   localStorage.setItem(FEEDBACK_MESSAGE_KEY, email);
// });

const FEEDBACK_DATA_KEY = 'feedback';

const form = document.querySelector('.feedback-form');
// const textarea = form.querySelector('textarea');

// const myLocalStorage = {
//   get: (key, json = false) => {
//     const data = localStorage.getItem(key);

//     if (!json) return data;

//     try {
//       return JSON.parse(data);
//     } catch (e) {
//       console.error(e);
//     }
//   },
//   set: (key, data, json = false) => {
//     localStorage.setItem(key, json ? JSON.stringify(data) : data);
//   },
//   remove: key => {
//     localStorage.removeItem(key);
//   },
// };

try {
  const initialFormData = JSON.parse(localStorage.getItem(FEEDBACK_DATA_KEY));

  Array.from(form.elements).forEach(element => {
    const storageValue = initialFormData[element.name];
    if (storageValue) {
      element.value = storageValue;
    }
  });
} catch (e) {
  console.error('PARSE STORAGE FORM ERROR');
}

form.addEventListener('input', () => {
  const formData = new FormData(form);

  const formObject = {};

  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  localStorage.setItem(FEEDBACK_DATA_KEY, JSON.stringify(formObject));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const emailValue = event.target.email.value.trim();
  const messageValue = event.target.message.value.trim();

  if (!emailValue || !messageValue) {
    alert('All form fields must be filled in');
    return;
  }

  const formText = {
    email: emailValue,
    message: messageValue,
  };
  console.log(formText);

  localStorage.removeItem(FEEDBACK_DATA_KEY);

  form.reset();
});
