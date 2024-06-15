export function Details({title}) {
  return (
    <>
      <div>{title}</div>
      <img src="./thumbnail.jpg" width={300} alt="" />
      <br />
      <button onClick={() => console.log('click')}>Click</button>
    </>
  );
}
