export default function Foo() {
  return (
    <p>
      this will be work, but access to directory or press the link above, it
      also got an error. <br />
      {JSON.stringify(window.process.env)}
    </p>
  );
}
