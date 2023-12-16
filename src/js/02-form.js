//<form class="feedback-form" autocomplete="off">
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// </form>;

'feedback-form-state';
const FEEDBACK_DATA_KEY = 'feedback';
const FEEDBACK_MESSAGE_KEY = 'feedback-message';

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

const initialMessage = localStorage.getItem(FEEDBACK_MESSAGE_KEY);

if (initialMessage) {
  textarea.value = initialMessage;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(FEEDBACK_MESSAGE_KEY);

  form.reset();
});

textarea.addEventListener(
  'input',
  debounce(event => {
    const message = event.target.value;
    localStorage.setItem(FEEDBACK_MESSAGE_KEY, message);
  }, 250)
);
