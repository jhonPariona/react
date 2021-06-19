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

type NameTagTypes = {
  name: String;
};

const NameTag = ({ name }: NameTagTypes) => {
  return (
    <main className="display-name">
      <p>{name}</p>
    </main>
  );
};

const Application = () => <NameTag name="wilder" />;

export default Application;
