/********************************************************************************************************************************************/
/*                                                        PropTypes                                                                         */
/********************************************************************************************************************************************/
// Se debe de instalar proptypes desde npm

import * as PropTypes from "prop-types";

const NameTag = ({ name }) => {
  return (
    <main>
      <p>{name}</p>
    </main>
  );
};

NameTag.prototypes = {
  name: PropTypes.string
};

const App = () => <NameTag name="wilder" />;

export default App;



/********************************************************************************************************************************************/
/*                                                        Types                                                                             */
/********************************************************************************************************************************************/

import React from "react";

type objectValuesProps = {
  id: string;
  name: string;
};

type tipodeclaves = {
  [key: string]: string;
};

type NameTagProps = {
  name: string;
  optionalProp?: string;
  numero?: number;
  boleano?: boolean;
  matrices?: string[];
  soloEstos?: "loading" | "error" | "sucess";
  objetos?: tipodeclaves;
  arraydeobjeto?: {
    item: objectValuesProps;
    items: objectValuesProps[];
  }[];
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
};

const NameTag = ({ name }: NameTagProps) => {
  return (
    <main className="display-name">
      <p>{name}</p>
    </main>
  );
};

const Application = () => <NameTag name="wilder" onClick={() => {}} />;

export default Application;

