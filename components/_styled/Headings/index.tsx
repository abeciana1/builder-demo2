
interface HeadingI {
  text:string;
}

export const Heading1 = ({
  text
}: HeadingI) => {
  return (
    <h1>{text}</h1>
  )
}