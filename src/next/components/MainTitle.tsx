import * as React from 'react';

interface Props {
  text: string;
}

const MainTitle = (props: Props) => <h1>{props.text}</h1>;

export default MainTitle;
