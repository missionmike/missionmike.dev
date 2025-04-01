import React, { useEffect } from 'react';

import { Container } from 'react-bootstrap';
import Image from 'next/image';
import { Layout } from 'components/Layout/Layout';

const Textarea = ({
  value,
  onChange = () => {},
  onClick = () => {},
  placeholder,
  readOnly = false,
}: {
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
}) => (
  <textarea
    placeholder={placeholder}
    style={{
      width: '100%',
      height: '200px',
      padding: '1rem',
      borderRadius: '15px',
      marginBottom: '20px',
    }}
    value={value}
    onChange={onChange}
    onClick={onClick}
    readOnly={readOnly}
  />
);

const Page = () => {
  const [inputText, setInputText] = React.useState('');
  const [outputText, setOutputText] = React.useState('');
  const [spongeBobMode, setSpongeBobMode] = React.useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value.trim());
  };

  useEffect(() => {
    if (inputText.length === 0) {
      setOutputText('');
      return;
    }

    const randomAiEmojis = ['🚀', '🦾', '🧠', '💻', '👾', '🤖'];

    let newOutputText = inputText
      .split(' ')
      .map((word) => {
        if (word.length > 4) {
          return `${word} —`;
        }

        return word;
      })
      .join(' ')
      // Replace more than two newlines with two newlines.
      .replace(/\n{3,}/g, '\n\n');

    newOutputText.split('\n\n').forEach((paragraph, index) => {
      // Add a random emoji to the beginning and end of each paragraph.
      const randomEmojiOne = randomAiEmojis[Math.floor(Math.random() * randomAiEmojis.length)];
      const randomEmojiTwo = randomAiEmojis[Math.floor(Math.random() * randomAiEmojis.length)];
      newOutputText = newOutputText.replace(
        paragraph,
        randomEmojiOne + ' ' + paragraph + ' ' + randomEmojiTwo
      );
    });

    if (spongeBobMode) {
      newOutputText = newOutputText
        .split('')
        .map((char) => {
          const randomNumber = Math.floor(Math.random() * 10);
          if (randomNumber % 2 === 0) {
            return char.toLowerCase();
          } else {
            return char.toUpperCase();
          }
        })
        .join('');
    }

    newOutputText += '\n\n#aiinator #ai #emdashes #rockets #unseriously #takingjobs';

    setOutputText(newOutputText);
  }, [inputText, spongeBobMode]);

  return (
    <Layout isProse title={'AI-inator'}>
      <Container>
        <h1>AI-inator</h1>
        <p>
          Want to mock an AI? This is the place to do it. Enter some text and let the AI-inator
          AI-inate it. This is especially useful to mock people on social media who think they are
          smarter than they are.
        </p>
        <p>
          You can also use this smart tool to generate some funny responses to your friends and/or
          trolls. Just enter some text and let the AI-inator do the rest.
        </p>
        <h2>Input 🧠</h2>
        <Textarea placeholder="Enter text here..." value={inputText} onChange={handleInputChange} />
        <h2>Output 🚀</h2>
        <Textarea
          placeholder="AI-inator output..."
          readOnly
          value={outputText}
          onClick={() => {
            navigator.clipboard.writeText(outputText);
            alert('Copied to clipboard!');
          }}
        />
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          <input
            type="checkbox"
            checked={spongeBobMode}
            onChange={() => setSpongeBobMode(!spongeBobMode)}
            style={{ marginRight: '10px', width: '20px', height: '20px' }}
            id="spongeBob"
          />
          <label htmlFor="spongeBob">SpongeBob Mode Output</label>
        </div>
        <p>A Dr. Heinz Doofenshmirtz -inator for reference:</p>
        <Image
          src="/static/images/alien-inator.webp"
          width={1024}
          height={800}
          alt="AI-inator"
          sizes={'(max-width: 1024px) 100vw, (min-width: 1024px) 50vw'}
          className="rounded"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Container>
    </Layout>
  );
};

export default Page;
