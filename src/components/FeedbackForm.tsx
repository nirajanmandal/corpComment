export default function FeedbackForm() {
  return (
    <form action="" className="form">
      <textarea id="feedback-textarea" placeholder="abcd" spellCheck={false} />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">150</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
