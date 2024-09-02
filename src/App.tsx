import { useState, useEffect, useRef } from 'react';
import { useDebounce } from '@uidotdev/usehooks';
import { SinglyLinkedList } from './SinglyLinkedList.ts';

function App() {
  const [text, setText] = useState('');
  const [saving, setSaving] = useState(false);
  const history = useRef<SinglyLinkedList<string>>(new SinglyLinkedList());
  const debouncedText = useDebounce(text, 1000);

  useEffect(() => {
    if (debouncedText !== '' && debouncedText !== history.current.tail?.val) {
      history.current.push(debouncedText);
    }
    setSaving(false);
  }, [debouncedText]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setSaving(true);
  };

  const handleUndo = () => {
    if (history.current.length > 1) {
      history.current.pop(); // Remove the current state
      const previousState = history.current.tail?.val || ''; // Get the new tail, which is the previous state
      setText(previousState);
    } else if (history.current.length === 1) {
      setText(''); // If there's only one item left, reset to an empty string
      history.current.reset(); // Reset the history list
    }
  };

  return (
    <div>
      <h3>{saving ? "...Saving changes" : "Saved"}</h3>
      <textarea
        value={text}
        onChange={handleChange}
        rows={10}
        cols={50}
        onBlur={() => setSaving(false)}
      />
      <br />
      <button onClick={handleUndo}>Undo</button>
    </div>
  );
}

export default App;
