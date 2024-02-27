export function clientLoader() {
  console.log(window.process.env.foo); // process is not defined error

  return { foo: window.process.env.foo };
}

export default function Foo() {
  return (
    <p id="index-page">
      This is a demo for Remix.
      <br />
      Check out <a href="https://remix.run">the docs at remix.run</a>.
    </p>
  );
}
